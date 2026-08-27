import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { checkIsAdmin } from '../services/supabaseClient';

export default function AdminGuard() {
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkIsAdmin().then((result) => {
      setIsAdmin(result);
      setChecking(false);
    });
  }, []);

  if (checking) return null;
  if (!isAdmin) return <Navigate to="/admin/login" replace />;
  return <Outlet />;
}
