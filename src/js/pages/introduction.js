import Commit from "../git/commit"
import PageController from "../page_controller";
import Repo from "../git/repo"
import { Broker } from "../..";
import PageController from "../page_controller";
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
            
        })
    })


    //TODO have a button on the page that updates the PC

    

    

}