import Spaceship from "./spaceship"
import armamentKind from "./armaments"
//import nomeado
import { laserDef as laserD} from "./defenses.js"
import basicDefense from "./defenses.js"

const spaceship = new Spaceship("USS Enterprise", "James Tiberiu Kirt", armamentKind.laser, laserD)
const basicSpaceship = new Spaceship("Nave Básica", "Astronauta Zin", [], basicDefense)

console.log(spaceship)
console.log(basicSpaceship)