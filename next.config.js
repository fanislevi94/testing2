/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
<<<<<<< HEAD
    customKey: "http://localhost:3000/api/get",
    uriEdit: "http://localhost:3000/edit",
=======
    customKey: "http://localhost:3001/api/get",
    uriEdit: "http://localhost:3001/edit",
>>>>>>> 72502b3 (set commit)
  },
};

module.exports = nextConfig;
