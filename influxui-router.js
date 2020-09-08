// Express imports
const express = require("express");
const fs = require('fs').promises;
var path = require('path');
const app = express();

// Timestamp for which returns current date and time
var time = new Date().toLocaleString(undefined, { timeZone: 'Asia/Kolkata' });

// Serve entire folder
app.use('/', express.static(__dirname + '/'));

// Start Server
const port = 9999;
app.listen(port, () => console.log(`[ ${time} : --+++=== INFLUXDB V.1.8 ===+++-- : http://localhost:${port} 🔥 ]`));