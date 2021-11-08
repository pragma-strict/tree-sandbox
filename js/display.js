/*
   This class will contain the p5 canvas and all methods related to things that are displayed on the canvas. In its first version, it will just be a set of methods for generating, displaying, and updating trees. This class is not used at the moment 
*/

class Display{
   constructor(){
      this.parentID;
      this.canvas;
      this.binaryTree = new BinaryTree();
      this.binaryTree.setNodeSize(15);
   }

   createCanvas(parentID){
      this.parentID = parentID;
      let parentStyle = window.getComputedStyle(document.getElementById(this.parentID));
      this.canvas = createCanvas(parseInt(parentStyle.width), parseInt(parentStyle.height));
      this.canvas.parent(this.parentID);
      this.binaryTree.setRootPosition(new p5.Vector(width/2, height/8));
   }

   updateCanvasSize(){
      let parentStyle = window.getComputedStyle(document.getElementById(ID_PARENT));
      resizeCanvas(parseInt(parentStyle.width), parseInt(parentStyle.height));
      this.binaryTree.setRootPosition(new p5.Vector(width/2, height/8));
   }

   render(){
      background(BG_COL);
      this.binaryTree.render();
   }
}