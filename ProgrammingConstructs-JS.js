//Programming Constructs
//1. Sequences statement
var a="It is a string";
var b=20;
console.log(typeof(a));
console.log(typeof(b));

//2. Selection statement
let age=25;
if((age>18))
{
    console.log("Eligible for Voting");
}
else
{
    console.log("Not Eligible for Voting");
}

//3. Functions
function AddNumbers(a,b){
    return a+b;
}
result=AddNumbers(3,5);
console.log("Addition of Numbers = "+result);

//4. Repetition Statemnt
let i=1;
for(i=1; i<=10;i++)
{
    console.log(5*i);
}
let num=10;
let k=0;
while(k<=num)
{
    k++;
    console.log(6*k);
}
//5. Arrays
const myArray=[1,2,3,4,5,6,7,8,9];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray.length)
 //Array.Map
const mapArray=myArray.map(x=>x+2);
console.log(mapArray);
 //Array.filter
const filteredArray=myArray.filter(item=> item ==3 || item ==6);
console.log(filteredArray);
//Array.sort
const descendingarray=myArray.sort((a,b)=>a>b? -1:1);
const ascendingarray=myArray.sort((a,b)=>a>b? 1:-1);
console.log(descendingarray);
console.log(ascendingarray);
//Array.Slice
const slicedArray=myArray.slice(2,6);
console.log(slicedArray);
//Array.foreach
const foreachArray=myArray.forEach(x=>console.log(x));
//Array.Concat
const alpha1=["a","b","c"];
const alpha2=["d","e","f"];
const concatArray=alpha1.concat(alpha2);
console.log(concatArray);
//Array.Reduce
const reduceArray=myArray.reduce((total,current)=>total+current);
console.log(reduceArray);
//Array.find
const findArray=myArray.find(x=>x>3);
console.log(findArray);
//Array.push
const pusArray=myArray.push(10);
console.log(pusArray);
//Array.pop(shift and unshift)
const popArray=myArray.pop();
console.log(popArray);

//6. Map
let myMap=new Map();
myMap.set(1,"Somu");
myMap.set(2,"Anil");
myMap.set(3,"Shekar");
console.log(myMap);
