/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'], // Add this to allow Sanity-hosted images
      },
};

export default nextConfig;
