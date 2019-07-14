import Vec2 from '../helpers/Vec2';

class RenderHelper {
  constructor(canvas, ctx){
      this.canvas = canvas;
      this.ctx = ctx;
      this.p1 = 0;
      this.p2 = 0;
      this.p3 = 0;
      this.p4 = 0;
      this.players = [this.p1,this.p2,this.p3,this.p4];
  }

  testFunction(){

  }

  renderPlayer(color, x ,y){
    let position = new Vec2(x,y)
    let offset = 0;

    this.ctx.beginPath();
    this.ctx.arc(position.x + 25 + offset, position.y + 25 + offset, 15, 0, 2 * Math.PI);
    this.ctx.fillStyle = color;
    this.ctx.fill();

    this.ctx.arc(position.x + 25 + offset, position.y + 25 + offset, 15, 0, 2 * Math.PI);
    this.ctx.fillStyle = "white";
    this.ctx.stroke();

  }

  clearCanvas(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  }

}

export default RenderHelper;
