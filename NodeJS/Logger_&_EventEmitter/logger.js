//logger
const EventEmitter = require('events');
const uuid = require('uuid');

//Tulostaa joku id luvun & saattaa olla random luvukin
//console.log(uuid.v4());

class Logger extends EventEmitter {
  log(msg) {
    //call events
    this.emit('message', {id: uuid.v4(), msg });
  }
}

module.exports = Logger;
