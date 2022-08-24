import Spaceship from "./spaceship"
import SpaceshipEngine from "./spaceship_engine"

const sophia = new Spaceship("Sophia", 10, 5, 70)
const amsterda = new Spaceship("Amsterdã", 14, 10, 40)
const estrelaAna = new Spaceship("Estela-anã", 20, 4, 80)

const connectSophia = new SpaceshipEngine(sophia)
const connectAmsterda = new SpaceshipEngine(amsterda)
const connectEstrelaAna = new SpaceshipEngine(estrelaAna)

connectSophia.turnOn()
connectAmsterda.turnOn()
connectEstrelaAna.turnOn()

//verificando se o turnOn está assíncrono
console.log("Promise")
