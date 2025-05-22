import CommitView from "./dom/commit_view.js"
import Formatter from "./formatter.js"
import RepoView from "./dom/repo_view.js"
import BranchView from "./dom/branch_view.js"
//class to recieve events from the dom & emit events to the broker  
//dom is updated by signals backend which gives info to update dom
class PageController {

    //how does the PC know ab what to update in the dom?

    constructor(broker, map) {
        this.broker = broker
        this.map = map
    }

    updateMap(id, view) {
        this.map.view = id
    }

   //will return the update from the backend
   async update(event, parent) {

        //TODO make appropriate updates on dom 
        const toSend = {
            type: event.type,
            source: "producer",
        }

         if (event.type == "ADD_COMMIT") {
            const payload = {
                commit: event.payload.commit
            }
            toSend.payload = payload
            
        }       

        // const response = await this.broker.signal(toSend)
        let response = this.broker.signal(toSend)
        response = response[0]

        if (response.type === "INIT_REPO") {
            const mainBranch = new BranchView([], "main")
            this.map[`branch-${mainBranch.name}`] = mainBranch
            const newRepo = new RepoView([mainBranch], null)
            // this.map[response.payload.id] = newRepo 
            newRepo.render(parent)
            this.repo = newRepo
        }

        if (response.type === "ADD_COMMIT") {
            //assume there's only 1 repo
            const branch = this.map[`branch-${response.payload.branch_name}`]
            const newCommit = this.repo.addCommit(response, branch) 
            this.map[`commit-${response.payload["commit_id"]}`] = newCommit
            //console.log(this.map)
            newCommit.render(parent)
        }


        //TODO if the resposne is OK, make views, add to dom


   } 


}

export default PageController