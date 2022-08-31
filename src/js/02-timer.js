import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
// import '../css/common.css';
import Notiflix from 'notiflix';
refs = {
    startBtn: document.querySelector(' [data-start]'),
    days:document.querySelector(' [data-days]'),
    hours:document.querySelector(' [data-hours]'),
    minutes:document.querySelector(' [data-minutes]'),
    seconds: document.querySelector(' [data-seconds]'),
    input:document.querySelector('#datetime-picker')
}
refs.startBtn.addEventListener(`click`, () => {
    timer.start()
})

refs.input.addEventListener(`input`, () => {

})



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        
        console.log(selectedDates[0]);
    },
};
    
new flatpickr(refs.input, options)



const timer = {
    intervalId: null,
    isActive: false,
    start() {
        if (this.isActive) {
            return
        }
        const startTime = new Date(refs.input.value);
        
        this.isActive = true;

        if (startTime < new Date()) {
            console.log(startTime === Date.now())
            
            Notiflix.Notify.warning("Please choose a date in the future");
            return
        }
        
        
        this.intervalId = setInterval(() => {
            const currentTime = Date.now()
            const deltaTime = startTime - currentTime;
            if (deltaTime < 1000) {
            clearInterval(this.intervalId)
            }
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            updateTime(days, hours, minutes, seconds);
        }, 1000);
        
    },
    
};

 



function updateTime(days, hours, minutes, seconds) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minutes.textContent = `${minutes}`;
    refs.seconds.textContent = `${seconds}`;
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days =  addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2,`0`)
    
}