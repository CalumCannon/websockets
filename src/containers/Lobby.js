import React, {Component} from 'react'

export default class Lobby extends Component {
  constructor(props){
    super(props)

  }

  createLobby(){
    // Create new game instance?

  }

  joinLobby(){
    // Create new player within instance - change view...

  }

  render(){
    return(
      <div>
      <p>Lobby</p>
      <button> Create lobby <button/>
      <button> Join lobby <button/>
      </div>
    )
  }
}
