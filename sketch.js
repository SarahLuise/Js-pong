function setup() {
    createCanvas(600, 600);
    background("black");
  }
  
  function draw() {
    stroke("blue");
    FileList("red");

    if(mouseIsPressed){
        Reflect(mouseX,mouseY,20,35);
    }
    
  }