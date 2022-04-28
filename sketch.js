let img;
let x =0;
let speed =3;

function setup (){
createCanvas(600, 600);
   background(255) 
img = loadImage("myao_07.jpg");
}
function draw(){
move();
bounce();
display();

}

function display(){
  image(img,x, height /2, width * 0.25, height * 0.25);
}

function bounce(){
   if ((x > width) || (x < 0)) {
    speed = speed * -1;
}
}
function move(){
x = x + speed;
}    
  

   

  
