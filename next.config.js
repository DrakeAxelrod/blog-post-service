/** @type {import('next').NextConfig} */
const IS_DEV = process.env.NODE_ENV === "development";
module.exports = {
  reactStrictMode: true,
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/draxel/image/upload/",
    domains: ["res.cloudinary.com"],
  },
  env: {
    IS_DEV: IS_DEV,
    VERCEL_URL: process.env.VERCEL_URL
  },
};
