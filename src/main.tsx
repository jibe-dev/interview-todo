import 'modern-normalize/modern-normalize.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from './Root.tsx';
import { Index, action as indexAction, loader as indexLoader } from './routes/_index.tsx';
import { Trash } from './routes/trash.tsx';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        index: true,
        loader: indexLoader,
        action: indexAction,
        element: <Index />
      },
      {
        path: 'trash',
        element: <Trash />
      }
    ]
  }
]);

const root = document.getElementById('root');

if (root) {
  createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
