import { Outlet } from 'react-router';
import { Navigation } from '@/app/components/Navigation';
import { ScrollToTop } from '@/app/components/ScrollToTop';

export function Root() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navigation />
      <Outlet />
      <ScrollToTop />
    </div>
  );
}