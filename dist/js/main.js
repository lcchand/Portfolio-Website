/* 
Service Workers determines whether the Browser request
will fetch content from the Website or the user's local Cache
per the user's connection
*/

// Make sure Service Workers are supported
if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
	navigator.serviceWorker
	    .register('../sw_cached_site.js')
	    .then(reg => console.log('Service Worker: Registered'))
	    .catch(err => console.log(`Service Worker: Error: ${err}`));
    });

}
