
// Register a service worker hosted at the root of the site

	if ('serviceWorker' in navigator) {

	  navigator.serviceWorker.register('/sw.js').then(registration => {
	    console.log('Service worker registration succeeded:', registration);
	  }).catch(function(error) {
	    console.log('Service worker registration failed:', error);
	  });

	} else {
	  console.log('Service workers are not supported.');
	}

// Cache on install

	self.addEventListener('install', function(event) {
		event.waitUntil(
			caches.open('restaurant-review-app').then(cache => {
				return cache.addAll([
					'/',
	   				'restaurant.html',
	   				'css/styles.css',
	   				'css/restaurant.css',
	   				'js/restaurant_info.js',
	   				'js/main.js',
	   				'js/dbhelper.js',
	   				'img/1.jpg',
	   				'img/2.jpg',
	   				'img/3.jpg',
	   				'img/4.jpg',
	   				'img/5.jpg',
	   				'img/6.jpg',
	   				'img/7.jpg',
	   				'img/8.jpg',
	   				'img/9.jpg',
	   				'img/10.jpg',
	   			]);
			})
		);
	});

// Handling fetch event

	self.addEventListener('fetch', function(event) {
		const requestUrl = new URL(event.request.url);
		if (requestUrl.origin === location.origin) {
			
			if (requestUrl.pathname === '/') {
				event.respondWith(caches.match('/'));
				return
			}
		}
	});