const express = require('express');
const router = express.Router();
const DeviceController = require('../../controllers/deviceController');

const deviceController = new DeviceController();

// Route to get device information
router.get('/info', deviceController.getDeviceInfo.bind(deviceController));

// Route to get ISP information
router.get('/isp', deviceController.getISPInfo.bind(deviceController));

module.exports = router;