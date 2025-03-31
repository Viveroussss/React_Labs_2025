export const ItemList = ({ items }) => {
    return (
      <div>
        <h2>Item List</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  };