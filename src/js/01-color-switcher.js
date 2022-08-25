
const refs = {
    btnStart: document.querySelector( ` [data-start]`),
    btnStop : document.querySelector('[data-stop]'),
}
let timerID = null;
let isDisable = false;
refs.btnStart.addEventListener(`click`, changeColor)
refs.btnStop.addEventListener(`click`, stop)

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
};

function changeColor() {
        if (isDisable) {
            return;
        }
        isDisable = true;
    timerID =  setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor(),
            console.log(`click`)
    }, 1000);
        
};

function stop() {
     if (!isDisable) {
            return;
        }
    isDisable = false;
      clearInterval(timerID);
       
        console.log(`stop`)
     
    
};









