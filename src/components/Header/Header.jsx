import './Header.css'

export const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-container logo-icon">
        <img src="..\src\assets\Logo.svg"/>
      </div>

      <div className="header-content">
        <nav className="nav-list">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Menu</a>
          <a href="#" className="nav-link">Company</a>
          <a href="#" className="nav-link">Login</a>
        </nav>

        <div className="cart">
          <button className="cart-button">
          <img className='cart-icon' src='..\src\assets\Frame.svg'></img>
          </button>
          <span className="cart-count">
            0
          </span>
        </div>
      </div>
      
    </header>
  );
};
