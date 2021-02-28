//Logger With Event Emitter
//Lukaisee tiedoston nimen / polkun
const Logger = require("./logger");

const logger = new Logger();

logger.on('message', data  => { console.log('Called Listener:', data )});

logger.log('Moikka!!');
logger.log('Hei!');
logger.log('Terve!!!');
