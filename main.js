difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded() {
    console.log("poseNet foi inicializado");
}
function gotPoses(results) {
    if (results.length) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)
    }
}
function draw() {
    background("black")
    document.getElementById("square_side").innerHTML = "tamanho da fonte será=" + difference + "px";
    fill("white");
    textSize(difference)
    text("mundial", 50, 400)
}