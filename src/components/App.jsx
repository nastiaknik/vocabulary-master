import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Dictionary = lazy(() => import('pages/Dictionary'));
const Training = lazy(() => import('pages/Training'));
const MyVocabulary = lazy(() => import('pages/MyVocabulary'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dictionary />} />
        <Route path="training" element={<Training />} />
        <Route path="vocabulary" element={<MyVocabulary />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
