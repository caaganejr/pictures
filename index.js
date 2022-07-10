let dynamicIMG = document.getElementById('dynamicIMG') // dynamic Element
let sax = document.getElementById('sax')               // sax Element
let qalad = document.getElementById('qalad')           // khalad Element

const dynamicIMGs = ["biixi1.png", "farmajo.png", "geelle.png", "cirro.png", "xasan.png",] // all dynamic images in array

// function-ka hoose waa functionka sawirada soo celcelinaya waliba qaab Random ah!
function kuCelceli() {                                //  create a loop function  
    let takeRandom = Math.floor((Math.random() * dynamicIMGs.length)) // all array elements randomly                            //  use setTimeout to call kuCelceli function evry 1s
    dynamicIMG.style.backgroundImage = `url("./img/${dynamicIMGs[takeRandom]}")`   //  send random image to dynamicIMG Element
}


let theTimer = setInterval(kuCelceli, 100);

const marKaleBIlow = () => {
    setTimeout(function () {
        theTimer = setInterval(kuCelceli, 100);
        document.getElementById('btn').disabled = false;
        document.getElementById('btn').style.opacity = '100%'
    }, 2000);
}

let saxday = 0;
let qaladay = 0;

const istaag = () => {
    if (dynamicIMG.style.backgroundImage === `url("./img/${dynamicIMGs[0]}")`) {
        saxday++;
        sax.innerText = saxday;
        clearInterval(theTimer)

        document.getElementById('btn').disabled = true;
        document.getElementById('btn').style.opacity = '50%'

        marKaleBIlow();
    } else {
        qaladay++;
        qalad.innerText = qaladay;
        clearInterval(theTimer)

        document.getElementById('btn').disabled = true;
        document.getElementById('btn').style.opacity = '50%'

        marKaleBIlow();

    }
}