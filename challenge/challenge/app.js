var readlineSync = require('readline-sync'),
CLI = require('clui'),
clc = require('cli-color'),
Table = require('cli-table'),
colors = require('colors');


var table = new Table({ head: ["", "AND (option 1) ".yellow.bold, "OR (option 2)".yellow.bold, "NOT (option 3) ".yellow.bold,"XOR (option 4) ".yellow.bold] });

table.push(
    { ["Value A".yellow.bold] : ['Choose 0 || 1', ' Choose 0 || 1', 'Choose 0 || 1', 'Choose 0 || 1']}
  , { ["Value B".yellow.bold] : ['Choose 0 || 1', ' Choose 0 || 1', 'Choose 0 || 1', 'Choose 0 || 1']}
);

console.log(table.toString().bgBlue); //table showing OR NOT AND AND XOR tables


//Choosing a table
var gates = ['AND','OR','NOT','XOR'],
index1 = readlineSync.keyInSelect(gates,'What gate?',{cancel: false});
console.log('The gate ' + gates[index1].green +' is chosen');

//Choosing value for A
var A = ['1','0'],
index = readlineSync.keyInSelect(A, 'Do you choose 1 or 0 for value A?',{cancel: false});
console.log('You have chosen option ' + A[index].green + ' for value A');

//Choosing value for B
var B = ['1','0'],
index2 = readlineSync.keyInSelect(B, 'Do you choose 1 or 0 for value B?',{cancel: false});
console.log('You have chosen option ' + B[index2].green + ' for value B');

//Function for either of the choices based firstly on the choice of the gate, then either values
 function whatdoyouMean(){
   if(gates[index1] === 'OR' || gates[index1] === 'AND' && A[index] === '1' && B[index2] === '1'){
     console.log('Answer for the gate '.bold.cyan + gates[index1].bold.cyan + ' is 1 '.bold.cyan);
   }
    else if(gates[index1] === 'AND' && A[index] === '0' || B[index2] === '0' ){
     console.log('Answer for the gate '.bold.cyan + gates[index1].bold.cyan + ' is 0 '.bold.cyan);
   }
   else if(gates[index1] === 'AND' || gates[index1] === 'XOR' && A[index] === '0' && B[index2] === '0' ){
     console.log('Answer for the gate '.bold.cyan + gates[index1].bold.cyan + ' is 0 '.bold.cyan);
   }
   else if(gates[index1] === 'XOR' && A[index] === '0' && B[index2] === '1'){
     console.log('Answer for the gate '.bold.cyan + gates[index1].bold.cyan + ' is 1 '.bold.cyan);
   }
   else if(gates[index1] === 'XOR' && A[index] === '1' && B[index2] === '0'){
     console.log('Answer for the gate '.bold.cyan + gates[index1].bold.cyan + ' is 1 '.bold.cyan);
   }
   else if(gates[index1] === 'XOR' && A[index] === '1' && B[index2] === '1'){
     console.log('Answer for the gate '.bold.cyan + gates[index1].bold.cyan + ' is 0 '.bold.cyan);
   }
   
   if((gates[index1]) === 'NOT'){
     if(A[index] === '1'){
       console.log('Answer for the gate A(1) '.bold.cyan + gates[index1] + ' is 0'.bold.cyan);
     }if(B[index2] === '1'){
       console.log('Answer for the gate B(1) '.bold.cyan + gates[index1] +' is 0'.bold.cyan);
     }if(A[index] === '0' ){
       console.log('Answer for the gate A(0) '.bold.cyan + gates[index1] + ' is 1'.bold.cyan);
     }if( B[index2] === '0'){
        console.log('Answer for the gate B(0) '.bold.cyan + gates[index1] + ' is 1'.bold.cyan);
     }
   }
   }
 
   
whatdoyouMean();



 
