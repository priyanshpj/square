nosex = 0;
nosey = 0;
lwristx = 0;
rwristx = 0;
differ = 0;
function preload(){
    
}
function setup(){
    canvas=createCanvas(500, 500);
    canvas.position(700, 200);
    video = createCapture(VIDEO);
    video.position(100, 250);
    video.size(500, 375);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses); 
}
function modelLoaded(){
    console.log("PoseNet is initialized!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        lwristx = results[0].pose.leftWrist.x;
        rwristx = results[0].pose.rightWrist.x;
        differ = lwristx - rwristx;
    }
}
function draw() {
    r = random(255);
    g = random(255);
    b = random(255);
    background(r, g, b);
    fill(b, g, r);
    stroke(g, b, r);
    square(nosex, nosey, differ);
}