const express = require('express');
const router = express.Router();

// Import API routes
const networkRoutes = require('./api/network');
const deviceRoutes = require('./api/device');

// Set up main routes
router.use('/api/network', networkRoutes);
router.use('/api/device', deviceRoutes);

// Render the dashboard page
router.get('/', (req, res) => {
    res.render('pages/dashboard');
});

// Render the monitoring page
router.get('/monitoring', (req, res) => {
    res.render('pages/monitoring');
});

module.exports = router;