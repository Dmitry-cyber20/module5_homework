//Задача 1
let a = prompt ("input");
a = +a;
alert (typeof a);

if (a% 2 ===0) {
  alert ("четное");
}
else if (a%1 ===0) {
  alert ("нечетное");
}
else {
  alert("Упс, кажется вы ошиблись")
}

if (a > 0)
 alert(true)

else if (a < 0)
  alert(false )

else
  alert(false)

//Задача 2
let x =  prompt  ("input");

x = +x; 
alert(typeof x);

x = "123";
alert (typeof x);

if (x > 0) {
 alert(true);
}
else if (x < 0) {
  alert(false);
}

else {
   alert("Тип Х не определен");
   }

//Задача 3

function reverseString(str) { 
    return str.split("").reverse().join("");
 }
 console.log=reverseString("hello");

// Задача 4

Math.round(Math.random() * 101)

//Задача 5

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log(arr.length);

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// Задача 6
let array = ["a", "b", "c", "d", "e", "f", "g"];
function hasTwins(array){
  return array.length !== new Set(array).size;
}

//Задача 7
let arr = [8, 3, 0.6, null, 2, 0.8, 67,undefined, ];
let zerocount = 0;
let numbercount = 0;
let evencount = 0;
let oddcount = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" || !isNaN(arr[i])) {
        numbercount += 1;
        if (arr[i] === 0) {
            zerocount += 1;
        } else if (arr[i] % 2 === 0) {
            evencount += 1;
        } else {
            oddcount += 1;
        }
    }
}
console.log(`В массиве: ${numbercount} цифр, ${zerocount} нулей, ${evencount} чётных, ${oddcount} нечётных!`);

//Задача 8
let letters = new Map([
    ["a", "b"],
    ["c", "d"],
    ["e", "f"]
]);
letters.forEach((key) => {
    console.log(`${key} - x`);
});
letters.forEach((value) => {
    console.log(` ${value} - y`);
});


