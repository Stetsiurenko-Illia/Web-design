    export default class Timer{
        constructor(){
            this.seconds = 0;
            this.minutes = 0;
            this.elapsed = 0;
            this.startTime;
            this.endTime;
            this.started = false;
            this.name = "New timer";
        }


        start(){
            this.startTime = new Date();
            this.seconds = 0;
            this.minutes = 0;
            this.started = true;
            this.timer = setInterval(() => {
                this.addSecond();
                console.log(this.minutesString() + ":" + this.secondsString()); 
            }, 1000);   
        }

        stop(){
            this.started = false;
            this.endTime = new Date();
            clearInterval(this.timer);
        }

        pause(){
            if(this.started === true){
                this.elapsed = this.minutes * 60 + this.seconds;
                this.endTime = new Date();
                clearInterval(this.timer);
                this.started = false;
            }
            else{
                this.started = true;
                this.timer = setInterval(() => {
                    this.addSecond();
                    console.log(this.minutesString() + ":" + this.secondsString()); 
                }, 1000); 
            }
        }

        minutesString(){
            if(this.minutes < 10){
                return '0' + this.minutes;
            }
            return this.minutes;
        }

        secondsString(){
            if(this.seconds < 10){
                return '0' + this.seconds;
            }
            return this.seconds.toString();
        }
        
        addSecond(){
            if(this.seconds === 59){
                this.seconds = 0;
                this.addMinutes();
                return;
            }
            this.seconds++;
        }

        addMinutes(){
            if(this.minutes === 59){
                this.minutes = 0;
                return;
            }
            this.minutes++;
        }

    }