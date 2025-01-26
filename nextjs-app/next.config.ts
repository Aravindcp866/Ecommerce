const nextConfig = {
  env: {
    SC_DISABLE_SPEEDY: "false",
  },
  experimental: {
    // appDir: true, // Comment or remove this line
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
};

export default nextConfig;
