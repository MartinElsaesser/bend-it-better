
var CACHE_NAME = 'Bend It Better';
var URLsToCache = [
	"/bend-it-better/A3.e2a3b2b7.mp3",
	"/bend-it-better/A4.4292053b.mp3",
	"/bend-it-better/A5.dd98302f.mp3",
	"/bend-it-better/A6.18314b8d.mp3",
	"/bend-it-better/app.js",
	"/bend-it-better/As3.79cd29e5.mp3",
	"/bend-it-better/As4.cad2ae04.mp3",
	"/bend-it-better/As5.15fa28d6.mp3",
	"/bend-it-better/As6.0e7660ef.mp3",
	"/bend-it-better/B3.3c02cb2e.mp3",
	"/bend-it-better/B4.3382fa50.mp3",
	"/bend-it-better/B5.9546fc3a.mp3",
	"/bend-it-better/B6.cead709a.mp3",
	"/bend-it-better/C4.2c6f1e0c.mp3",
	"/bend-it-better/C5.2ea9e3cc.mp3",
	"/bend-it-better/C6.c09133e5.mp3",
	"/bend-it-better/C7.95b7746e.mp3",
	"/bend-it-better/Cs4.cfae8581.mp3",
	"/bend-it-better/Cs5.9c2c990d.mp3",
	"/bend-it-better/Cs6.26d92fe7.mp3",
	"/bend-it-better/Cs7.00ba8474.mp3",
	"/bend-it-better/D3.5f4f22f6.mp3",
	"/bend-it-better/D4.67d61f07.mp3",
	"/bend-it-better/D5.d61a62c9.mp3",
	"/bend-it-better/D6.e4ab844e.mp3",
	"/bend-it-better/D7.74b2c4ce.mp3",
	"/bend-it-better/Ds3.e838e4c6.mp3",
	"/bend-it-better/Ds4.f654a047.mp3",
	"/bend-it-better/Ds5.a94e4a65.mp3",
	"/bend-it-better/Ds6.d2822afd.mp3",
	"/bend-it-better/Ds7.cdfe880c.mp3",
	"/bend-it-better/E3.6c8c0d1f.mp3",
	"/bend-it-better/E4.9beabbc0.mp3",
	"/bend-it-better/E5.027b78fd.mp3",
	"/bend-it-better/E6.4c2bf539.mp3",
	"/bend-it-better/E7.93d6d7c3.mp3",
	"/bend-it-better/F3.715bcf1d.mp3",
	"/bend-it-better/F4.ea2242dd.mp3",
	"/bend-it-better/F5.8806ced1.mp3",
	"/bend-it-better/F6.ae3e2e30.mp3",
	"/bend-it-better/F7.eebc4a05.mp3",
	"/bend-it-better/Fs3.544bcce3.mp3",
	"/bend-it-better/Fs4.1905a14b.mp3",
	"/bend-it-better/Fs5.f8d47f5f.mp3",
	"/bend-it-better/Fs6.b438bdf5.mp3",
	"/bend-it-better/Fs7.c37cd8c2.mp3",
	"/bend-it-better/G3.392643f1.mp3",
	"/bend-it-better/G4.60302558.mp3",
	"/bend-it-better/G5.cdbeb690.mp3",
	"/bend-it-better/G6.0319d118.mp3",
	"/bend-it-better/G7.0b19fa86.mp3",
	"/bend-it-better/Gs3.f40549e5.mp3",
	"/bend-it-better/Gs4.b70ab6e8.mp3",
	"/bend-it-better/Gs5.c90beab2.mp3",
	"/bend-it-better/Gs6.8f5e9339.mp3",
	"/bend-it-better/icon-192x192.png",
	"/bend-it-better/icon-256x256.png",
	"/bend-it-better/icon-384x384.png",
	"/bend-it-better/icon-512x512.png",
	"/bend-it-better/index.html",
	"/bend-it-better/",
	"/bend-it-better/logo.beb6d465.gif",
	"/bend-it-better/manifest.json",
	"/bend-it-better/style.css"
];

self.addEventListener('install', function (event) {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(function (cache) {
				console.log('Opened cache');
				return cache.addAll(URLsToCache);
			})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request, { ignoreSearch: true })
			.then(function (response) {
				// Cache hit - return response
				if (response) {
					return response;
				}
				return fetch(event.request);
			})
			.catch(error => console.log({ error, url: event.request.url }))
	);
});

