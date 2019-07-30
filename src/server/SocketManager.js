const io = require('./index.js').io;
const {USER_CONNECTED, LOGOUT, USER_INPUT, GAME_UPDATE} = require('../events.js')
const Game = require('./Game.js')
var playerCount = 0;
players = {};

module.exports = function(socket){


  console.log("Socket Id " + socket.id);


  socket.on(USER_CONNECTED, () => {
    console.log("Creating new player on server...");
    playerCount++;
    let player = {
      x: 10,
      y: 10
    }

    //players[socket.id] = player;
    players[socket.id] = player;
    console.log(playerCount);
  });

  socket.on(USER_INPUT, (movement) => {
  //  players[socket.id].x+=10;
  //  console.dir(movement);

    if(movement.up){
        players[socket.id].y-=1;
    }else if(movement.down){
        players[socket.id].y+=1;
    }

    if(movement.left){
        players[socket.id].x-=1;
    }else if(movement.right){
        players[socket.id].x+=1;
    }

  //  io.emit(GAME_UPDATE,players/*Game state?*/)
  });

  setInterval(function() {
    io.local.emit(GAME_UPDATE,players/*Game state?*/)
  }, 1000/60);




}
