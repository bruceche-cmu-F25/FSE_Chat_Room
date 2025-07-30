const express = require('express')
const http = require('http');
const mongoose = require('mongoose')
const socketIo = require('socket.io')
const app = express()

const server = http.createServer(app);
const io = socketIo(server);

// app.use(express.static("public"))

app.set('view engine', 'ejs')
app.use(express.static('./public'))
io.on('connection', socket => {
    // socket.emit('chatMessage', 'hello there')
    socket.on('send-message', message => {
        socket.broadcast.emit('chatMessage', message)
    })
})

app.get('/', (req, res) => {
    console.log('processing get request')
    res.render('index')
})

const userRouter = require('../routes/users')

app.use('/users', userRouter)

function logger(req, res, next) {
    console.log(req.oringinalUrl)
    next()
}

server.listen(3000, () => {
    // console.log('Server listening on port 3000');
  });