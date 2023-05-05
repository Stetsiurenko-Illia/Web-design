import Timer from "../model/Timer.js";
import TimerList from "../model/TimerList.js";
import TimerListView from "../view/TimerListView.js";
import TimerView from "../view/TimerView.js";
import store from '../../../store/store.js';

let index

export default class Controller{
    constructor(){
        this.haveList = false;
        this.listView = new TimerListView();
        this.startButton = document.querySelector("#start-btn");
        this.pauseButton = document.querySelector("#resume-pause-btn");
        this.stopButton = document.querySelector("#stop-btn");
        this.saveButton = document.querySelector("#save-btn");
        //this.deleteButton = document.querySelector("#close");    
        this.timerModel = new Timer();
        this.startButton.addEventListener("click", this.onStart.bind(this));
        this.pauseButton.addEventListener("click", this.onPause.bind(this));
        this.stopButton.addEventListener("click", this.onStop.bind(this));
        this.saveButton.addEventListener("click", this.onSave.bind(this)); 
        //this.deleteButton.addEventListener("click", this.onDelete.bind(this));      
        this.active = false;
        this.updateInterval = setInterval(this.updateTime.bind(this), 10);
        this.timerView = new TimerView();
        this.timerList = new TimerList();
        //index = id
    }

    onStart(){        
        this.timerModel.start();
        this.active = true
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

    onSave() {
        console.log("controller.onSave()");
        if (this.haveList === false) {
          this.haveList = true;
          store.dispatch('setHaveList', this.haveList)
          //document.querySelector("#listItemNew").innerHTML = this.listView.createDivForListItems();
        }
      
        this.setName();
        //this.timerModel.id = index++
        store.dispatch("addTimer", this.timerModel);
        store.dispatch("setID", index);
        // let center = document.querySelector("#listItemsCenter");
        // console.log(this);
        // console.log(this.timerModel);
        // center.innerHTML = this.listView.showTimerList(
        //   this.timerModel.secondsString(),
        //   this.timerModel.minutesString(),
        //   this.timerModel.name,
        //   this.timerModel.startTime,
        //   this.timerModel.endTime
        // );
      }
      

    onDelete() {
      // store.dispatch("deleteTimer", this.timerModel.id); 
       console.log("controller.delete");
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