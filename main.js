console.log("JavaScript loaded!")

let inputValue, startTime, currentTime, interval;

const startClock = () => {
    console.log("Button has been clicked.")
    inputValue = document.getElementById("timer-input").value;
    if (inputValue == "--:--:--" || inputValue == "") {
        console.log("inputValue = "+inputValue)
        document.getElementById("message").innerHTML = "Please input a start time!";
    }
    else {
        startTime = inputValue;
        timeArray = inputValue.split(":");
        if (timeArray.length == 2) {
            console.log("timeArray = "+timeArray)
            timeArray.push(0)
        }
        currentTime = parseInt(timeArray[0])*3600 + parseInt(timeArray[1])*60 + parseInt(timeArray[2]);
        if (isNaN(currentTime)) { 
            currentTime = 0
        }
        console.log("currentTime = "+currentTime);
        document.getElementById("reset").style.display = "initial";
        document.getElementById("message").innerHTML = "You are counting down from <span id='display-time'>"+startTime+"</span>.";
        interval = setInterval(changeClock, 1000);
        changeClock();
        
    }
}

const changeClock = () => {
    document.getElementById("clock").textContent = currentTime;
    if (currentTime == 0) {
        clearInterval(interval);document.getElementById("message").innerHTML = "You have finished counting down from <span id='display-time'>"+startTime+"</span>."
    } else {
        currentTime--;
    }
}

document.getElementById("submit").addEventListener("click",()=>{
    document.getElementById("submit").remove();
    startClock()
})

document.getElementById("reset").addEventListener("click", ()=>{
    clearInterval(interval);
    startClock();
})