const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
require('dotenv').config({ path: '.env' });

module.exports = (phase) => {

  const env = {
    accessToken: process.env.GITHUB_ACCESS_TOKEN,
    devMode: phase === PHASE_DEVELOPMENT_SERVER,
  }

  return {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader'
      });
  
      return config;
    },
    webpackDevMiddleware: (config) => {
      return config;
    },
    env
  }
};