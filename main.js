noseX = 0;
noseY = 0;
rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(400, 300);

    canvas = createCanvas(500, 400);
    canvas.position(600, 260);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#BCB3BB');

    textSize(difference);
    fill('#22223B');
    text('Mishti', noseX, noseY);

    document.getElementById("height-width_H3").innerHTML = "The aproximate size of the text is " + difference;
}

function modelLoaded()
{
    console.log("PoseNet is Initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X = " + noseX + "Nose Y = " + noseY);

        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Right Wrist X = " + rightWristX + " & left wrist X = " + leftWristX);
    }
}