
class BinaryTree{
   constructor(){
      this.rootNode;
      this.selectedNode = this.rootNode;
      this.rootPos;
      this.selectedNodePos = this.rootPos;
      this.nodeSize;
      this.traversalStack = [];
   }


   addNode(value){
      let newNode = new BinaryNode();
      newNode.setValue(value);
      if(!this.rootNode){
         this.rootNode = newNode;
         this.selectedNode = this.rootNode;
      }
      else{
         let lastNode = this.findLastNode();
         console.log("Last node: " + lastNode);
      }
   }


   // Returns the last node in an inorder traversal beginning with the root
   findLastNode(){
      console.log("Finding last node...");
      this.traversalStack.push(this.rootNode);
      let nextNode = this.nextNode();
      while(nextNode){
         nextNode = this.nextNode();
         console.log("Next node: " + nextNode);
      }
      let lastNodeOnStack = this.traversalStack[this.traversalStack.length -1];
      console.log("Last node on stack: " + lastNodeOnStack);
      return lastNodeOnStack;
   }


   // Returns the next node in an inorder traversal or 0 if none found. Updates the traversal stack.
   nextNode(){
      let currentNode = this.traversalStack[this.traversalStack.length -1];
      let nextNode;
      if(currentNode.hasLeft()){
         nextNode = currentNode.left;
      }
      if(currentNode.hasRight()){
         nextNode = currentNode.right;
      }
      if(nextNode === currentNode){
         return 0;
      }
      this.traversalStack.push(nextNode);
      return nextNode;
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
      if(this.rootNode){
         this.rootNode.renderRecursive(this.rootPos, this.nodeSize);
         this.selectedNode.render(this.selectedNodePos, this.nodeSize, RED);
      }
   }
}