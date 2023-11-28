// print {Hello, World!}

var cognitionEndlevelNoway = window.webkitSpeechRecognition;
var recognition = new cognitionEndlevelNoway();
var content;

function luzCameraAcao(){
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    content = event.results[0][0].transcript.toLowerCase();
    if(content == "foto"){
        //função que o quê? que vai falar. é ela que vai falar "tirando sua foto em 20 segundos!"
        console.log("VOCÊ DEVERIA TIRAR UMA FOTO AGORA !!!")
    }
}