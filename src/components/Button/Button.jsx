import './Button.css'

export const Button = ({ children, variant = 'default', ...props }) => {
    return (
      <button className={`btn ${variant}`} {...props}>
        {children}
      </button>
    );
  };