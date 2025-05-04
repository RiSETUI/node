# Android Monitoring App

## Overview
The Android Monitoring App is a real-time monitoring tool designed to track network speeds, ISP information, and other device metrics for Android devices. Built with modern web technologies, this application provides a sleek user interface and utilizes WebSockets for real-time data updates.

## Features
- Real-time upload and download speed monitoring
- ISP information display
- Modern UI using Tailwind CSS
- Interactive charts using Chart.js
- Iconography from Lucide icons
- Server-Sent Events (SSE) for real-time updates

## Technologies Used
- Node.js
- Express
- Socket.IO
- EJS (Embedded JavaScript)
- Tailwind CSS
- Chart.js
- Lucide icons

## Project Structure
```
android-monitoring-app
├── public
│   ├── css
│   │   └── tailwind.css
│   ├── js
│   │   ├── chart.js
│   │   └── main.js
│   └── icons
│       └── lucide-icons.js
├── src
│   ├── controllers
│   │   ├── networkController.js
│   │   └── deviceController.js
│   ├── routes
│   │   ├── api
│   │   │   ├── network.js
│   │   │   └── device.js
│   │   └── index.js
│   ├── views
│   │   ├── layouts
│   │   │   └── main.ejs
│   │   ├── pages
│   │   │   ├── dashboard.ejs
│   │   │   └── monitoring.ejs
│   │   └── partials
│   │       ├── header.ejs
│   │       └── footer.ejs
│   └── app.js
├── .env
├── package.json
├── tailwind.config.js
└── README.md
```

## Installation Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd android-monitoring-app
   ```

2. **Install dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your configuration:
   ```
   DATABASE_URL=your_database_url_here
   API_KEY=your_api_key_here
   PORT=3000
   NODE_ENV=development
   ANDROID_DEVICE_IP=your_device_ip_here
   SSE_PORT=4000
   SOCKET_IO_PORT=5000
   ```

4. **Run the application**
   Start the server with:
   ```bash
   npm start
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:3000` to view the dashboard.

## Usage
Once the application is running, you can monitor the network speeds and ISP information in real-time. The dashboard provides a visual representation of the data using charts and graphs.

## Contributing
Feel free to submit issues or pull requests to improve the application. Contributions are welcome!

## License
This project is licensed under the MIT License.