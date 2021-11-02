function preload()
{

}
function setup()
{ 
 canvas = createCanvas(300, 300);
 canvas.center();
 video = createCapture(VIDEO);
 video.size(300, 300);
 video.hide()

 poseNet = ml5.poseNet(video, modelLoaded);
}
function modelLoaded()
{
    console.log('PoseNet Is Initialised');
    poseNet.on('pose', gotPoses);
}
function draw()
{
    image(video, 0, 0 ,300 ,300)
}
function take_snapshot()
{
    save('my filter.png');
}