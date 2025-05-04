// This file includes the Chart.js library for rendering charts to visualize network speeds and other metrics.

const ctx = document.getElementById('networkChart').getContext('2d');

const networkChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [], // Labels for the x-axis (time)
        datasets: [{
            label: 'Upload Speed (Mbps)',
            data: [], // Data for upload speeds
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderWidth: 1,
            fill: true,
        }, {
            label: 'Download Speed (Mbps)',
            data: [], // Data for download speeds
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderWidth: 1,
            fill: true,
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Speed (Mbps)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Time'
                }
            }
        }
    }
});

// Function to update the chart with new data
function updateChart(uploadSpeed, downloadSpeed) {
    const currentTime = new Date().toLocaleTimeString();

    // Add new data points
    networkChart.data.labels.push(currentTime);
    networkChart.data.datasets[0].data.push(uploadSpeed);
    networkChart.data.datasets[1].data.push(downloadSpeed);

    // Limit the number of data points displayed
    if (networkChart.data.labels.length > 20) {
        networkChart.data.labels.shift();
        networkChart.data.datasets[0].data.shift();
        networkChart.data.datasets[1].data.shift();
    }

    networkChart.update();
}

// Example of how to call updateChart with random data
setInterval(() => {
    const randomUploadSpeed = Math.random() * 10; // Simulated upload speed
    const randomDownloadSpeed = Math.random() * 10; // Simulated download speed
    updateChart(randomUploadSpeed, randomDownloadSpeed);
}, 2000); // Update every 2 seconds