/* eslint-disable */

const pm2Config = {
  apps: [
    {
      name: 'start',
      script: './server/index.js',
      exec_mode: 'cluster_mode',
      instances: 1,
    }
  ]
};

module.exports = pm2Config;
