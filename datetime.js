
timer();
setDate();

function timer(){
    var currentTime = new Date()
    var day = currentTime.getDay()
    var month = currentTime.getMonth()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var sec = currentTime.getSeconds()
    if (minutes < 10){
        minutes = "0" + minutes
    }
    if (sec < 10){
        sec = "0" + sec
    }
    var t_str = hours + ":" + minutes + ":" + sec + " ";
    var d_str = month+" | " + day;
    if(hours > 11){
        t_str += "PM";
    } else {
    t_str += "AM";
    }
    document.getElementById('time').innerHTML = t_str;
    setTimeout(timer,1000);
}

function setDate(){
    var currentTime = new Date()
    var day = currentTime.getDay()
    var month = currentTime.getMonth()
    var d_str = month+" - " + day;
    document.getElementById('date').innerHTML = d_str;
}
