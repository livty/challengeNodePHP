<?php
echo "Write down the name of your alarm? "; //Should be Baby crying
$handle = fopen ("php://stdin","r");
$line = fgets($handle);
if(trim($line) != 'Baby crying'){
echo "Please type correct title!\n";
exit;
}
  echo "Title = Baby crying\n"; 

echo date_default_timezone_set('Europe/Helsinki');
$date = date('h:i:s a', time());"\n";


echo "Please write hour of your alarm  "; //Should be 21
$hour = fopen ("php://stdin","r");
$line = fgets($hour);
if(trim($line) != '21' ){
echo "Please type correct time!\n";
exit;
}
echo "Please write minute of your alarm  ";
$minute = fopen ("php://stdin","r");
$line = fgets($minute);
if(trim($line) != '00' ){
echo "Please type correct time!\n";
exit;
}
echo "Please write in how many minutes should your alarm ring ";
$alarm = fopen ("php://stdin","r");
$line = fgets($minute);


echo "Time = 9:00 PM\n";

if (trim($line) === $date){
echo "IT'S TIME!\n";

exit;
}
echo "Please wait\n";
sleep($alarm*60000); //converting to milliseconds






?>