import { Route, Routes } from 'react-router-dom';
import { ROOT } from './routes.json';
import Home from '../pages/home/Home';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROOT.route} element={<Home />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
