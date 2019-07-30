import React, {Component} from 'react'
import Game from './Game.js'
import Unity, { UnityContent } from "react-unity-webgl";

export default class Lobby extends Component {
  constructor(props){
    super(props)
    this.state ={
      socketid : ""
    }
    // Next up create a new Unity Content object to
    // initialise and define your WebGL build. The
    // paths are relative from your index file.

    this.unityContent = new UnityContent(
      "./Build/Build.json",
      "./Build/UnityLoader.js"
    );

    // Create a new listener for our Unity Events.
    // We're going to call this event "GameOver" and
    // pass the score to the listener. The second
    // parameter will be a function.

    this.unityContent.on("GameOver", score => {

      // Now we can use the score to for example
      // display it on our React app.

      this.setState({
        gameOver: true,
        score: score
      });
    });

    this.unityContent.on("LogOutMessageToReact", message => {

      // Now we can use the score to for example
      // display it on our React app.

      console.log(message);
    });

    this.unityContent.on("PositionUpdate", vec3 =>{
      console.log("POS UPDATE " + " POS: " + vec3);
    })

    this.reactToUnityCommunication = this.reactToUnityCommunication.bind(this)
  }

  createLobby(){
    // Create new game instance?

  }

  joinLobby(){
    // Create new player within instance - change view...

  }

  getXMovement(movement){
    if(movement.left){
      return -1;
    }else if(movement.right){
      return 1;
    }
    return 0;
  }

  getYMovement(movement){
    if(movement.down){
      return -1;
    }else if(movement.up){
      return 1;
    }
    return 0;
  }

  playerJoin = (/*id? get it from server?*/) => {
    let id = 1;
    this.unityContent.send(
      "GameController",
      "NewPlayer",
      id
    );
  }

  reactToUnityCommunication = (movement) => {
   let xmov = this.getXMovement(movement)
   let ymov = this.getYMovement(movement)


        if(xmov == 0 && ymov == 0){
        return;
      }
   let id =1// this.state.id

   console.log(id, xmov, ymov);

    this.unityContent.send(
      "GameController",
      "PlayerMovementX",
      id,
      xmov
    );

    this.unityContent.send(
      "GameController",
      "PlayerMovementY",
      id, ymov
    );
  }

  reactToUnityCreateNewPlayer = (id) => {
  //   console.log("REACT TO UNITY:: AddPlayer(id)");
  //   this.unityContent.send(
  //     "GameController",
  //     "AddPlayer",
  //     id
  //   );
  //   console.dir("ID::" ,id);
  //   this.setState({id: id})
  // }
  //
  // updateUnityGameState = () => {
  //   this.unityContent.send(
  //     "GameController",
  //     "PlayerMovementY",
  //     id,
  //     ymov
  //   );
  }

  reactToUnityGameSetUp = () =>{
    //Set player playerCount
    console.log("Player Count");
      this.unityContent.send(
        "GameController",
        "PlayerCount",
        2
      );

  }


  render(){
    return(
      <div>
      <p>Lobby</p>
      <button> Create lobby </button>
      <button> Join lobby </button>
      <Game initGame={this.reactToUnityGameSetUp} createNewPlayer={this.reactToUnityCreateNewPlayer}  reactToUnityCom={this.reactToUnityCommunication}/>
      <Unity unityContent={this.unityContent}  />
      </div>
    )
  }
}
