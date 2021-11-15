// DOM Ids and elements
let ID_PARENT = 'p5-canvas-container';

let p5Display;
let input = [5, 7, 16, 4, 11, 23, 38, 18, 27, 14];
let iterations = 0;


function setup() {
  p5Display = new Display(ID_PARENT);
  noLoop();
}


function keyPressed(){
  if(key === ' '){
    if(iterations < input.length){
      p5Display.heap.addNode(input[iterations]);
    }
    else if(iterations < input.length * 2){
      p5Display.heap.removeMin();
    }
    else{
      iterations = 0;
    }
    iterations++;
    p5Display.render();
  }
}


function windowResized() {
  p5Display.updateCanvasSize();
}