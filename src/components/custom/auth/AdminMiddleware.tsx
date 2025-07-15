import AdminLogin from '@/Admin/AdminLogin';
import { useAuth } from '@/hooks/AuthContext';
import { Navigate } from 'react-router-dom';

const AdminMiddleware = ({ children }: { children: React.ReactNode }) => {
  const { user, session } = useAuth();

  if (!user) {
    return (
        <AdminLogin/>
    )
  }

  if (user.email !== 'admin@gmail.com') {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AdminMiddleware;
