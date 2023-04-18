export default class TimerView{

    constructor(){
        
    }

    render(seconds, minutes, name, startTime, endTime){
        if(startTime.toLocaleDateString() === endTime.toLocaleDateString())
        return '<p><div><b>' + name + '</b><button id="close" class="btn"><i class="fas fa-times close-icon"></i></button><span style="float:right;">' + minutes + ":" + seconds + " " +  startTime.toLocaleDateString() + " " + startTime.getHours() + ":" + startTime.getMinutes() + ":" + startTime.getSeconds() + " - " + endTime.getHours() + ":" + endTime.getMinutes() + ":" + endTime.getSeconds() + '</span></div></p>';
        else
        return '<p><div><b>' + name + '</b><button id="close" class="btn"><i class="fas fa-times close-icon"></i></button><span style="float:right;">' + minutes + ":" + seconds + " " +  startTime.toLocaleDateString() + " " + startTime.getHours() + ":" + startTime.getMinutes() + ":" + startTime.getSeconds() + " - " + endTime.toLocaleDateString() + " " +  endTime.getHours() + ":" + endTime.getMinutes() + ":" + endTime.getSeconds() + '</span></div></p>';
    }

    showCurrentTime(seconds, minutes){
        let currentTime = document.querySelector("#currentTime");
        currentTime.innerHTML = '<b>' + minutes + ':' + seconds + '</b>';
    }
}