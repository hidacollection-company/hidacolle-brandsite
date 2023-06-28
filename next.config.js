/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  experimental: {
    scrollRestoration: true
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'workspace.hidacolle.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
  trailingSlash: true
};

loadEnv(process.env.APP_ENV);

/**
 * @param {string} appEnv
 */

// function loadEnv(appEnv = "local") {
//   const env = {
//     ...require(`./env/env.${appEnv}`),
//     NEXT_PUBLIC_APP_ENV: appEnv,
//   };

//   Object.entries(env).forEach(([key, value]) => {
//     process.env[key] = value;
//   });
// }

function loadEnv(appEnv = "local") {
  let env;
  try {
    env = require(`./env/env.${appEnv}`);
  } catch (error) {
    console.error(`Failed to load environment file for appEnv: ${appEnv}`);
    process.exit(1);
  }

  // 以下の処理は変更の必要はありません

  Object.entries(env).forEach(([key, value]) => {
    process.env[key] = value;
  });
}