


class BinaryTree{
   constructor(){
      this.rootNode = new BinaryNode();
      this.selectedNode = this.rootNode;
      this.rootPos;
      this.selectedNodePos = this.rootPos;
      this.nodeSize;
      this.rootNode.setValue(5);
   }

   addNode(value){
      
   }

   setRootPosition(rootPos){
      this.rootPos = rootPos;
      if(this.selectedNode === this.rootNode){
         this.selectedNodePos = rootPos;
      }
   }

   setNodeSize(nodeSize){
      this.nodeSize = nodeSize;
   }

   render(){
      this.rootNode.renderRecursive(this.rootPos, this.nodeSize);
      this.selectedNode.render(this.selectedNodePos, this.nodeSize, RED);
   }
}