//
function Automobile(wheels){
    this.wheels = wheels
    this.setColor = ()=>{
        this.color
    }
    this.getColor = ()=>{
        return this.color
    }
    this.gas.Pedal = ()=>{
        return 'Vroom'
    }
}


Sedan.prototype = new Automobile(4)
function Sedan(make, model, year){
    this.make = make
    this.model = model
    this.year = year
    this.doors = 4
}
//exercise #2

Camry.prototype = new Sedan("toyota", "Camry", 2000)

function Camry(){

}

let camry = new Camry ()

console.log(camry.wheels)

camry.year = 2010

console.log(camry.year)

//exercise #3

class Automobile{
    constructor(wheels){
        this.wheels = wheels
        this.color = null
    }

    setColor(color){
        this.color = color
    }

    getColor(){
        return this.color
    }
}

class Motorcycle extends Automobile{
    constructor(make, model, year){
        super(2)
        this.make = make
        this.model = model
        this.year = year
    }
}

//exercide 4

class Sedan extends Automobile{
    constructor(make, model, year){
        super(4)
        this.make = make
        this.model = model
        this.year = year
    }
   
}

class Maybach extends Sedan{
    constructor(){
        super("mercedes", "Maybach", 2012)
    }
    setPrase(prase){
        this.prase + "werever"
    }

    setPrase(){
        return this.prase
    }

}