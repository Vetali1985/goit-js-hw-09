
const refs = {
    btnStart: document.querySelector( ` [data-start]`),
    btnStop : document.querySelector('[data-stop]'),
}
const changeColor = {
    timerID : null,
    isDisable: false,
    start() {
        if (this.isDisable) {
            return;
        }
        this.isDisable = true;
    this.timerID =  setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor(),
            console.log(`click`)
    }, 1000);
        
    },

    stop() {
       this.isDisable = false;
        clearInterval(this.timerID);
        console.log(`stop`)
     
    
        },

}
refs.btnStart.addEventListener(`click`, changeColor.start)
refs.btnStop.addEventListener(`click`, changeColor.stop)




function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    
}









