import React, {Component} from 'react'
import Layout from './layout.js'

export default class Game extends Component {
  constructor(props){
    super(props)


  }

  render(){
    return(
      <div>
      <p>Lobby</p>
        <Layout initGame={this.props.initGame} createNewPlayer={this.props.createNewPlayer}   reactToUnityCom={this.props.reactToUnityCom} />
      </div>
    )
  }
}
