/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://sloane.biz',
  generateRobotsTxt: true, // Generate robots.txt file
  exclude: ['/app/*'], // Exclude specific pages like https://app.sloane.biz/
  outDir: 'public', // Ensure it's generated in the public directory
};
