const cacheName = 'v2';



// Call Install Event
self.addEventListener('install', (e) => {
    console.log('Service Worker: installed');
});

// Call Activate Event
self.addEventListener('activate', (e) => {
    console.log('Service Worker: Activated');
    // Remove unwanted Caches
    e.waitUntil(
	caches.keys().then(cacheNames => {
	    return Promise.all(
		cacheNames.map(cache => { // Loop thru Caches on machine
		    if( cache != cacheName) {
			console.log('Service Worker: Clearing Old Cache');
			return caches.delete(cache);
		    }
		})
	    );
	})
    );
});



// Call Fetch Event
self.addEventListener('fetch', e => {
    console.log('Service Worker: Fetching files');
    e.respondWith(
	fetch(e.request)
	    .then(res => {
		// Make copy/clone of response
		const resClone = res.clone();
		// Open Cache
		caches.open(cacheName).then(cache => {
		    // Add response to the Cache
		    cache.put(e.request, resClone);// Something is anoymous/error
		    });
		return res;
	    })
	    .catch(err => caches.match(e.request).then(res => res))
    );
});
