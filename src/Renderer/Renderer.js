import React, {Component} from 'react';
import RenderHelper from '../helpers/RenderHelper'

export default class Renderer extends Component{

  constructor(props){
    super(props);

    this.state = {
      renderer: null

    }

  }

  componentDidMount() {
     const canvas = this.refs.canvas
     const ctx = canvas.getContext("2d")
     const renderer = new RenderHelper(canvas, ctx);
     this.setState({renderer : renderer});
     // setInterval(()=> {
     //   this.rerenderScreen();
     // }, 1000);
  }


  rerenderScreen(){

      if(this.state.renderer == null){
        return
      }

      this.state.renderer.clearCanvas();

      if(this.props.players == null){
        return
      }

      for(var id in this.props.players){
        var player = this.props.players[id]
        this.state.renderer.renderPlayer("blue",player.x, player.y);
      }


  }



  render(){
    //console.log(this.props.players);

    this.rerenderScreen();

    return(
        <canvas ref="canvas" className="canvas" id="myCanvas" width="720" height="720"></canvas>
    )
  }
}
