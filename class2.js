
class uber{
    constructor (distance, price){
        this.distance=distance;
        this.price=price;
    }

    getDistance() {
        return this.distance;
    }

    getPrice() {
        return this.price;
    }

    setDistance(distance){
        this.distance=distance;
    }

    setPrice(price){
        this.price=price;
    }

    displayDetails() {
        
    let Totalprice = this.price*this.distance;
    console.log(Totalprice);
    
      }
}

const person1 = new uber(40,5);
person1.displayDetails();

const person2 = new uber(25,5);
person2.displayDetails();