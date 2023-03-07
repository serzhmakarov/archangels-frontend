import Home from '../components/pages/home';
import About from '../components/pages/about';
import HelpUs from '../components/pages/help';
import Posts from '../components/pages/posts';
import Reports from '../components/pages/reports';
import Admin from '../components/pages/admin';
import PostItem from '../components/pages/post-item';
import ReportItem from '../components/pages/report-item';
import Terms from '../components/pages/terms/ua';
import Policy from '../components/pages/policy/ua';
import RefundPolicy from '../components/pages/refund/ua';
import withLayout from '../HOC/withLayout';

import { routesPath } from '../constants';

const routes = [
  {
    path: routesPath.admin,
    element: Admin,
  },
  {
    path: routesPath.about,
    element: withLayout(About),
  },
  {
    path: routesPath.help,
    element: withLayout(HelpUs),
  },
  {
    path: routesPath.news,
    element: withLayout(Posts),
    exact: true,
  },
  { 
    path: routesPath.new,
    element: withLayout(PostItem),
  },
  {
    path: routesPath.reports,
    element: withLayout(Reports),
  },
  { 
    path: routesPath.report,
    element: withLayout(ReportItem),
  },
  {
    path: routesPath.terms,
    element: withLayout(Terms),
  },
  {
    path: routesPath.policy,
    element: withLayout(Policy),
  },
  {
    path: routesPath.refund,
    element: withLayout(RefundPolicy),
  },
  {
    path: routesPath.root,
    element: withLayout(Home),
  },
];

export default routes;