function setup() {
  createCanvas(400, 400);
}

var i = 0;

  function draw(){
    i = i + 10; 
    
    if(i < 200){
      line(200 - i, i, 200 + i, i);
      } 
      else {
      line(i - 200, i, 600 - i, i);
       }
}
