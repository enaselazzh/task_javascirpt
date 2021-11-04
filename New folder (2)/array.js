console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7,  9 , 45 ]

 ["Str" "alex","moh"]

 ['the','fox', 'over', lazy, 'dog' ]

*/



2
// What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"];
var x = fruits.indexOf("Banana");
var y = fruits.indexOf("Tomato");
console.log(x);
console.log(y);




/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/


4
// Create a function called firstOfArray
// that take an array as a parameter
// and return the first element in an array

// Ex: firstOfArray([1,4,5]) => 1
// Ex: firstOfArray(["t","u","g","x"]) => "t"
function firstOfArray(array){

  return array[0] ;
}
let array=["t","u","g","x"];
console.log(firstOfArray(array));




5
// Create a function called lastOfArray
// that take an array as a parameter
// and return the first element in an array

// Ex: lastOfArray([1,4,5]) => 5
// Ex: lastOfArray(["t","u","g","x"]) => "x"
function lastOfArray(array){
    return array[array.length-1];
}
array1=[1,4,5];
console.log(lastOfArray(array1));


/*
6
Using console make this array to be like this one (push, unshift, shift, pop)
*/
var array2 = [0,5,7,9]
// => [1,3,4,6,8,9,10]
array2.shift();
array2.shift();
array2.shift();
array2.unshift(1,3,4,6,8);
array2.push(10)
console.log(array2);






/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
var array2 = [5,9,-7,3.5]
*/


/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arry){
     let num = arry.length;
    if(Array.isArray(arry)){
       if(num%2==0){//even array
        num = num /2;     
        return arry[num-1] +" and "+arry[num] ;
       }else{
           num = num /2 - 0.5;
           return arry[num];

           
       }
    }
}
console.log(middleOfArray(["t","u","g","c","t","x"]));

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something

*/
var animals = ['cat', 'ele', 'bird'];
animals[0]='zebra';
animals[0]='elephant';


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(array , index){
    return array.indexOf(index);

}
var nums= [1,2,3,8,9];
console.log(indexOfArray(nums,3));

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(array){
    array.pop()
 return array ;
}
var nums1= [1,2,3,8,9];
console.log(arrayExceptLast (nums1));

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function  addToEnd (array , value){
    array.pop()
    array.push(value);
    return array;
}
var nums2= [1,2,3,8,9];
console.log(addToEnd(nums2,33));

// all the exercises below should solved 2 times: 1- for loop 2- while loop
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
// using for loop
function sumArrayfor(array){
    let sum =0;
    for(let i=0; i<array.length;i++){
        sum += array[i];
    }
  return sum;
}
var nums4= [1,2,3,8,9];
console.log(sumArrayfor(nums4));
// using while loop
function sumArraywhile(array){
    let sumwhile =0,i=0;
       while (i<array.length){
        sumwhile += array[i];
        i++;
       }
    
  return sumwhile;
}
var nums5= [1,2,3,8,9,10];
console.log(sumArraywhile(nums5));
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(array){
    
    let minelemnt=array[0];
  for (let i=1 ;i<array.length;i++){
            if(array[i]<minelemnt){
                minelemnt = array[i];
            }
    
  }
  return minelemnt;
}
var nums7= [10,1,2,3,-5,9];
console.log(minInArray(nums7));

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums9= [1,2,3,8,9];

function removeFromArray (array , elemnt){
      let index =array.indexOf(elemnt);
    for(let i=0 ;i<=array.length;i++){
         
    }
}


console.log(removeFromArray(nums9,3));

// console.log(removeFromArray(nums9,1));