//const io = require('socket.io')(3000)
const io = require("socket.io")(3000, {
    cors: {
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"]
    }
});
io.on('connection', socket => {
    console.log('new User')

    socket.emit('chat-message', '')
    // socket.on('send-chat-message', message =>{
    //     console.log('Received message:', message)
    //    socket.broadcast.emit('chat-message', message)
    // })
    socket.on('send-chat-message', message => {
        console.log('Received message:', message)
        io.emit('chat-message', message) // Gửi tin nhắn đến tất cả clients, thay vì chỉ broadcast
    })
})
