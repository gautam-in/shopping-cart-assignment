module.exports = {
  images: {
    deviceSizes: [320, 375, 425, 640, 768, 1024, 1240, 1440, 2560, 3840],
  },
  pageExtensions: ["page.js"],
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:5000/:path*", // Proxy to Backend
      },
    ];
  },
};
