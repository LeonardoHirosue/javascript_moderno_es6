let komodoShip = {
	nome: "Komodo",
	velocity: 80,
	acceleration: 0
}

const velocityAfter2seconds = (velocity, acceleration) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(acceleration > 0){
				velocity += 2*acceleration
				console.log(`Nova velocidade ${velocity}`)
				resolve(velocity)
			} else {
				console.log(`Aceleração inválida.`)
				reject(`Não possui aceleração.`)
			}
		}, 2000)
	})
}

velocityAfter2seconds(komodoShip.velocity, komodoShip.acceleration).then(velocity => {
	komodoShip.velocity = velocity
	console.log("Após aceleração: ", komodoShip)
}).catch(message => {
	console.log(`Komodo: ${message}`)
})

console.log("Execução de Promises")
console.log(komodoShip)