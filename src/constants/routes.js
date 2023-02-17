import Home from '../components/pages/home';
import About from '../components/pages/about';
import HelpUs from '../components/pages/help';
import Posts from '../components/pages/posts';
import Reports from '../components/pages/reports';
import Admin from '../components/pages/admin';
import PostItem from '../components/pages/post-item';
import ReportItem from '../components/pages/report-item';
import AdminPost from '../components/pages/admin/pages/createPost';
import Terms from '../components/pages/terms/ua';

import { routesPath } from '../constants';

const routes = [
  {
    path: routesPath.adminCreatePost,
    element: AdminPost,
  },
  {
    path: routesPath.adminCreateReport,
    element: AdminPost,
  },
  {
    path: routesPath.adminUpdatePost,
    element: AdminPost,
  },
  {
    path: routesPath.adminUpdateReport,
    element: AdminPost,
  },

  {
    path: routesPath.admin,
    element: Admin,
  },
  {
    path: routesPath.about,
    element: About,
  },
  {
    path: routesPath.help,
    element: HelpUs
  },
  {
    path: routesPath.news,
    element: Posts
  },
  { 
    path: routesPath.new,
    element: PostItem,
  },
  {
    path: routesPath.reports,
    element: Reports,
  },
  { 
    path: routesPath.report,
    element: ReportItem,
  },
  {
    path: routesPath.terms,
    element: Terms,
  },
  {
    path: routesPath.root,
    element: Home,
  },
];

export default routes;