const keyboard = require('./keyboards.js');
//
module.exports = function(type,first,second){
  return keyboard[type].keyboard[first][second].text;
}