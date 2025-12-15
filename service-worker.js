const CACHE_NAME = 'pwa-cache-v1';
// 需要缓存的文件列表
const urlsToCache = [
  '/',
  '/index.html',
  '/icon.png',
  '/favicon.ico',
  '/css/index.css',
  '/js/utils.js',
  '/js/main.js',
  '/js/tw_cn.js',
  '/js/search/local-search.js',
  '/anzhiyu/random.js'
  // 如果你有 css 或 js 文件，也加在这里
];

// 1. 安装事件：Service Worker 安装时触发，缓存指定文件
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 2. 拦截请求：每次网页发起请求时触发
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // 如果缓存里有，直接返回缓存（实现离线访问）
        if (response) {
          return response;
        }
        // 如果缓存没有，就去网络请求
        return fetch(event.request);
      })
  );
});

// 3. 激活事件：用于清理旧缓存（版本更新时）
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
