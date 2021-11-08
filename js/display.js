/*
   This class will contain the p5 canvas and all methods related to things that are displayed on the canvas. In its first version, it will just be a set of methods for generating, displaying, and updating trees. This class is not used at the moment 
*/

class Display{
   constructor(){
      this.parentID;
      this.canvas;
      this.rootNode = new BinaryNode(5);
      this.rootPos;
      this.rootSize =25;
      this.rootNode.setLeft(new BinaryNode(5));
   }

   createCanvas(parentID){
      this.parentID = parentID;
      let parentStyle = window.getComputedStyle(document.getElementById(this.parentID));
      this.canvas = createCanvas(parseInt(parentStyle.width), parseInt(parentStyle.height));
      this.canvas.parent(this.parentID);
      this.rootPos = new p5.Vector(width/2, height/8);
   }

   updateCanvasSize(){
      let parentStyle = window.getComputedStyle(document.getElementById(ID_PARENT));
      resizeCanvas(parseInt(parentStyle.width), parseInt(parentStyle.height));
      this.rootPos = new p5.Vector(width/2, height/8);
   }

   render(){
      background(BG_COL);
      this.rootNode.renderRecursive(this.rootPos, this.rootSize)
   }
}