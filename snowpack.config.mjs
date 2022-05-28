export default {
    mount: {
        // directory name: 'build directory'
        public: '/',
        src: '/dist'
    },
    plugins: [
        '@snowpack/plugin-sass',
        '@snowpack/plugin-typescript',
    ]
};