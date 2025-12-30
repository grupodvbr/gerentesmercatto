self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open('painel-gerencia-v1')
      .then(cache=>cache.addAll([
        './',
        './index.html',
        './home.html',
        './logo.png'
      ]))
  );
});

self.addEventListener('fetch', e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r || fetch(e.request))
  );
});
