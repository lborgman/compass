//========== Specific ====================================================
const SW_VERSION = "0.1.006";
// throw Error("Test worker error");
const logColors = "color: green; background: yellow;";
console.log(`%csw-worker-input.js ${SW_VERSION} is here`, logColors + " font-size: 20px;");

// https://stackoverflow.com/questions/61080783/handling-errors-in-async-event-handlers-in-javascript-in-the-web-browser
// Error handling with Async/Await in JS - ITNEXT
// https://itnext.io/error-handling-with-async-await-in-js-26c3f20bc06a
function errorHandlerAsyncEvent(asyncFun) {
    return function (evt) {
        asyncFun(evt).catch(err => {
            console.log("handler", err);
            throw err;
        })
    }
}


// https://www.npmjs.com/package/workbox-sw
// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');
// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');
const urlWorkbox = 'https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js';
// const urlWorkbox = 'https://storage.googleapis.com/workbox-cdn/releases/7.0.1/workbox-sw.js';
console.log(urlWorkbox);
importScripts(urlWorkbox);

workbox.setConfig({
    debug: false
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST)



////////////////////////////////////////////////////////////////////////
//========== Common ====================================================

// https://stackoverflow.com/questions/38168276/navigator-serviceworker-controller-is-null-until-page-refresh
// Panic testing!
/*
self.addEventListener("install", (evt) => {
    // console.warn("service-worker install event");
    evt.waitUntil(self.skipWaiting()); // Activate worker immediately
});
*/
// https://stackoverflow.com/questions/70331036/why-service-workers-fetch-event-handler-not-being-called-but-still-worked
self.addEventListener("activate", (evt) => {
    console.warn("service-worker activate event");
    evt.waitUntil(self.clients.claim()); // Become available to all pages
});