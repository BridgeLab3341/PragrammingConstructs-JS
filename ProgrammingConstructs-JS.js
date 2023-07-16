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