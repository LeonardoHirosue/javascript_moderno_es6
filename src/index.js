import Neo from "./neo"
import { getNeos } from "./neo_service"


async function loadNeos(){
    let neos = []
    let neosJSON = await getNeos()
    neosJSON.forEach(neo =>{
        const minDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_min"]
        const maxDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_max"]
        const avarageEstimatedDiameter = minDiameter + maxDiameter / 2
        const newNeo = new Neo(neo["id"], neo["name"], avarageEstimatedDiameter, neo["is_sentry_object"])
        neos.push(newNeo)
    })
    renderNEOs(neos)
}

function renderNEOs(neos){
    const ulElement = document.getElementById("neos-list")
    
    neos.forEach(neo => {
        const liElement = document.createElement("li")
        const isSentry = neo.isSentry ? 'Perigo de Colisão' : 'Sem perigo de colisão'
        liElement.innerText = `${neo.id} | ${neo.name} | ${neo.avarageEstimatedDiameter} | ${isSentry}`
        ulElement.appendChild(liElement)
    })
}

loadNeos()
