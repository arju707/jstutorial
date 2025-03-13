//sintax


// class ClassName { 


//     // Constructor method  

//    constructor(parameters) {  

//    // Initialization code,  

//    setting up properties  

//    this.property = value; } // Method definitions  

//    methodName()  

//    { 
//     // Method logic }  

//    }
// }


// class Emp{
//     constructor(name,age,destination){      
//         this.name=name
//         this.age=age
//         this.designation=destination
//     }

// }

// const emp=new Emp("aman","25 years","IT")

// console.log(emp.name)
// console.log(emp.age)
// console.log(emp.designation)




class person{
    constructor(name,age,accountBalance){


        this.name=name
        this.age=age
        this.balance=accountBalance
    }
   
}

const Person= new person("Arjun","21 years","$120000");
const Person2=new person("Nived","21 yrs","$10000");


console.log(Person)
console.log(Person2.balance)
