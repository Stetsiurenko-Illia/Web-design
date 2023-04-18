import TimerView from "./TimerView.js";


export default class TimerListView{
    constructor(){
        this.timerView = new TimerView(null);
        this.html = "";
    }

    showTimerList(seconds, minutes, name, startTime, endTime){
        this.html += this.timerView.render(seconds, minutes, name, startTime, endTime); 
        return this.html;
    }

    createDivForListItems(){
        console.log("createDIvForListItems");
        return '<div id="listItemsCenter" class="col-10 col-sm-10 col-md-8 col-lg-6 col-xl-5 center"></div>';
    }
}