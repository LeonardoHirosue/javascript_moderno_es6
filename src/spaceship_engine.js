export default class{
	constructor(spaceship){
		this.spaceship = spaceship
	}

    async turnOn(){
		try{
			const checkCurrentLoadPromise =  this.checkCurrentLoad()
			const testShieldPromise =  this.testShield()
			let promiseResult = await Promise.all([checkCurrentLoadPromise, testShieldPromise])
			this.spaceship.shield = await this.normalizeShield(promiseResult[1])
			console.log(`(${this.spaceship.name}) Partida autorizada: Escudo(${this.spaceship.shield}) e Carga(${this.spaceship.currentLoad}GJ)`)
		} catch(error) {
			console.log(`(${this.spaceship.name}) Partida não autorizada: ${error}`)
		}
    }

	async checkCurrentLoad(){
		let percentLoad = this.spaceship.percentLoad()
		if(percentLoad < 30){
			return Promise.reject(`Carga em apenas ${percentLoad}GJ`)
		}
		return(percentLoad)
	}

	async testShield(){
		let doubleShield = this.spaceship.shield*2
		if(doubleShield < 100){
			return Promise.reject("Escudo com sobrecarga")
		}
		return(doubleShield)
	}

	async normalizeShield(doubleShield){
		let normalizeShield = doubleShield * 0.7
		if (normalizeShield > 120) {
			return Promise.reject("Escudo sobrecarregado")
		}
		return (normalizeShield)
	}
}