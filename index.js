const express = require('express');
const socket = require('socket.io')

const app = express();
app.use(express.static('public'))


const server = require('http').Server(app);
const io = require('socket.io')(server);
io.on('connection', client => {
    console.log(client.id, "client.id")
    client.on('drawing', data => client.broadcast.emit('drawing', data));
});
server.listen(3000, ()=>{
    console.log('runing on port 3000')
});




