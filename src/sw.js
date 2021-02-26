// importScripts('https://cdn.moengage.com/webpush/releases/serviceworker_cdn.min.latest.js');
// importScripts('libs/workbox-sw.prod.v2.1.2.js');

const workbox = new WorkboxSW({
    skipWaiting: true,
    clientsClaim: true
});

workbox.precache([]);
