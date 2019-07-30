import React, {Component} from 'react';
import io from "socket.io-client";
import UserInput from '../helpers/userInput.js'
import Renderer from '../Renderer/Renderer.js'
import {USER_CONNECTED, LOGOUT, USER_INPUT, GAME_UPDATE} from '../events.js'
//Heroku bit here?
const socketUrl = "http://192.168.8.101:5000"
export default class Layout extends Component{

  constructor(props){
    super(props)

    this.state = {
      socket:null,
      user:null,
      players:{}
    };
    this.updateGameState = this.updateGameState.bind(this);

  }

  componentWillMount(){
    this.initSocket()
    setTimeout(this.props.initGame, 5000)
  }


  initSocket = () => {
    const socket = io(socketUrl)
    socket.on('connect', () => {
      console.log("CONNECTED");
      socket.emit(USER_CONNECTED);

    })
    this.setState({socket})
    socket.on(GAME_UPDATE, (playersIN) => this.updateGameState(playersIN/**[socket.id]**/));
  }

  setUser = (user) => {
    const {socket} = this.state

    this.setState({user})
  }

  logout = () => {
    const {socket} = this.state
    socket.emit(LOGOUT)
    this.setState({user:null})
  }

  usrInput = (movement) => {
    const {socket} = this.state
    socket.emit(USER_INPUT, movement)

    if(this.props.reactToUnityCom != undefined){

        this.props.reactToUnityCom(movement);
    }

  }

  updateGameState(gameSatePlayers){
  //  console.dir(gameSatePlayers);
    this.setState({players:gameSatePlayers})

  }

  render(){
    const {socket} = this.state



    // socket.on(GAME_UPDATE, function(playersIN){
    // console.log("GAME STATE RECIEVED" , playersIN[socket.id]);
    //   let newPlayers = playersIN[0];
    //   //this.setState({players:newPlayers})
    //   this.updateGameState();
    // } );

    return(
      <div>
      <p>LAYOUT COMPONENT</p>
      <UserInput handleUserInput={this.usrInput} />
      <Renderer players={this.state.players}/>
      <button onClick={this.props.initGame}>START GAME</button>
      </div>
    );
  }

}
