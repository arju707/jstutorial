// 7. Create a program that uses the map method to add 5 years to each person’s 
// age in an array of objects containing names and ages. 




let person=[

    {name:"arjun",age:21},
    {name:"nived",age:21},
    {name:"vishag",age:22}
]


let addAge=person.map(person=>({
    name:person.name,
    age: person.age+5
}))

console.log(addAge)