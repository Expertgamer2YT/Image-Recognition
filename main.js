https://teachablemachine.withgoogle.com/models/LXzrqZX2E/
Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach(camera);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LXzrqZX2E/model.json", modelLoaded);
function modelLoaded(){
    console.log("Model is loaded");
    console.log("ml5 version is",ml5.version);
}

function check(){
    img = document.getElementById("capture_image");
        classifier.classify(img, gotresult);
}

function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}
function takesnapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML="<img id='capture_image' src='"+data_uri+"'>";
    });
}




