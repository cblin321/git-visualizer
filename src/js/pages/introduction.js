import Commit from "../git/commit.js"
import PageController from "../page_controller.js";
import Repo from "../git/repo.js"
import Broker from "../broker.js";
//TODO brief git intro, intro to commits

const WebBroker = new Broker()
    let commitId = 1;
    const pageController = new PageController(WebBroker)

    const playground = document.createElement("div")

    const addBtn = document.createElement("button")
    addBtn.text = "Add Commit"


    addBtn.addEventListener("click", () => {
        const event = {
            type: "INIT_REPO",
            source: "producer",
            payload: {
                id: 1
            }
        }
        pageController.update(event, parent).then(() => {
           //TODO error handling 
        })
    })

    document.body.appendChild(addBtn)

console.log("running intro")    

    

