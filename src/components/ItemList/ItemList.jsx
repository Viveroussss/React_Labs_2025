import { Button } from "../Button/Button";

export const ItemList = ({ items }) => {
  return (
    <div className="menu-grid">
      {items.map(({ name, price, img }) => (
        <div className="menu-card" key={name}>
          <img src={`./src/assets/${img}`} alt={name} />
          <div className="card-info">
            <div className="title-row">
              <h4>{name}</h4>
              <span>{price}</span>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="order-row">
              <input type="number" value="1" min="1" />
              <Button variant="add">Add to cart</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
