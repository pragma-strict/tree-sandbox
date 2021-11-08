
class BinaryNode{
   constructor(){
      this.value;
      this.left = null;
      this.right = null;
      this.isLeaf = true;
   }

   setValue(value){
      this.value = value;
   }

   setLeft(left){
      this.left = left;
      this.isLeaf = false;
   }

   setRight(right){
      this.right = right;
      this.isLeaf = false;
   }

   setChildren(left, right){
      this.left = left;
      this.right = right;
      this.isLeaf = false;
   }

   render(pos, size, color){
      fill(color);
      noStroke();
      ellipse(pos.x, pos.y, size);
      if(this.value){
         fill(255);
         textAlign(CENTER, CENTER);
         text(this.value, pos.x, pos.y)
      }
   }

   renderRecursive(pos, size){
      // Render lines to left and right children first
      let leftPos = new p5.Vector(pos.x - size, pos.y + size);
      let rightPos = new p5.Vector(pos.x + size, pos.y + size);
      if(this.left){
         strokeWeight(2);
         stroke(0);
         line(pos.x, pos.y, leftPos.x, leftPos.y);
      }
      if(this.right){
         strokeWeight(2);
         stroke(0);
         line(pos.x, pos.y, rightPos.x, rightPos.y);
      }
      
      // Render this node
      this.render(pos, size, 0)

      // Render left and right children
      if(this.left){
         this.left.renderRecursive(leftPos, size);
      }
      if(this.right){
         this.right.renderRecursive(rightPos, size);
      }
   }
}