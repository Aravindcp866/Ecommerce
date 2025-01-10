const nextConfig = {
  env: {
    SC_DISABLE_SPEEDY: "false",
  },
  experimental: {
    appDir: true, // Enables the App Router feature
  },
  images: {
    domains: ['cdn.sanity.io'],
},
};

export default nextConfig;
