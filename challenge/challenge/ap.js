var express = require("express"),
app = express(),
request = require("request"),
readlineSync = require('readline-sync'),
moment = require('moment-timezone'),
moment = require('moment'),
png = require('console-png').attachTo(console);
app.use(express.static("images"));



var image = require('fs').readFileSync(__dirname + '/images/the-daily-life-of-darth-vader-is-my-latest-365-day-min.png');



var alarm = new Date();
moment.tz.setDefault("Europe/Helsinki");

console.log("Hello, I am an alarm clock!Please enter desired time :)")


var newHour = readlineSync.questionFloat( 'Hour   ' ); //Enter your hour
var newMinute = readlineSync.questionFloat('Minute   '); //Enter your minute
var newSecond =  readlineSync.questionFloat('Second   '); //Enter your second (there is a small delay of 5 sec happening on average)


var today = alarm.getDate();

var bHour = alarm.getHours('Europe/Helsinki') + 3; //so that time will be in Europe/Helsinki timezone
var aHour = newHour - bHour ; //Difference in between hours of desired time and current time
var bMinute = alarm.getMinutes('Europe/Helsinki');
var aMinute = newMinute - alarm.getMinutes() ; //Difference in between minutes of desired time and current time
var bSecond = alarm.getSeconds('Europe/Helsinki') + 6;
var aSecond = newSecond - bSecond; //Difference in between seconds of desired time and current time (small delay present though)


var time = (aHour*3600 + aMinute*60 + aSecond)*1000; //Conversion to milliseconds

//console.log(time); //seeing how many milliseconds it will take till the alarm

 function bringitOn(){
    
    if(aHour >= 0 && aMinute >= 0 && bSecond >=0){
        console.log("It's TIME!");
        console.png(image);
    }else{
        console.log("Please enter future time,can't go back in time ");
    }
    }
     setTimeout(bringitOn, time);
 

