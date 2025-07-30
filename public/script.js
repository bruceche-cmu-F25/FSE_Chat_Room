const socket = io('http://localhost:3000')
const allMessages = document.getElementById('chat-form')
const messageInput = document.getElementById('message-input')

socket.on('chatMessage', data => {
    console.log(data)
})

allMessages.addEventListener('submit', emit =>{
    emit.preventDefault()
    const message = messageInput.value
    socket.emit('send-message', message)
    messageInput.value = ''
})