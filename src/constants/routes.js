import Home from '../components/pages/home';
import About from '../components/pages/about';
import HelpUs from '../components/pages/help';
import News from '../components/pages/news';
import Reports from '../components/pages/reports';

const routes = [
  {
    path: '/about',
    element: About,
  },
  {
    path: '/help',
    element: HelpUs
  },
  {
    path: '/news',
    element: News
  },
  {
    path: '/reports',
    element: Reports,
  },
  {
    path: '/',
    element: Home,
  }
];

export default routes;