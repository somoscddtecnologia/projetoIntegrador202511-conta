// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'rpv-conta',
      script: './src/index.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '256M',

      env: {
        NODE_ENV: 'production',
        PORT: 5001,
      },
    },
  ],
};