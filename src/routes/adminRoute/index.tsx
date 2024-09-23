import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/auth';

const AdminRoute = ({ children }) => {
  const { token, userType } = useAuthStore();

  if (!token) {
    return <Navigate to={'/login'} />;
  }

  if (userType !== 'ADMIN') {
    return <Navigate to={'/'} />;
  }

  return children;
};

export default AdminRoute;