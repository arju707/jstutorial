/*                              CONSTRUCTOR 
------------------------------------------------------------------------------------------------------------------------------------

The constructor method is a special method used for initializing objects created with 
a class. It’s called automatically when a new instance of the class is created. It 
typically assigns initial values to object properties using parameters passed to it. This 
ensures objects are properly initialized upon creation.*/


class Person{
    constructor(name,age,salary) { //this is constructor and this is used to inetialize the values inside the bracket
        this.name=name
        this.age=age
        this.salary=salary


        }


}

const person1 = new Person("Arjun","21 years","50k") // here creating a new variable to store the values of employes as new
// if there is 1 more persion then we can inetialize the values to another variable
const person2 = new Person("Nived","21 years" ,"40k")
console.log(person1)
console.log(person1.name)
console.log(person1.age)
console.log(person1.salary)

console.log(person2)