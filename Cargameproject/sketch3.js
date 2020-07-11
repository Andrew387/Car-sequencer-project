function preload() {
    data1 = loadJSON("trackdata2.json");
    data2 = loadJSON("trackdata4.json");
    ah=[]
    couac=[]
    for (var ind=1; ind<20; ind++){
      var num = str(ind);
      if (ind<=14){
        couac[ind]=loadSound('Couac2/Couac'.concat(num, '_1.wav'));
      }
      if (ind<=19){
        ah[ind]=loadSound('Couac2/Ah'.concat(num, '_1.wav'));
    }
}
}

var level =1
var framespersec = 29.97
let vid;
  function setup() {
    createCanvas(720, 360);
    vid = createVideo('videotraffic2.mp4', vidLoad);
    vid.hide();
}

async function setup2() {
  createCanvas(720, 360);
  vid = await createVideo('Hardcoretraffic2.mp4', vidLoad);
  vid.hide();
  rectMode(CENTER);
}

var xf = 200;
  var yf = 200;
  var j=1;
  var jsec=0;
  var R = 0;
  var G= 200;
  var B= 0;
  var ylimit = 50;
  let data;
  var wait = true;


function draw() {
  if (wait==true){
    fill(random(255), random(255),random(255));
    for (var el=0; el<50; el++){
      ellipse(random(width), random(height), 50, 50);
    }
  }
  else{
  if (xf>=width-40){
  wait=true
  setup2();
  level=2;
  reset();
  }
  if (level==1){
    data=data1;
  }
  if (level==2){
    data=data2;
  }
  var red=false
  background(220);
  image(vid.time(j/framespersec), 40,0,640,360);
  var len = Object.keys(data).length;
  fill(R,G, B);
  rect(0, 0, 40, height);
  rect(width-40, 0, 40, height);
  for (var obj in data[j]){
      var x = data[j][obj].xpos;
      var y = data[j][obj].ypos;
      var w = data[j][obj].width;
      var h = data[j][obj].height;
      //y = y/cos(alpha);
      if (level==1){
        var xrec = (map(x, 0, 640, 40, width-40));
        var yrec = (map(y, 0, 360, 0, height));
        var w = (map(w, 0, 640, 40, width-40));
        var h = (map(h, 0, 360, 0, height));
      } 
      if (level==2){
        var xrec = (map(x, 0, 1280, 40, width-40));
        var yrec = (map(y, 0, 720, 0, height));
        var w = (map(w, 0, 1280, 40, width-40));
        var h = (map(h, 0, 720, 0, height));
      } 
      var rw = w-xrec;
      var rh = h-yrec;

      if (rw>width/2 || rh>height/2){
        continue;
      }
      size=(yf)/10;
      rectMode(CENTER);
      rect (xf, yf, size, size);
      noFill();
      stroke(100, 100, 240);
      strokeWeight(3);
      rectMode(CORNER);
      rect (xrec, yrec, rw, rh);
      if (xrec+rw+size/2>xf && xf>xrec-size/2 && yrec+rh+size/2>yf && yf>yrec-size/2 ){
        R = 255;
        G = 0;
        reset();
        var red = true
      }
      }
  
  j++;
  if (red==false){
  R = 0;
  G = 200;
  }

  if (j==999){
    j=1;}
  }
}

  function vidLoad() {
    console.log("video loaded");
    wait = false;
  }

  function reset(){
    var number = random(10)
    yf=height/2;
    xf=0+size;
    random(ah).play();
  }

  function keyPressed() {
    if (keyCode === UP_ARROW) {
      if (yf>ylimit+size){
      yf-=20;
      random(couac).play();
      }
    } else if (keyCode === DOWN_ARROW) {
      if (yf<height-size){
      yf+=20;
      random(couac).play();
      }
    } else if (keyCode === RIGHT_ARROW) {
      if (xf<width-size){
      xf+=20;
      random(couac).play();
      }
    } else if (keyCode === LEFT_ARROW) {
      if (xf>0+size){
      xf-=20;
      random(couac).play();
      }
    }
  }
  