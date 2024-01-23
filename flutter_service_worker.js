'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d2b8bee05682a9b65c66c230df3d8bbe",
"index.html": "f0a2126caa2627005bce207a7585260e",
"/": "f0a2126caa2627005bce207a7585260e",
"main.dart.js": "f923ea6cfb5a28e02158577d6090986e",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "98dc390f61935c5a71d63ddc3baa562f",
"assets/AssetManifest.json": "7414a568718311b714ebc745b0292e01",
"assets/NOTICES": "eec3ef642ccc0b1bfd3221ed03567f5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "39da7e0f23d56e518b49fd40a303e073",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "1fe14031730cd3d42f388171510ff198",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "1bd3b528a74f91fae045418c4f064176",
"assets/fonts/MaterialIcons-Regular.otf": "e1843792e66891362822a4654f9f2081",
"assets/assets/boy_icon.png": "e2871d4ccad450a826ddb19e15dacde4",
"assets/assets/cashbacksLogoSelected.png": "dd5436c906d752728f354a536847c3ae",
"assets/assets/xuxem_user_logo.png": "da6b77bc20314e0a54ef580be12c57e3",
"assets/assets/dashboardLogoUnselected.png": "61634c038d29f8140eb5bfce09270836",
"assets/assets/price_icon.png": "d39418aaa69c31b0f419e21e969d4007",
"assets/assets/status_cancelled.png": "27ccd5001826c569c14b5ecf74fb10ad",
"assets/assets/xuxem_partner_logo.png": "4c0cb25cf893395928c0fee994a08dea",
"assets/assets/bday_icon.png": "616ccb95948a108e8a27b27c1c80a569",
"assets/assets/star_icon.png": "704ddc685648b0052bf657a34446b331",
"assets/assets/clinic-icon.png": "41683787c0575a3cc51245a1a1e0bad4",
"assets/assets/scanQR.png": "1614137ef4d34a9551ca9f25ca28d65c",
"assets/assets/push_notif_icon.png": "1979254c76a798d8ee3747594b4988cf",
"assets/assets/dashboardLogoSelected.png": "61f9f7071845ae0f1e667e3ed0b3a053",
"assets/assets/patientsLogoSelected.png": "bc60650be2a97dce74309373e4129890",
"assets/assets/clinicsLogoSelected.png": "3ba138d0504f1c2380971ddfbe30d52b",
"assets/assets/partner_logo.png": "c23fad38e48a18c034f4cbdaf62ed634",
"assets/assets/clinicsLogoUnselected.png": "260bd9553f0e2224788611ec3a67acb0",
"assets/assets/settings_bg.png": "7bfe68eba06ac9c5e8919869672c214a",
"assets/assets/upload_icon.png": "7534c561afce77e115b5344ccfc2f522",
"assets/assets/invoicesLogoUnselected.png": "997972d4961a81131b388db1582ae446",
"assets/assets/cashback_icon.png": "94f6281b23b1cee802f514be8fe8d76b",
"assets/assets/xuxemU_msg_Icon.png": "65306ec8f13c8e9e851739b45c46a649",
"assets/assets/xuxemP_msg_Icon.png": "c673937a9ca5cb3f46b7beb41a0005ed",
"assets/assets/cashbacksLogoUnselected.png": "2546321bd2cbbf2317e4cbab2eda97ee",
"assets/assets/rate_us_icon.png": "2c486b900dcd9e79e3a6746d8b210c21",
"assets/assets/msgs_bg.png": "69f594c610ff209788df324c0d2afda3",
"assets/assets/login-bg.png": "c8c2ba56064cd734df15ae73bae431c5",
"assets/assets/language_icon.png": "b9e7852453797a20a189eccdf445828a",
"assets/assets/admin_logo.svg": "a13ef5af72cbc8259495a8a346193230",
"assets/assets/logout_icon.png": "d55209b6b0140e5e211b129700499ea3",
"assets/assets/btm_offers_icon.png": "f08382e1659fed3f5ad97844b68e1df4",
"assets/assets/status_pending.png": "15e968e38b35bd8e88c0a53fed988de7",
"assets/assets/ok_icon.png": "e072c3a544f1bebb6f6a0a09ff4d85ac",
"assets/assets/zigzag_top_border.png": "e02b1999bf98e2139289a4c95cd77515",
"assets/assets/invoicesLogoSelected.png": "b5c73fb9455f1da169284b0ada75902d",
"assets/assets/admin_logo.png": "f17791310b36447b0baa569c105aa998",
"assets/assets/total_icon.png": "1d6405af41ecd3f9b2d641b37991da95",
"assets/assets/status_completed.png": "a979d1a7e495cf155f5644f24ea9f921",
"assets/assets/btm_memberships_icon.png": "aa287d30e1ba5860312390b67e7178fc",
"assets/assets/patientsLogoUnSelected.png": "8c0d3ace971486a444d33d935ce1f459",
"assets/assets/rated_star.png": "16d5e5ec899a9801417fcf08c971e9a5",
"assets/assets/tick_icon.png": "44926cc20a18715e0824f2d2b69a9f44",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
