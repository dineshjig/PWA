const StaticProperties = {
    hostname: '',
    apiBaseURL: 'https://api.auctionx.dev/',
};

const localHosts = ['localhost:3000', '127.0.0.1:3000'];

// Step 1: Get Hostname
(function detectHostname() {
    const parsedUrl = new URL(window.location.href);
    StaticProperties.hostname = parsedUrl.host;

    // Override for local development
    if (localHosts.includes(StaticProperties.hostname)) {
        StaticProperties.hostname = 'tushar.auctionx.dev';
    }
})();

// Step 2: Call API and set logo
(async function fetchAndSetLogo() {
    try {
        const auctionHouseId = 'auction-house-id'; // Replace with real ID
        const localHosts = ["localhost:7456", "pwa-mu-nine.vercel.app", "127.0.0.1:7456", "127.0.0.1:5500"];
        StaticProperties.hostname = localHosts.includes(StaticProperties.hostname) ? "tushar.auctionx.dev" : "tushar.auctionx.dev";
        const url = `${StaticProperties.apiBaseURL}v1/auction-house/${auctionHouseId}?subdomain=${StaticProperties.hostname}`;

        const response = await fetch(url, { method: 'GET' });
        const result = await response.json();

        if (
            result.success &&
            result.data &&
            result.data.currentAuctionHouse &&
            result.data.currentAuctionHouse.medias &&
            result.data.currentAuctionHouse.medias.local_path
        ) {
            const imagePath = result.data.currentAuctionHouse.medias.local_path;
            const imageUrl = StaticProperties.apiBaseURL + imagePath;

            const logoElement = document.getElementById('logo');
            if (logoElement) {
                logoElement.src = imageUrl;
            }
        } else {
            console.error('Logo image not found in response', result);
        }
    } catch (error) {
        console.error('API request failed', error);
    }
})();
