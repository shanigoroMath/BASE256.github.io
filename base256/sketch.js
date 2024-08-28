function windowResized() {
  resizeCanvas(windowWidth, windowHeight,WEBGL)
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight,WEBGL)
  canvas.position(0,0)//canvasをページの原点に固定
  canvas.style('z-index','-1')//canvasを後ろに移動する
  background(0);
}

let angle=0

function draw() {
  frameRate(30);
  background(0)
  angle += 0.01
  for(let i=0;i<6.28;i+=0.157){
    push()
    {
      normalMaterial()
      rotateY(angle+i)
      translate(0,100*sin(angle+i*3+mouseX*0.01),mouseY)
      box(30)
    }
    pop()
  }
}