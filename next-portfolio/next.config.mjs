/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // We add basePath and assetPrefix so that when hosted on GitHub Pages at /portfolio, 
    // it properly maps the CSS, JS, and image paths.
    // If you ever use a custom domain (e.g. www.sathvik.com), you should remove these two lines!
    basePath: '/portfolio',
    assetPrefix: '/portfolio',
};

export default nextConfig;
