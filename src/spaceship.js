class Spaceship{
    constructor(name, capacity, currentLoad, shield){
        this.name = name
        this.capacity = capacity
        this.currentLoad = currentLoad
        this.shield = shield
    }

    percentLoad(){
        return this.currentLoad * 100 / this.capacity
    }

}

export default Spaceship