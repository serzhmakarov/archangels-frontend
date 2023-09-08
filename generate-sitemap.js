const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const routesPath = {
  root: '/',
  about: '/about',
  help: '/help',
  reports: '/reports',
  documents: '/documents',
  terms: '/terms',
  policy: '/policy',
  refund: '/refund-policy',
  partners: '/partners',
};

const links = Object.values(routesPath).map((path) => ({
  url: path,
  changefreq: 'daily',
  priority: 0.9,
}));

const stream = new SitemapStream({ hostname: 'https://www.archangels.in.ua' });

streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
  fs.writeFile('public/sitemap.xml', data.toString(), function (err) {
    if (err) throw err;
    console.log('Sitemap.xml was created!');
  }),
);
