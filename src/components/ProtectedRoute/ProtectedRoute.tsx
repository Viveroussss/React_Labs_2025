import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner';

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ element }) => {
  const { user, loading } = useAppSelector((state) => state.auth);

  if (loading) {
    return <LoadingSpinner fullScreen size="large" />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute; 