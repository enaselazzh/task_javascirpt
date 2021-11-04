/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
function tellFortune(job, location , name , children ){
  document.write(`You will be a ${job} in ${location}, and married to ${name} with ${children} kids.`)
}
tellFortune('software engineer', 'Jordan', 'Alice', 3);
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(age){
     document.writeln(`Your doggie is ${age*7}  years old in dog years!`)
}
calculateDogAge(1);

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age, amount){
    age = 100-age;
    document.writeln(`You will need ${age*amount*365} to last you until the ripe old age of ${age}`)
}
calculateSupply(30, 3);

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Jouza")
=> "Hello Jouza"
*/
function greet(name){
  return "hello "+name;
}
console.log(greet("enas"));

/*
5
what is the error:
function double(cat) {
  return 2 * x; undifine x
}


function double(7) { //7
  return 2 * 7;
}

function double('7') {//7
  return 2 * 'x';//'x' nan error 
}
*/



/*
6
fix these functions:
func double1(x) {
  return 2 * x ;
}

function double2 (x){
return 2 * x;
}

function double3(x) {
  return 2 * x;

*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(n){
   return  Math.pow(n,3);
}
console.log(cube(4));
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(n1,n2){
  return n1*n2;
}
console.log(multiply(3,4));
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function  canIGetADrivingLicense(age){
      if(age>=20){
        return "yes you can";
      }else{
        return `please come back after ${20-age} years to get one`;
      }
}
console.log(canIGetADrivingLicense(17));


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(str1, str2){
    if( str1.length === str2.length){
        return "true";
    } else{
      return "false";
    }
}
console.log(sameLength("tree","car"));
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/ 
function largerNubmer(num1,num2){
   if (num1 > num2){
     return num1;
   }else{
     return num2;
   }
}
console.log(largerNubmer(8,6))
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
function smallerNubmer(num1, num2,num3){
   if(num1<num2 && num1<num3){
      return num1;
   }else if (num2<num1 && num2<num3){
     return num2;
   }else {
     return num3;
   }
}
console.log(smallerNubmer(8,6,7));

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
 function shorterString(...array){
   let shortstr ="";
  let str1= array[0].length;
  let str2= array[1].length;
  let str3= array[2].length;
  let str4= array[3].length;
  let str5= array[4].length;
   
    
 }

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
 function isEven(num){
    if(num %2 ==0){
      return "this number is even";
    }else {
      return "this number is odd";
    }
 }
console.log(isEven(2));
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/ 
function  isOdd(num){
 if(num % 2 == 1){
   return "this number is Odd";
 }else{
   return "this number is Even";
 }
}
console.log(isOdd(4));
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
 function positive(num){
   if(num>0){
    return "the positive the number passed";
   }
   else{
    return "the negative the number passed";
   }

 }
console.log( positive(-4));
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Mohammad","Jouza")
=> "Mohammad Jouza"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName,lastName){
  return  firstName +" "+lastName;
}
console.log(fullName("Mohammad","Jouza"));
/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(...average){
  let sum=0;
  for(let i=0; i<average.length;i++){
    sum += average[i];
  }
  average1=sum/average.length;
 return  average1;
}
console.log(average(5,7,9,3,5));
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
  return Math.random();
}
console.log(randomNumber());