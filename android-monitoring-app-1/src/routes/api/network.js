const express = require('express');
const router = express.Router();
const NetworkController = require('../../controllers/networkController');

const networkController = new NetworkController();

// Route to get real-time network speeds
router.get('/speeds', networkController.getNetworkSpeeds);

// Route to get ISP information
router.get('/isp', networkController.getISPInfo);

module.exports = router;