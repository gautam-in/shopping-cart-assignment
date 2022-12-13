const SitemapGenerator = require('sitemap-generator');
const SITEMAP_URL = 'https://www.reactseofriendlyspatemplate.com';

// create generator
const generator = SitemapGenerator(SITEMAP_URL, {
  lastMod: true,
  stripQuerystring: true,
  filepath: `${__dirname}/public/sitemap.xml`,
});

// register event listener (SUCCESS => sitemaps created)
generator.on('done', () => {
  console.log(`sitemap.xml successfully created for URL: ${SITEMAP_URL}\n`);
});

// register event listener (ERROR => { code: 404, message: 'Not found.', url: 'http://example.com/foo' })
generator.on('error', (error) => {
  console.error(`${JSON.stringify(error)}\n`);
});

// start the crawler
generator.start();
