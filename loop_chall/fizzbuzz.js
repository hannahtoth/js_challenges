/*
for a range of numbers (1 .. 100);
    if the number is div evenly by :
    3 -> fizz
    5 -> buzz
    3 & 5 -> fizzBuzz
    otherwise -> number

1
2
fizz
4
buzz
..
14
fizzBuzz
..
100

Bronze if you solive it with a for loop and if statements
Silver if you solve it with a while loop and switch
Gold if you solve it with a for loop and ternanaries 
*/



for(let i = 0; i<= 100; i++){ 
    if (i % 3 === 0 && i % 5 === 0){
        console.log("fizzBuzz")
    } else if (i % 3 === 0){
        console.log("fizz")
    } else if (i % 5 === 0){ 
      console.log("Buzz")
    } else {
       console.log(i)
    }
}

//Silver if you solve it with a while loop and swtich
let x = 0
while(x <= 100){
switch (true) {
    case x % 15 == 0:
    console.log("fizzBuzz")
    break;
    case x % 3 == 0:
    console.log("fizz")
    break;
    case x % 5 == 0:
        console.log("Buzz")
}
    x++
}

//Gold if you solve it with a for loop and ternanires

for(let z = 1; z <= 100; z++){
    (z % 3 === 0 && z % 5 === 0) ? console.log("fizzBuzz")
    : (z % 5 === 0) ? console.log("Buzz")
    : (z % 3 === 0) ? console.log("fizz")
    : console.log(z)
}

//Food for thouhgt
for(let i = 1; i <= 100; i++){
    if (i % 3 === 0){
        if (i % 5 === 0) console.log("fizzBuzz")
        else console.log("fizz")
    }
    else if(i % 5 === 0) console.log("buzz")
    else console.log(i)
}