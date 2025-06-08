import { FC } from 'react';
import './LoadingSpinner.css';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  fullScreen?: boolean;
  showText?: boolean;
  className?: string;
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({ 
  size = 'medium',
  fullScreen = false,
  showText = true,
  className = ''
}) => {
  return (
    <div className={`loading-container ${fullScreen ? 'fullscreen' : ''} ${className}`}>
      <div className={`spinner ${size}`}></div>
      {showText && <p className="loading-text">Loading...</p>}
    </div>
  );
}; 