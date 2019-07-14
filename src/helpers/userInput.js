import React, {Component} from 'react'


export default class UserInput extends Component {

  constructor(props){
    super(props)

  }



  render(){

    var movement = {
      up: false,
      down: false,
      left: false,
      right: false
    }
    document.addEventListener('keydown', function(event) {
      switch (event.keyCode) {
        case 65: // A
          movement.left = true;
          break;
        case 87: // W
          movement.up = true;
          break;
        case 68: // D
          movement.right = true;
          break;
        case 83: // S
          movement.down = true;
          break;
      }
      // this.handleUserClick(movement);
    });
    document.addEventListener('keyup', function(event) {
      switch (event.keyCode) {
        case 65: // A
          movement.left = false;
          break;
        case 87: // W
          movement.up = false;
          break;
        case 68: // D
          movement.right = false;
          break;
        case 83: // S
          movement.down = false;
          break;
      }

    });

    const handleUserClick = () => {
      this.props.handleUserInput(movement);
    }

    //Set interval seems to fuck it
    setInterval(function() {
      handleUserClick();
    }, 1000 / 2);

    return(
      <div>
      <p>USER INPUT COMPONENT</p>
      <button onClick={handleUserClick}>CLICK ME</button>
      </div>
    )
  }

}
