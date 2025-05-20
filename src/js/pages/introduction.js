import Commit from "../git/commit.js"
import PageController from "../page_controller.js";
import Repo from "../git/repo.js"
import {WebBroker} from "../../index.js";
//TODO brief git intro, intro to commits
function loadIntroPage() {

    let commitId = 1;
    const pageController = new PageController(Broker)

    const playground = document.createElement("div")

    const addBtn = document.createElement("button")

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



    

    

}

export default loadIntroPage