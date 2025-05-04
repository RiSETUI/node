const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const networkRoutes = require('./routes/api/network');
const deviceRoutes = require('./routes/api/device');
const indexRoutes = require('./routes/index');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoutes);
app.use('/api/network', networkRoutes);
app.use('/api/device', deviceRoutes);

io.on('connection', (socket) => {
    console.log('New client connected');

    // Emit real-time data here
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});