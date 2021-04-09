let start = [
    "Justin",
    "Andy",
    "Jean",
    "Zack",
    "Scott",
]

// console.log a sub array containing only J names

let res = start.filter((name) =>{
    return name(0) === 'J'
})
console.log(res)

console.log(start.filter(name =>(0) == 'K'))


// find the average of all the students grades

let students = [
   { name: "Andy",
    grade: 3.0
   },
   { name: "Bill",
    grade: 2.8
   },
   { name: "Jackie",
    grade: 3.0
   },
   { name: "Eli",
    grade: 4.0
   },
   { name: "Zach",
    grade: 2.1
   },
]

//1
let total = 0
for (let student of students){
    console.log(student.grade)
    total += students.grade
}
let average = total / students.lenght

//2 
let total2 = 0
students.forEach(s => total2 += s.grade)
let average2 = total2 / students.length
console.log(average2)

//3
console.log(
    students.reduce((gpa, student) => gpa += student.grade) / students.length
)

/*
let x = [1, 2, 3]
let res = x.map((x) => x * x)
res.reduce.((totalVal, curValue) => {totalVal += curValue}, 0)
*/

// let result3 = 9

// let result3 =  [1, 4, 9]
//     .reduce((totalVal, curValue) => totalVal += curValue, 0)

let result3 =[1, 2, 3]
.map((x) => x * x)
.reduce((totalVal, curValue) => totalVal += curValue, 0)

console.log(result3)