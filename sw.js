self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});
self.addEventListener('fetch', (e) => {
  // Biarkan kosong, hanya agar syarat PWA terpenuhi
});