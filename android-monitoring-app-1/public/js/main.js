// File: /android-monitoring-app/android-monitoring-app/public/js/main.js

const socket = io();

// Function to update network speeds
function updateNetworkSpeeds(uploadSpeed, downloadSpeed) {
    const uploadElement = document.getElementById('upload-speed');
    const downloadElement = document.getElementById('download-speed');

    uploadElement.innerText = `Upload Speed: ${uploadSpeed} Mbps`;
    downloadElement.innerText = `Download Speed: ${downloadSpeed} Mbps`;
}

// Function to fetch ISP information
function fetchISPInfo() {
    fetch('/api/device/isp')
        .then(response => response.json())
        .then(data => {
            const ispElement = document.getElementById('isp-info');
            ispElement.innerText = `ISP: ${data.isp}`;
        })
        .catch(error => console.error('Error fetching ISP info:', error));
}

// Socket.IO event listeners
socket.on('networkUpdate', (data) => {
    updateNetworkSpeeds(data.uploadSpeed, data.downloadSpeed);
});

// Initial fetch for ISP information
fetchISPInfo();