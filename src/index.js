import { getSentrys } from "./sentry_service";
import Sentry from "./sentry";

async function loadSentry(){
    const sentrys = []
    const sentrysJSON = await getSentrys()
    console.log(sentrysJSON)
    sentrysJSON.forEach(sentry => {
        let newSentry = new Sentry(sentry["sentryId"], sentry["fullname"], sentry["year_range_min"], sentry["year_range_max"])
        sentrys.push(newSentry)
    });
    renderSentry(sentrys)
}

function renderSentry(sentrys){
    const olElement = document.getElementById("sentrys-list")
    sentrys.forEach(sentry => {
        let liElement = document.createElement("li")
        let text = `(${sentry.id}) ${sentry.name}: risco de colisão entre ${sentry.yearsMin} e ${sentry.yearsMax}`
        liElement.innerText = text
        olElement.appendChild(liElement)
    })
}

loadSentry()