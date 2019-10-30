let points = [];
points.push({
  x: 100,
  y: 100,
  oldx: 95,
  oldy: 95,
});

let r = 24;
let friction = 0.999, elasticity =0.9, gravity =0.5;

function updatePoints(){
  for(let i =0; i<points.length; i++){
    let p = points[i];
    let vx = (p.x - p.oldx) * friction;
    let vy = (p.y - p.oldy) * friction;
    
    //update old x
    p.oldx = p.x;
    p.oldy = p.y;
    
    //update new x
    p.x += vx;
    p.y += vy;
    p.y += gravity;
    
    if(p.x>width){
      p.x = width;
      p.oldx = p.x + vx * elasticity;
    }else if(p.x <0){
      p.x = 0;
      p.oldx = p.x + vx* elasticity;
    }
    
    if(p.y>height){
      p.y = height;
      p.oldy = p.y + vy * elasticity;
    }else if(p.y <0){
      p.y = 0;
      p.oldy = p.y + vy * elasticity;
    }
  }
}

function renderPoints(){
  for(let i=0; i<points.length; i++){
    let p = points[i];
  
    fill(255);
    ellipse(p.x, p.y, r, r);
  }
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  
  updatePoints();
  renderPoints();
  
}
