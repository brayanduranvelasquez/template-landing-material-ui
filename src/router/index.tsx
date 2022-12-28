import { lazy, LazyExoticComponent, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home: LazyExoticComponent<React.FC> = lazy(() => import('../pages/home'));

export default function RouterApp(): JSX.Element {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Home />
          </Suspense>
        }
      />
    </Routes>
  );
}
