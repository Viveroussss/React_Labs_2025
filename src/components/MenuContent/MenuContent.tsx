import { FC, useState, useMemo, useEffect } from 'react';
import './MenuContent.css';
import { Button, ItemList, LoadingSpinner } from '../../components';
import useFetch from '../../hooks';
import { useAppDispatch, useAppSelector, setItems, setMenuLoading, setError, setSelectedCategory, MenuItem } from '../../store';
import MenuSkeleton from '../MenuSkeleton/MenuSkeleton';

const INITIAL_VISIBLE_ITEMS = 6;
const VISIBLE_ITEMS_INCREMENT = 6;

interface MenuContentProps {
  addItem: (item: Omit<MenuItem, 'description' | 'category'>, quantity: number) => void;
}

interface ApiMenuItem {
  id: string;
  meal: string;
  img: string;
  price: number;
  category: string;
  instructions: string;
  area: string;
}

export const MenuContent: FC<MenuContentProps> = ({ addItem }) => {
  const dispatch = useAppDispatch();
  const { items, loading, error, selectedCategory } = useAppSelector((state) => state.menu);
  const [visibleItems, setVisibleItems] = useState(INITIAL_VISIBLE_ITEMS);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const { data: apiItems, loading: apiLoading, error: apiError } = useFetch<ApiMenuItem[]>('https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals');

  useEffect(() => {
    if (apiLoading) {
      dispatch(setMenuLoading(true));
    } else {
      dispatch(setMenuLoading(false));
    }

    if (apiError) {
      console.error('API Error:', apiError);
      dispatch(setError(apiError.message));
    }

    if (apiItems && Array.isArray(apiItems)) {
      const transformedItems: MenuItem[] = apiItems.map(item => ({
        id: item.id,
        name: item.meal,
        description: item.instructions,
        price: item.price,
        image: item.img,
        category: item.category
      }));
      
      dispatch(setItems(transformedItems));
    }
  }, [apiItems, apiLoading, apiError, dispatch]);

  const handleSeeMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleItems((prev) => prev + VISIBLE_ITEMS_INCREMENT);
      setIsLoadingMore(false);
    }, 500);
  };

  const handleFilterChange = (category: string) => {
    dispatch(setSelectedCategory(category));
    setVisibleItems(INITIAL_VISIBLE_ITEMS);
  };

  const filteredItems = useMemo(() => 
    items.filter((item) => item.category === selectedCategory),
    [items, selectedCategory]
  );

  const categories = useMemo(() => 
    [...new Set(items.map((item) => item.category))],
    [items]
  );

  if (loading) {
    return <MenuSkeleton />;
  }

  if (error) {
    return (
      <div className="menu-wrapper">
        <div className="error-message">
          Failed to load menu items: {error}
        </div>
      </div>
    );
  }

  if (!items.length) {
    return (
      <div className="menu-wrapper">
        <div className="error-message">No menu items available</div>
      </div>
    );
  }

  return (
    <div className="menu-wrapper">
      <section className="menu-section">
        <div className="menu-description">
          <h2>Browse our menu</h2>
          <p>
            Use our menu to place an order online, or
            <span className="tooltip">
              phone
              <span className="tooltip-text">+370(677)71-4851</span>
            </span>
            our store to place a pickup order. Fast and fresh food.
          </p>
        </div>

        <div className="menu-buttons">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={selectedCategory === cat ? 'active' : ''}
            >
              {cat}
            </Button>
          ))}
        </div>

        {filteredItems.length > 0 ? (
          <>
            <ItemList items={filteredItems.slice(0, visibleItems)} addItem={addItem} />
            {visibleItems < filteredItems.length && (
              <div className="load-more-container">
                <Button 
                  className="see-more" 
                  onClick={handleSeeMore}
                  disabled={isLoadingMore}
                >
                  {isLoadingMore ? (
                    <span className="loading-button-content">
                      <LoadingSpinner size="small" showText={false} className="button-spinner" />
                      <span>Loading...</span>
                    </span>
                  ) : (
                    'See more'
                  )}
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="no-items-message">No items found in this category</div>
        )}
      </section>
    </div>
  );
}; 