// const seconds = document.querySelector("#inputSec");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const time = document.querySelector("#time");
let temp;

time.style.color = "gainsboro";

const countDown = startBtn.addEventListener("click", evetttt => {
    // console.log(Number(seconds.value));
    startBtn.blur();
    console.log(startBtn);
    console.log("start buton" + evetttt.key);
    time.style.color = "gainsboro";
    
    time.innerHTML = "00:00:00";
    console.log("hello")
    // startCountdown(Number(seconds.value));
    
    inputTime();
    
    let curTime = "000000";
    let cursorPos = 0;
    function inputTime() {
        
        window.addEventListener("keydown", event => {
            console.log(event.key + ": " + curTime);
            // return;
            if (event.key == "Enter") {
                // formatOccurence(curTime);
                startBtn.removeEventListener("click", countDown);

                console.log("curtime: " + curTime);
                time.style.color = "black";
                // formatOccurence(curTime);
                startCountdown(doSomethings(curTime));

                function doSomethings(curTime) {
                    let sec = 0;

                    sec += Number(Number(curTime[4]) * 10 + Number(curTime[5]));
                    sec += Number(Number(curTime[2]) * 10 + Number(curTime[3])) * 60;
                    sec += Number(Number(curTime[0]) * 10 + Number(curTime[1])) * 3600;
                    console.log("second: " + sec);
                    console.log(curTime);
                    return sec;
                }

                window.removeEventListener("click", countDown);
                
                return;
            } else

            if (event.key == "Backspace") {
                curTime = curTime.slice(0, -1);
                curTime = '0' + curTime;
                formatOccurence(curTime);
                console.log(curTime);
                return;
            } else {

            // console.log(event.key);

                if (event.repeat || curTime[0] != '0') {
                    // console.log("hellll");
                    return;
                }

                let val = Number(event.key);
                console.log(val);
                if (0 <= val && val <= 9) {
                    curTime += String(val);
                    curTime = curTime.substring(1);
                    formatOccurence(curTime);
                }
            }
            console.log("end: " + curTime);
        });

        
        function formatOccurence(str) {
            if (str == "000000") {
                time.innerHTML = "00:00:00";
                time.style.color = "gainsboro";
            } else {
                time.innerHTML = `${str[0] + str[1]}:${str[2] + str[3]}:${str[4] + str[5]}`;
                time.style.color = "black";
            }
        }
    }
});

resetBtn.addEventListener("click", () => {
    clearWhenEnd();
    time.style.color = "gainsboro";
    document.getElementById("time").innerHTML = "__:__:__";
});

function formatSize(time) {
    time = Math.floor(Number(time));
    if (time < 10) time = '0' + time;
    return String(time);
}

function clearWhenEnd() {
    clearInterval(temp);
}


function formatTime(timeInSec) {
    timeInSec = Number(timeInSec);
    let seconds = timeInSec % 60;
    let minutes = (timeInSec / 60) % 60;
    let hours = timeInSec / 3600;
    return formatSize(hours) + ':' + formatSize(minutes) + ':' + formatSize(seconds);
}

function startCountdown(sec) {
    // const currentTime = document.getElementById("time");
    const currentTime = time;
    console.log("in here: " + sec);
    // return;
    const myInterval = temp = setInterval(() => {
        currentTime.style.color = "black";
        currentTime.innerHTML = formatTime(sec);
        sec --;
        if (sec < 0) {
            currentTime.innerHTML = "Done!!!";
            clearWhenEnd();
        }
    }, 1000);

}
