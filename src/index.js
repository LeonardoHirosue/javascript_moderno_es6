import Planet from "./planet"
import operationPlanet from "./operation_planet"

let planetList = []

planetList.push(new Planet('Mercúrio', 0.39))
planetList.push(new Planet('Venus', 0.72))
planetList.push(new Planet('Terra', 1))
planetList.push(new Planet('Marte', 1.52))
planetList.push(new Planet('Júpiter', 5.2))
planetList.push(new Planet('Saturno', 9.53))
planetList.push(new Planet('Urano', 19.1))
planetList.push(new Planet('Netuno', 30))

planetList.forEach(planet => {
    console.log(`Planeta: ${planet.name}\n` +
                `Distância em UA: ${planet.distanceAu}\n` +
                `Distância em Km: ${operationPlanet.convertAuToKm(planet.distanceAu).toFixed(2)}`)
})
