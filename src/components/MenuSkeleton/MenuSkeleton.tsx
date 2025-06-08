import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './MenuSkeleton.css';

const MenuSkeleton: FC = () => {
  return (
    <div className="menu-wrapper">
      <section className="menu-section">
        <div className="menu-description">
          <Skeleton height={55} width={300} />
          <Skeleton count={2} width="80%" style={{ marginBottom: '8px' }} />
        </div>
        <div className="menu-buttons">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} width={120} height={44} />
          ))}
        </div>
        <div className="items-grid">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="item-card">
              <Skeleton 
                width={120} 
                height={120} 
                style={{ borderRadius: '4px' }}
                containerClassName="skeleton-image-container"
              />
              <div className="card-info">
                <div className="title-row">
                  <Skeleton width={150} height={24} />
                  <Skeleton width={60} height={24} />
                </div>
                <Skeleton 
                  count={3} 
                  width="90%" 
                  style={{ marginBottom: '8px' }}
                  containerClassName="skeleton-text-container"
                />
                <div className="order-row">
                  <Skeleton width={60} height={44} style={{ borderRadius: '6px' }} />
                  <Skeleton width={100} height={44} style={{ borderRadius: '6px' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MenuSkeleton; 