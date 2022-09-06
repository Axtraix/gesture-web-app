Webcam.set({width:350,height:300,image_format:'png',png_quality:90})
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("results").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    })
}
console.log('ml5.version',ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LAZ4xU00g/model.json", modelLoaded);

function modelLoaded(){
console.log("model has been loaded correctly");
}

function Identify_Image(){
    img=document.getElementById("captured_image");
    classifier.classify(img,got_results);
}

function get_results(error,result){
if (error){
    console.log(error)
    }
    else{
       document.getElementById("handgesture1").innerHTML=result[0].label
       gesture=result[0].label;
       var speak1=""
       if(gesture=="Amazing"){
        document.getElementById("emoji1").innerHTML="&#128076";
        speak1="This is amazing"
       }
       if(gesture=="best"){
        document.getElementById("emoji1").innerHTML="&#128400";
        speak1="This is the best"
       }
       if(gesture=="victory"){
        document.getElementById("emoji1").innerHTML="&#128406";
        speak1="This is  victory"
       }
       speak()
       
    }
}
function speak(){
    Synth=window.speechSynthesis 
    speak_data=speak1
    var utterthis=new SpeechSynthesisUtterance(speak_data)
    Synth.speak(utterthis)
}