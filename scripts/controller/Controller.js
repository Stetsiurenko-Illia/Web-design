import Timer from "../model/Timer.js";
import TimerList from "../model/TimerList.js";
import TimerListView from "../view/TimerListView.js";
import TimerView from "../view/TimerView.js";


export default class Controller{
    constructor(ItemList, ItemListView){
        this.haveList = false;
        this.listView = new TimerListView();
        this.startButton = document.querySelector("#start-btn");
        this.pauseButton = document.querySelector("#resume-pause-btn");
        this.stopButton = document.querySelector("#stop-btn");
        this.saveButton = document.querySelector("#save-btn");    
        this.timerModel = new Timer();
        this.startButton.addEventListener("click", this.onStart.bind(this));
        this.pauseButton.addEventListener("click", this.onPause.bind(this));
        this.stopButton.addEventListener("click", this.onStop.bind(this));
        this.saveButton.addEventListener("click", this.onSave.bind(this));      
        this.active = false;
        this.updateInterval = setInterval(this.updateTime.bind(this), 10);
        this.timerView = new TimerView();
        this.timerList = new TimerList();
    }

    onStart(){        
        this.timerModel.start();
    }

    onStop(){
        this.timerModel.stop();
    }

    onPause(){
        this.timerModel.pause();
    }

    updateTime(){   
        this.timerView.showCurrentTime(this.timerModel.secondsString(), this.timerModel.minutesString());
    }

    onSave(){
        console.log("controller.onSave()");
        if(this.haveList === false){
            this.haveList = true;
            document.querySelector('#listItem').innerHTML = this.listView.createDivForListItems();
        }

        this.setName();
        this.timerModel.index += 1;
        this.timerList.add(this.timerModel);
        let center = document.querySelector("#listItemsCenter");
        console.log(this);
        console.log(this.timerModel);
        center.innerHTML = this.listView.showTimerList(this.timerModel.secondsString(), this.timerModel.minutesString(), this.timerModel.name, this.timerModel.startTime, this.timerModel.endTime);
    }

    onDelete(){
        console.log("controller.delete");
        this.timerList.delete(this.timerModel);
    }

    setName(){
        let timerNameHtml = document.querySelector("#timerName");
        let timerName = timerNameHtml.value;
        console.log(timerName);
        if(timerName === null || timerName === undefined || timerName === ""){
            timerName = "New timer";
        }
        this.timerModel.name = timerName;
    }

}