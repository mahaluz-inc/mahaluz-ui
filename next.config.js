const withLess = require("next-with-less");

const nextConfig = withLess({
  reactStrictMode: true,
  lessLoaderOptions: {
    lessOptions: {
      modifyVars: {
        "primary-color": "#3643B5"
      },
    },
  },
});

module.exports = nextConfig;
