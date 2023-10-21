
class person{
    constructor (name, age, address){
        this.name=name;
        this.age=age;
        this.address=address;
        
    }


    getName() {
      return this.name;
    }

    getAge() {
    return this.age;
    }

    getAddress() {
    return this.address;
    }


    setName(name){
        this.name=name;
    }

    setAge(age){
        this.age=age;
    }

    setAddress(address){
        this.address=address;
    }


    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Address: ${this.address}`);
        
      }
}

const person1 = new person("John Doe", 30, "123 Main St, City");
person1.displayDetails();