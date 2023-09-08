import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { t } from 'i18next';

import DefaultPicture from '../assets/images/post_image_default.jpg';
import Layout from '../components/globals/layout';

const keywords =
  'charitable foundations, nonprofit organizations, philanthropy, charitable giving, social impact';

function getWebpageTitle(pathname) {
  const replacedPathname = pathname.split('/').slice(1, 2).join() || 'main';

  return `${t('home.webpage_name')} | ${t(`home.header.${replacedPathname}`)}`;
}

const withLayout = (Component) => (props) => {
  const location = useLocation();

  const webpageTitle = getWebpageTitle(location.pathname);
  return (
    <Layout>
      <Helmet>
        <title>{webpageTitle}</title>
        <meta name="description" content={t('home.head.work_text')} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={webpageTitle} />
        <meta property="og:description" content={t('home.head.work_text')} />
        <meta property="og:image" content={DefaultPicture} />
      </Helmet>
      <Component {...props} />
    </Layout>
  );
};

export default withLayout;
