//PÄÄSOVELLUS TYÖKALU & KAIKKI ASETUKSET TAPAHTUU TÄÄLLÄ (MELKEIN)

const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages'); //lukee kansio tiedoston polkun
const {userJoin, getCurrentUser,
 userLeave, getRoomUsers
} = require('./utils/users'); //Hakee/noutaa/tän hetkisen käyttäjiä, ketkä lähtetvät ja jne


const app = express();
const server = http.createServer(app);
const io = socketio(server);


//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'ChatCord Bot';

//run whle client connection 
io.on('connection', socket => {
  socket.on('joinRoom', ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

  //Welcome to the current user
    socket.emit('message', formatMessage(botName, "Welcome to ChatCord!"));

  //Lähetää viestin main.js:lle ja chat.html jotta käyttäjä avaa F12 (console)

  //boradcast user connects & tämä saa kaikki lukuun ottamatta yhteyttä muodostavaa käyttäjän yhteyden & yhteydessä kaikkiin käyttäjiin paitsi tietyille kennelle ei ole yhteydessä
  socket.broadcast
    .to(user.room)
    .emit('message' , formatMessage(botName, `${user.username} joined to this chat group`));

  //Send users and room info
  io.to(user.room).emit('roomUsers', {
    room: user.room,
    users: getRoomUsers(user.room)
  });

}); //socket.on ENDS HERE

  //console.log('New WS Connection..'); //lähetää viestin joka kerta päivität/resfresh chat.html sivuston

  //Welcome current users
  //socket.emit('message', 'Tervetuloa Chattiin!!'); //Lähetää viestin main.js:lle ja chat.html jotta käyttäjä avaa F12 (console)

  // Listen for chatMessage
  socket.on('chatMessage', msg => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit('message', formatMessage(user.username, msg));
  });

  //Runs when client disconnects & yhteydessä kaikkiiin käytätjiin
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);

    if(user) 
    { //JOS käyttäjä poistuu ryhmä group chatt:istä
      io.to(user.room).emit('message', formatMessage(botName , `${user.username} has left the chat group`));

      //Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });

    } //if ENDS HERE
    
  }); //disconnect ENDS HERE
  

}); //connection ENDS HERE


const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
