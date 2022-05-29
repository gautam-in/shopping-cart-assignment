export default {
    mount: {
        // directory name: 'build directory'
        public: '/',
        src: '/dist'
    },
    plugins: [
        '@snowpack/plugin-sass',
        '@snowpack/plugin-typescript',
    ],
    routes: [
        {
          match: 'routes',
          src: '.*',
          dest: '/index.html',
        },
      ],
};