alert("Welcome to the Blob Game")

let initialblob = {
 
    height: 20,
    speed: 3,
    position: {
        x: 50,
        y: 50
    }
}

let secondBlob = {
    position: {
        x: 50,
        y: 50
    },
    height: 20,
    speed: 3,
    position: {
        x: 50,
        y: 50
    }
}

let createBlobButton = document.getElementById('create-blob')
createBlobButton.addEventListener('click', drawBlob)

let blobs = [initialblob, secondBlob]
function drawBlob(){
    console.log('About to create a new blob')
    let newRandomPosition = Math.floor(Math.random() * 550) +1
    let newBlob = {
        height: 20,
        speed: 3,
        position: {
            x: newRandomPosition,
            y: newRandomPosition
        }
    }
    blobs.push(newBlob);
    console.log(blobs);
}
console.log(createBlobButton)
console.log(blobs);

function setup() {
    createCanvas(600, 600);
    background(255,0,0)
}

function draw() {

    if (blobs[i].height) {

    for (var i=0; i<blobs.length; i++) {
        ellipse(blobs[i].position.x, blobs[i].position.y, blobs[i].height, blobs[i].height);
    }
    }
}
