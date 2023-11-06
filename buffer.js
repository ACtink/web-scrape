const fs = require("fs")


const data = fs.readFileSync("./abc.txt")

console.log(data)
console.log(data.toString())
console.log(data.toJSON())



class A {

   constructor(name , roll){
        this.name = name
        this.roll = roll
    }
    fillWater(){
        console.log("Filling water")
       
    }

    fillMilk(){
        console.log("Filling Milk")
        obj.fillWater()
        return "hello"
    
    }
}

const obj = new A("Colt" , "101");

console.log(obj.fillMilk())

console.log(obj.name)