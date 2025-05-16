self.addEventListener('fetch', function (event) {
    event.respondWith(fetch(event.request));
});
window.addEventListener('REQ_BASE_URL', function () {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    console.log("const baseUrl = import.meta.env.VITE_BASE_URL;", baseUrl);
    const event = new CustomEvent("RES_BASE_URL", {
        detail: {
            platform: baseUrl
        }
    });
    document.dispatchEvent(event);

});