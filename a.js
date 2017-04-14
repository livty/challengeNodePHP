var express = require("express"),
a = express(),
request = require("request"),
readlineSync = require('readline-sync'),
moment = require('moment-timezone'),
moment = require('moment');

a.set("view engine","ejs");
a.use(express.static("images"));


console.log("Hello, I am an alarm clock!Please enter desired time in a 24-hour format :)");

var title = readlineSync.question('Title = ');
var htime = readlineSync.questionFloat('Hour ');
var mtime = readlineSync.question('Minute ');
var stime = readlineSync.questionFloat('Second ');

var alarm = new Date();
var today = alarm.getDate();
var bhour = alarm.getHours() +3;


var aHour = htime - bhour ; //Difference in between hours of desired time and current time
var bMinute = alarm.getMinutes('Europe/Helsinki');
var aMinute = mtime - alarm.getMinutes() ; //Difference in between minutes of desired time and current time
var bSecond = alarm.getSeconds('Europe/Helsinki') + 6;
var aSecond = stime - bSecond; //Difference in between seconds of desired time and current time (small delay present though)

var time = (aHour*3600 + aMinute*60 + aSecond)*1000; //Conversion to milliseconds

function saySorry(){
    
    if(aHour >= 0 && aMinute >= 0 && bSecond >=0){
        console.log("It's TIME! for" + ' ' + title);
         a.get("/",function(req,res){
        res.render("settings");
        });
   }else{
        console.log("Please enter future time,can't go back in time ");
        process.exit();
    }
   
}
     setTimeout(saySorry, time);
     
   


    a.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server will be available when It's TIME! Please refresh me (https://entrotoback-tetyanat.c9users.io/) then!");
    
}); 



