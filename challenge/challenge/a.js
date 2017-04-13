var express = require("express"),
a = express(),
request = require("request"),
readlineSync = require('readline-sync'),
moment = require('moment-timezone'),
moment = require('moment');


a.set("view engine","ejs");
a.use(express.static("images"));


       


//Enter your time as specified user input should be 9.00 PM and Title = Baby crying

console.log("Hello, I am an alarm clock!Please enter desired time :)");

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

//convert time to pm/am







// function baby(){
//     if(title !== 'Baby crying' || (htime !== '21' && mtime !== '00')){
//       console.log("Please input correct title and time");
//       process.exit();
//     }else{
//          console.log('Title = ' + title);
//         console.log('Time = ' + '9' + ':' + mtime + 'PM');
//     }
//  }

// baby();





var time = (aHour*3600 + aMinute*60 + aSecond)*1000; //Conversion to milliseconds


// //console.log(time); //seeing how many milliseconds it will take till the alarm


function saySorry(){
    

if(aHour >= 0 && aMinute >= 0 && bSecond >=0){
        console.log("It's TIME!");
         a.get("/",function(req,res){
        res.render("settings");
            
        });
}else if(aHour < 0 && aMinute < 0 && bSecond < 0){
    console.log("Please wait");
    a.get("/",function(req,res){
        res.render("before");
});
        }else{
        console.log("Please enter future time,can't go back in time ");
        process.exit();
    }
   
}
     setTimeout(saySorry, time);
     
   
 console.log(bhour);
  console.log(aHour);

    a.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server will be available when It's TIME! Please refresh me then!");
    
}); 



