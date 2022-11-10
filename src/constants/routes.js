import Home from '../components/pages/home';
import About from '../components/pages/about';
import HelpUs from '../components/pages/help';
import Posts from '../components/pages/posts';
import Reports from '../components/pages/reports';
import Admin from '../components/pages/admin';
import PostItem from '../components/pages/post-item';
import ReportItem from '../components/pages/report-item';
import Terms from '../components/pages/terms/ua';

const routes = [
  {
    path: '/admin',
    element: Admin,
  },
  {
    path: '/about',
    element: About,
  },
  {
    path: '/help',
    element: HelpUs
  },
  { 
    path: '/news/:id',
    element: PostItem,
  },
  {
    path: '/news',
    element: Posts
  },
  {
    path: '/reports',
    element: Reports,
  },
  { 
    path: '/reports/:id',
    element: ReportItem,
  },
  {
    path: '/terms',
    element: Terms,
  },
  {
    path: '/',
    element: Home,
  },
];

export default routes;