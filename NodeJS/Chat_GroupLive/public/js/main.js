const chatForm = document.getElementById('chat-form'); //chat.html id-tunnus
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

//Get username & room from URL 
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true
});

console.log(username, room); // A-henkilö liittyi tähän group-huoneeseen

const socket = io();

//Join chatroom
socket.emit('joinRoom', { username, room });

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

//Message from server
socket.on('message', (message) => {
  //console.log(message); //index.js kuin lähetää viestin tänne päin, joka kerta päivitää/resfresh chat.html sivuston & mutta käyttäjä tulee avaa F12 (console) missä sieltä tulee se viesti
  outputMessage(message);

  //scroll down bar
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

//chat tai message submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  //get message text
  let msg = e.target.elements.msg.value; //chat.html msg id-tunnus

  msg = msg.trim();

  if (!msg) {
    return false;
  }

  //Emit message to server
  socket.emit('chatMessage', msg);

  //cleat input & kirjoitus valikko tyhjentyy joka kerta kun viesti on lähetetty
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();
});

//Output message to DOM & viesti lähettyy kohti viestiketjuun
function outputMessage(message) {
  const div = document.createElement('div'); 
  div.classList.add('message');
  const p = document.createElement('p');
  p.classList.add('meta');
  p.innerText = message.username;
  p.innerHTML += `<span>${message.time}</span>`;
  div.appendChild(p);
  
  const para = document.createElement('p');
  para.classList.add('text');
  para.innerText = message.text;
  div.appendChild(para);
  document.querySelector('.chat-messages').appendChild(div);
}

//Add room name to DOM & käyttäjän sijoittuva group/ryhmässä palkissa vasemalla
function outputRoomName(room) {
  roomName.innerText = room;
}

//Add users to the DOM & käyttäjä nimi näkyy palkissa vasemalla
function outputUsers(users) {
  userList.innerHTML = ''; 

  users.forEach((user) => 
  {
    const li = document.createElement('li');
    li.innerText = user.username;
    userList.appendChild(li);
  });
}
