// const socket = io('http://localhost:3000')
// const messageForm = document.getElementById('send-container')
// const messageInput = document.getElementById('message-input')

// socket.on('chat-message', data => {
//     console.log(data)
// })
// if (messageForm) {
//     messageForm.addEventListener('submit', e => {
//         e.preventDefault()
//         const message = messageInput.value.trim()
//         if (message) {
//             socket.emit('send-chat-message', message)
//             messageInput.value = ''
//         }
//     })
// }

// const messageContainer = document.getElementById('message-container')

// function appendMessage(message) {
//     const messageElement = document.createElement('div')
//     messageElement.textContent = message
//     messageContainer.appendChild(messageElement)
// }

// socket.on('chat-message', data => {
//     appendMessage(data)
// })

// if (messageForm) {
//     messageForm.addEventListener('submit', e => {
//         e.preventDefault()
//         const message = messageInput.value.trim()
//         if (message) {
//             appendMessage(`You: ${message}`)
//             socket.emit('send-chat-message', message)
//             messageInput.value = ''
//         }
//     })
// }


const socket = io('http://localhost:3000')
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('send-container')
const messageInput = document.getElementById('message-input')

// Hàm hiển thị tin nhắn trên giao diện
function appendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.textContent = message
    messageContainer.appendChild(messageElement)
}

// Khi nhận được tin nhắn từ server, hiển thị lên giao diện
socket.on('chat-message', data => {
    appendMessage(data)
})

if (messageForm) {
    messageForm.addEventListener('submit', e => {
        e.preventDefault()
        const message = messageInput.value.trim()
        if (message) {
            appendMessage(`You: ${message}`) // Hiển thị tin nhắn trên giao diện người gửi
            socket.emit('send-chat-message', message) // Gửi tin nhắn lên server
            messageInput.value = ''
        }
    })
}