const moment = require('moment');

//Kokonais homma on viesti juttu & perus chattiskin käyttäjä-ab lähettää viestin ajalle x:y:z ajassa
function formatMessage( username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;
