import { createBrowserRouter } from 'react-router';
import { Root } from '@/app/components/Root';
import { HomePage } from '@/app/components/HomePage';
import { TimelinePage } from '@/app/components/TimelinePage';
import { GalleryPage } from '@/app/components/GalleryPage';
import { AboutPage } from '@/app/components/AboutPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'timeline',
        Component: TimelinePage,
      },
      {
        path: 'gallery',
        Component: GalleryPage,
      },
      {
        path: 'about',
        Component: AboutPage,
      },
    ],
  },
]);
