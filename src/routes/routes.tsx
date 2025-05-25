import { Route, Routes } from 'react-router-dom';
import {
  ROOT,
  ABOUT_US,
  CONTACT_US,
  DOCUMENTS,
  DOMAIN,
  MILESTONES,
  SLIDES,
} from './routes.json';
import Home from '../pages/home/Home';
import Domain from '../pages/domain/Domain';
import Milestones from '../pages/milestones/Milestones';
import Documents from '../pages/documents/Documents';
import Slides from '../pages/slides/Slides';
import AboutUs from '../pages/aboutUs/AboutUs';
import ContactUs from '../pages/contactUs/ContactUs';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROOT.route} element={<Home />} />
      <Route path={DOMAIN.route} element={<Domain />} />
      <Route path={MILESTONES.route} element={<Milestones />} />
      <Route path={DOCUMENTS.route} element={<Documents />} />
      <Route path={SLIDES.route} element={<Slides />} />
      <Route path={ABOUT_US.route} element={<AboutUs />} />
      <Route path={CONTACT_US.route} element={<ContactUs />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
