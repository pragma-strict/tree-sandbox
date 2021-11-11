/*
   This class will contain the p5 canvas and all methods related to things that are displayed on the canvas. In its first version, it will just be a set of methods for generating, displaying, and updating trees. This class is not used at the moment 
*/

class Display{
   constructor(parentID){
      this.parentID = parentID;
      this.canvas;
      this.initializeP5Canvas();
      this.initializeTree();
      this.render();
   }
   
   initializeP5Canvas(){
      let parentStyle = window.getComputedStyle(document.getElementById(this.parentID));
      this.canvas = createCanvas(parseInt(parentStyle.width), parseInt(parentStyle.height));
      this.canvas.parent(this.parentID);
   }
   
   initializeTree(){
      this.binaryTree = new BinaryTree();
      this.binaryTree.setRootPosition(new p5.Vector(width/2, height/8));
      this.binaryTree.setNodeSize(15);
      this.binaryTree.addNode(6);
      this.binaryTree.addNode(4);
      this.binaryTree.addNode(5);
      this.binaryTree.addNode(2);
      this.binaryTree.addNode(7);
      this.binaryTree.addNode(8);
      this.binaryTree.addNode(6);
      this.binaryTree.addNode(10);
      this.binaryTree.addNode(6);
      console.log("Tree height: " + this.binaryTree.getTreeHeight());
   }

   updateCanvasSize(){
      let parentStyle = window.getComputedStyle(document.getElementById(ID_PARENT));
      resizeCanvas(parseInt(parentStyle.width), parseInt(parentStyle.height));
      this.binaryTree.setRootPosition(new p5.Vector(width/2, height/8));
      this.render();
   }

   render(){
      background(BG_COL);
      this.binaryTree.render();
   }
}