img="";
status1="";
objects=[];

function preload()
{

}
function setup(){
canvas = createCanvas(380,380);
canvas.center();
video= createCapture (VIDEO);
video.size(380,380);
video.hide();
}
function start(){
objectDetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="Fat Staus: Currrently finding yummy objects";
input= document.getElementById('input').value
}
function draw(){
image(video,0,0,380,380);
if (status1 !="")
{
   r =random(255);
   g =random(255);
   b =random(255);
    objectDetector.detect(video, gotResult);
for (i=0; i < objects.length; i++)
{
    document,getElementById("status").innerHTML="Status1 :Object Detected baba grill";
    document,getElementById("number_of_objects").innerHTML="Number of objects "+ objects.length;
fill(r,g,b);
percent = floor(objects[i].confidence*100);
text(objects[i].label+" " + percent+"%", objects[i].x,objects[i].y);
noFill();
stroke(r,g,b)
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}
}

function modelLoaded(){
console.log("Model Loaded but are you wi-fi? Cause I'm totally feeling a connection 😏")
status1=true;
}
function gotResult(error, results){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects= results;
}