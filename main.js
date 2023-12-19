var narizx=0
var narizy=0

function preload() {
narizpayaso=loadImage("https://i.postimg.cc/s2T7wGPN/clownnose.png");
}

function setup() {
var canvas=createCanvas (
    350, 300
);
canvas.center()
camara=createCapture(VIDEO);
camara.hide();
poseNet=ml5.poseNet (
    camara, modelReady
);
poseNet.on('pose', analizarposes)
}

function modelReady() {
    console.log("El modelo esta listo")
}

function analizarposes(results) {
if (results.length>0) {
    console.log(results)
    narizx=results[0].pose.nose.x-170
    narizy=results[0].pose.nose.y-170
    console.log("narizx"+narizx,"narizy"+narizy)
}
}

function draw() {
image (
    camara, 0, 0, 350, 300
);
stroke(250, 0, 0);
image(narizpayaso, narizx, narizy, 40, 40)
}

function capturarImagen() {
    save("foto.png");
}