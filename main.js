//https://teachablemachine.withgoogle.com/models/Awr-IBHJS/
Webcam.set({
    width:350,
    height:300,
    imageformat:"png",
    pngquality:90
});
camera=document.getElementById("camera")
Webcam.attach("#camera")

function takepic(){
Webcam.snap(function(datauri){
 document.getElementById("result").innerHTML="<img id='img1' src= "+datauri+">"

})
}
console.log("ml5 version:",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Awr-IBHJS/model.json",modelloaded)
function modelloaded(){
    console.log("model loaded")
}
prediction1=""
prediction2=""
function speak(){
    var synth=window.speechSynthesis
    speakdata1="prediction1"+prediction1
    speakdata2="prediction2"+prediction2
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2)
    synth.speak(utterthis)
}

function check(){
   img=document.getElementById("img1")
   classifier.classify(img,gotResult)

}
function gotResult(error,results){
    if (error) {
     console.error(error)   
    } else {
        console.log(results)
        document.getElementById("ren").innerHTML=results[0].label
        document.getElementById("ren2").innerHTML=results[1].label
        prediction1=results[0].label
        prediction2=results[1].label
        speak()
        if (prediction1=="happy") {
           document.getElementById("update").innerHTML="&#128513;"
        }

           if (prediction1=="sad") {
            document.getElementById("update").innerHTML="&#128546;"
         }
         if (prediction1=="mad") {
            document.getElementById("update").innerHTML="&#128545;"
         }
         if (prediction1=="embaresed") {
            document.getElementById("update").innerHTML="&#128563;"
         }
         if (prediction1=="suprised") {
            document.getElementById("update").innerHTML="&#128562;"
         }
        

         if (prediction2=="happy") {
            document.getElementById("update2").innerHTML="&#128513;"
         }
 
            if (prediction2=="sad") {
             document.getElementById("update2").innerHTML="&#128546;"
          }
          if (prediction2=="mad") {
             document.getElementById("update2").innerHTML="&#128545;"
          }
          if (prediction2=="embaresed") {
             document.getElementById("update2").innerHTML="&#128563;"
          }
          if (prediction2=="suprised") {
             document.getElementById("update2").innerHTML="&#128562;"
          }
        
        
        
    
    }

}




//<span>&#128562;</span>
