import Spaceship from "./spaceship"
import SpaceshipEngine from "./spaceship_engine"

const sophia = new Spaceship("Sophia", 10, 5)
const amsterda = new Spaceship("Amsterdã", 14, 10)
const estrelaAna = new Spaceship("Estela-anã", 20, 4)

const connectSophia = new SpaceshipEngine(sophia)
const connectAmsterda = new SpaceshipEngine(amsterda)
const conneceEstrelaAna = new SpaceshipEngine(estrelaAna)

connectSophia.turnOn()
connectAmsterda.turnOn()
conneceEstrelaAna.turnOn()

//verificando se o turnOn está assíncrono
console.log("Promise")