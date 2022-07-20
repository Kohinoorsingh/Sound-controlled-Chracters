function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/es03QhVM_/model.json',modelReady)
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results) 
{
   if(error) 
   {
       console.error(error); 
   } else {
    console.log(results);
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+(results[0].confidence * 100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("+r+","+g+","+b+")";
    document.getElementById("result_confidence").style.color = "rgb("+r+","+g+","+b+")";
    

    img1 = document.getElementById('alien1');
    img2= document.getElementById('alien2');
    img3 = document.getElementById('alien3');
    img4 = document.getElementById('alien4');

    if (results[0].label == "Clap") {
        img1.src ='Neji_gif_1.gif';
        img2.src ='Naruto.png';
        img3.src ='Sasukee!.jpg';
        img4.src ='8 gates.jpg';

    } else  if (results[0].label == "Bell") {
        img1.src ='Neji.jpg';
        img2.src ='Naruto_gif_4_Rasengan.gif';
        img3.src ='Sasukee!.jpg';
        img4.src ='8 gates.jpg';

    }
    else  if (results[0].label == "snap") {
        img1.src ='Neji.jpg';
        img2.src ='Naruto.png';
        img3.src ='SASUKE_GIF_3_CHIDORI.gif';
        img4.src ='8 gates.jpg';

    }else {
        img1.src ='Neji.jpg';
        img2.src ='Naruto.png';
        img3.src ='Sasukee!.jpg';
        img4.src ='Guy_gif_2.gif';

    }
   }
   
}