import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { LoadingSpinner } from '../../components';

const ProtectedRoute: FC = () => {
  const { user, loading } = useAppSelector((state) => state.auth);

  if (loading) {
    return <LoadingSpinner fullScreen size="large" />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute; 