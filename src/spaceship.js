class Spaceship{
    constructor(name, capacity, currentLoad){
        this.name = name
        this.capacity = capacity
        this.currentLoad = currentLoad
    }

    percentLoad(){
        return this.currentLoad * 100 / this.capacity
    }
}

export default Spaceship