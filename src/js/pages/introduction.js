import Commit from "../git/commit.js"
import PageController from "../page_controller.js";
import Repo from "../git/repo.js"
import Broker from "../broker.js";
import GitController from "../git_controller.js";
//TODO brief git intro, intro to commits


let commitId = 1;

const webBroker = new Broker({})

const pageController = new PageController(webBroker, {})

const gitController = new GitController(webBroker)

webBroker.addConsumer(gitController)
webBroker.addProducer(pageController)

const playground = document.createElement("div")

const initBtn = document.createElement("button")
initBtn.textContent = "Init Repo"


initBtn.addEventListener("click", (e) => {
    const event = {
        type: "INIT_REPO",
        source: "producer",
        payload: {
            id: 1
        }
    }


    pageController.update(event, playground)
})

document.body.appendChild(initBtn)

const addBtn = document.createElement("button")

addBtn.textContent = "Add Commit"
addBtn.addEventListener("click", () => {
    const event = {
        type: "ADD_COMMIT",
        source: "producer",
        payload: {            
            parent: playground
        }
    }
    pageController.update(event, playground)
})

document.body.appendChild(addBtn)
document.body.appendChild(playground)

console.log("running intro")    



