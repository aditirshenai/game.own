var player , corona,flu,sari;
var s1 , s2,s3 ,s4,s5,s6,s7,s8,s9,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20,s21,s22;
var b1 , b2, b3,b4,b5,b6,b7,b8,b9,b10,b11 ;



function setup() {
  createCanvas(800,600);


  player= createSprite(400, 200, 10, 10);
  s1= createSprite(200, 100, 10, 150);
  s2= createSprite(215,175,40,10);
  s3= createSprite(240, 205, 10, 70);
  s4= createSprite(215, 240, 60, 10);
  s5= createSprite(215, 290, 60, 10);
  s6= createSprite(240, 330, 10, 70);
  s7= createSprite(215, 360, 40, 10);
  s8= createSprite(200, 400, 10, 90);
  s9= createSprite(300, 405, 10, 85);
  s10= createSprite(395, 360, 200, 10);
  s11= createSprite(490, 405, 10, 85);
  s12= createSprite(600, 405, 10, 85);
  s13= createSprite(585, 360, 40, 10);
  s14= createSprite(570, 330, 10, 70);
  s15= createSprite(595, 290, 60, 10);
  s16= createSprite(595, 240, 60, 10);
  s17= createSprite(560, 210, 10, 70);
  s18= createSprite(578,175,45,10);
  s19= createSprite(595, 100, 10, 150);
  b1= createSprite(280, 100, 100, 100);
  b2= createSprite(400, 100, 90, 60);
  b3= createSprite(520, 100, 100, 100);
  b4= createSprite(400, 190, 100, 10);
  b5= createSprite(355, 230, 10, 70);
  b6= createSprite(455, 225, 10, 75);
  b7= createSprite(290, 275, 30, 30);
  b8= createSprite(290, 200, 30, 30);
  s20= createSprite(400, 160, 70, 10);
  b9= createSprite(505, 275, 30, 30);
  b10= createSprite(505, 200, 30, 30);
  s21= createSprite(397, 20, 400, 10);
  s22= createSprite(397, 445, 400, 10);
  b11= createSprite(400, 310, 100, 40);
}

function draw() {
  background(0);  
 
 if (keyDown(UP_ARROW)){
setDir (0,-2) ;
 }
 if (keyDown(DOWN_ARROW)){
  setDir (0,2) ;
   }
if (keyDown(LEFT_ARROW)){
    setDir (-2,0) ;
     }
if (keyDown(RIGHT_ARROW)){
      setDir (2,0) ;
       }
 
 playerCollide();
 
  drawSprites();


}
function setDir (x,y){
  player.x = player.x+x ;
  player.y = player.y+y ;
}

function playerCollide (){
  player.collide(s1);
  player.collide(s2);
  player.collide(s3);
  player.collide(s4);
  player.collide(s5);
  player.collide(s6);
  player.collide(s7);
  player.collide(s8);
  player.collide(s9);
  player.collide(s10);
  player.collide(s11);
  player.collide(s12);
  player.collide(s13);
  player.collide(s14);
  player.collide(s15);
  player.collide(s16);
  player.collide(s17);
  player.collide(s18);
  player.collide(s19);
  player.collide(s20);
  player.collide(s21);
  player.collide(s22);
  player.collide(b1);
  player.collide(b2);
  player.collide(b3);
  player.collide(b4);
  player.collide(b5);
  player.collide(b6);
  player.collide(b7);
  player.collide(b8);
  player.collide(b9);
  player.collide(b10);
  player.collide(b11);









}