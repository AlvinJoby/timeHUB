/*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/
document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabs = document.querySelectorAll(".tab");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tabId = button.getAttribute("data-tab");
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            tabs.forEach(tab => tab.classList.remove("active"));
            document.getElementById(tabId).classList.add("active");
        });
    });
});
/*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/
function clock(){
    function run(){
        /*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/
        const clockTime = document.getElementById("clockTime");
        const amorpm = document.getElementById("amorpm");
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        let amORpm = hours>=12?"PM":"AM";
        hours = hours%12||12;
        hours = hours.toString().padStart(2, "0");
        minutes = minutes.toString().padStart(2, "0");
        seconds = seconds.toString().padStart(2, "0");
        amORpm = amORpm.toString();
        const format = `${hours} : ${minutes} : ${seconds}`;
        amorpm.innerHTML = amORpm;
        clockTime.textContent = format;
        /*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/
    }
    run();
    setInterval(run,1000);
}
clock();

////////////////////////////////////////////////////////////////////////////

/*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/
    const stopwatchDisplay = document.getElementById("stopwatchDisplay");
    let timer = null;
    let startTime = 0;
    let elapsedTime = 0;
    let isRunning = false;
    let mainBtn = document.getElementById("mainStopwatchBtn");
    let startandstop;
    startandstop = isRunning?"Stop":"Start";
    mainBtn.innerHTML = startandstop;
/*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/

    function startStopwatch(){
        if(!isRunning){
            startTime = Date.now()-elapsedTime;
            timer = setInterval(updateTimeStopwatch,10);
            isRunning = true;
        }else{
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
        }
        startandstop = isRunning?"Stop":"Start";
        mainBtn.innerHTML = startandstop;
        
    };
    /*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/
    function updateTimeStopwatch(){
        const currentTime = Date.now();
        elapsedTime = currentTime-startTime;
        let hours = Math.floor(elapsedTime/(1000*60*60));
        let minutes = Math.floor(elapsedTime/(1000*60)%60);
        let seconds = Math.floor(elapsedTime/1000%60);
        let milliSeconds = Math.floor((elapsedTime%1000)/100);
        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");
        milliSeconds = String(milliSeconds).padStart(2,"0");
        
        stopwatchDisplay.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
    };
    /*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/
    function resetStopwatch(){
        clearInterval(timer);
        startTime = 0;
        elapsedTime = 0;
        isRunning = false;
        stopwatchDisplay.textContent = "00:00:00:00";
        startandstop = isRunning?"Stop":"Start";
        mainBtn.innerHTML = startandstop;
    }
/*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/
/////////////////////////////////////////////////////////////////////////


document.querySelectorAll('.timerInput').forEach(input => {
    input.addEventListener('input', () => {
        let value = parseInt(input.value, 10);
        let min = parseInt(input.min, 10);
        let max = parseInt(input.max, 10);

        if (value < min) {
            input.value = min;
        } else if (value > max) {
            input.value = max;
        }
        
    });
});
/*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/
    let isTimerRunning = false;
    let isTimerPaused = false;
    let duration;
    let remainingTime;
    let interval;
    const inputDisplay = document.getElementById("inputDivTimerTab");
    const timerDisplay = document.getElementById('timerRealDisplay');
    const pauseButton = document.getElementById('pauseButton');
    const playButton = document.getElementById('playButton');
    const startButton = document.getElementById('startTimerBtn');
    const resetButton = document.getElementById('resetTimerBtn');
    const timerEndSound = document.getElementById('timerEndSound');
    function startTimer(){
        
        clearInterval(interval);
        if(!isTimerPaused){
        const hours = parseInt(document.getElementById('hours').value, 10) || 0;
        const minutes = parseInt(document.getElementById('minutesTimer').value, 10) || 0;
        const seconds = parseInt(document.getElementById('secondsTimer').value, 10) || 0;

        if (hours === 0 && minutes === 0 && seconds === 0) {
            return;
        }
        duration = hours*3600+minutes*60+seconds;
        remainingTime = duration;
        interval = setInterval(updateTimer, 1000)
        isTimerRunning = true;
        inputDisplay.style.display = 'none';
        timerDisplay.style.display = 'flex';
        playButton.style.display = 'none';
        pauseButton.style.display = 'flex';
        }
        if(isTimerPaused){
            interval = setInterval(updateTimer, 1000);
            inputDisplay.style.display = 'none';
            timerDisplay.style.display = 'flex';
            playButton.style.display = 'none';
            pauseButton.style.display = 'flex';
            isTimerPaused = false;
        }

    }
/*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/
    function updateTimer() {
        if (remainingTime <= 0) {
            clearInterval(interval);
            timerDisplay.textContent = "00:00:00";
            inputDisplay.style.display = 'block';
            timerDisplay.style.display = 'none';
            playButton.style.display = 'flex';
            pauseButton.style.display = 'none';
            timerEndSound.play();
            return;
        }

        remainingTime--;

        const hours = parseInt(remainingTime / 3600, 10);
        const minutes = parseInt((remainingTime % 3600) / 60, 10);
        const seconds = parseInt(remainingTime % 60, 10);

        timerDisplay.textContent = 
            (hours < 10 ? "0" : "") + hours + ":" + 
            (minutes < 10 ? "0" : "") + minutes + ":" + 
            (seconds < 10 ? "0" : "") + seconds;
    }
    function pauseTimer() {
        clearInterval(interval);
        playButton.style.display = 'flex';
        pauseButton.style.display = 'none';
        isTimerPaused = true;
    }
    function resetTimer(){
        clearInterval(interval);
        timerDisplay.textContent = "00:00:00";
        document.getElementById('hours').textContent = '00:';
        document.getElementById('minutesTimer').textContent = '00:';
        document.getElementById('secondsTimer').textContent = '00';
        remainingTime = null;
        isTimerRunning = false;
        isTimerPaused = false;
        inputDisplay.style.display = 'block';
        timerDisplay.style.display = 'none';
        playButton.style.display = 'flex';
        pauseButton.style.display = 'none';
    }
    /*<!-----CODE-BY-ALVINJOBY----->
    <!----follow-me-on-github:(ID) AlvinJoby------->*/