import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Dictionary from 'pages/Dictionary';
import { MyVocabulary } from 'pages/MyVocabulary';
import { Training } from 'pages/Training';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dictionary />} />
        {/* <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
        <Route path="training" element={<Training />} />
        <Route path="vocabulary" element={<MyVocabulary />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};
