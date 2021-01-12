const countdownEl = document.getElementById('countdown');
const countupEl = document.getElementById('countup');
let totalMinutes = .3 ;
let totalSeconds = totalMinutes * 60;
let mins = 0, secs = 0;

function countdown(){
    let currentMinutes = Math.floor(totalSeconds / 60);
    let currentSeconds = totalSeconds % 60;
    currentSeconds = (currentSeconds < 10 && currentMinutes >= 0 ) ? '0' + currentSeconds :
        currentSeconds; 
    if (currentMinutes >= 0) {
        countdownEl.innerHTML = `${currentMinutes}:${currentSeconds}`;
        totalSeconds--;
    }
    // console.log(currentMinutes);
    if (currentMinutes === 0 && currentSeconds > 0) {
       countdownEl.style.color = '#f1c40f';
    } else 
    if (currentMinutes < 0 ) {
        countdownEl.style.color = 'red';
        countdownEl.classList.add('blink');
        countupEl.classList.remove('hide'); 

        setInterval(()=>{
                if (secs > 59) {
                mins++;
                secs= 0;
            }
            secs = secs < 10 ? secs = '0' + secs :
                secs;
            countupEl.innerHTML = `${mins}:${secs}`;
            ++secs; 
            
         
        },1000);
        clearInterval(myCountdown);
    }     
}

const myCountdown = setInterval(countdown, 1000);    

/******************/