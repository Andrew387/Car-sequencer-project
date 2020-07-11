let frog;
var data;
function preload() {
  data = loadJSON("trackdata.json");
  vid = createVideo('results.mp4');
  vid.hide();
}




function setup() {
  createCanvas(400, 400);
  print (data[3][2].ypos);
  print (Object.keys(data[3]).length);
  frameRate(200);
}


var xf = 200;
var yf = 200;
var j=0;
var R = 0;
var G= 200;
var B= 0;
function draw() {
  background(220);
  //vid.play();
  image(vid, 0, 0, 400, 400);
  //vid.loop();
  var len = Object.keys(data).length;
  rect(0, 0, 40, height);
  rect(width-40, 0, 40, height);
  //playvid();
  //background(220);
  fill(R,G, B);
  const alpha = PI / 4;
  //rect (xf, yf, 30, 30);
    for (var obj in data[j]){
      var x = data[j][obj].xpos;
      var y = data[j][obj].ypos;
      //y = y/cos(alpha);
      var xrec = (map(x, 0, 2400, 0, width));
      var yrec = (map(y, 0, 1500, 0, height));
      //yrec = yrec/cos(alpha);
      //xrec = xrec* yrec
      rect (xrec, yrec, 40, 40);
      //print (y);
      if ((xrec+70>xf && xf>xrec-70 && yrec+70>yf && yf>yrec-70 )){
        //print ('LOOOOOOOSERRRRRRR');
        R = 255;
        G = 0;
      }else {
        R = 0;
        G = 200;}

      //keyPressed();
  //frog.update();
  //frog.show();
  }
  rect (xf, yf, 30, 30);
  j++;
  if (j==1){
  playvid1()}
  if (j==len){
    j=0;}
  //keyPressed();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    yf-=30;
  } else if (keyCode === DOWN_ARROW) {
    yf+=30;
  } else if (keyCode === RIGHT_ARROW) {
    xf+=30;
  } else if (keyCode === LEFT_ARROW) {
    xf-=30;
  }
}

function playvid(){
  var len = Object.keys(data).length;
  print (len);
  //print (j);
  if (j==8){
    vid.play();
  }}

function playvid1(){
    vid.play();
}
