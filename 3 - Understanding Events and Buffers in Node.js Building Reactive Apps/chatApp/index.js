const ChatRoom = require("./chatRoom.js")

const chat = new ChatRoom();

chat.on("join", (user)=>{
    console.log(`${user}: has joined the chat.`);
})

chat.on("sendMessage", (user, message)=>{
    console.log(`${user}: ${message}`);
})

chat.on("leave", (user)=>{
    console.log(`${user}: leaved the chat`);
})


//simulating the chat

chat.join('Alice')
chat.join('Bob')

chat.sendMessage('Alice','hey Bob and hello to everyone!' );
chat.sendMessage('Bob',"hello Alice");
chat.sendMessage('Bob', "How are you alice?");
chat.sendMessage('Alice',"I am fine, what about you?");
chat.sendMessage('Bob', "I have some work, TTLY.");

chat.leave('Bob');
