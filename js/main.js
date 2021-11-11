// DOM Ids and elements
let ID_PARENT = 'p5-canvas-container';

let p5Display;


function setup() {
  p5Display = new Display(ID_PARENT);
  noLoop();
}


function windowResized() {
  p5Display.updateCanvasSize();
}