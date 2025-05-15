import CommitView from "./dom/commit_view"
import Formatter from "./formatter"
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

         if (response.type == "ADD_COMMIT") {
            const payload = {
                commit: event.payload.commit
            }
            toSend.payload = payload
            
        }       

        const response = await this.broker.signal(toSend)

        if (response.type === "INIT_REPO") {
            const newRepo = RepoView()
            this.map[response.payload.id] = newRepo 
            newRepo.render(parent)
            this.repo = newRepo
        }

        if (response.type === "ADD_COMMIT") {
            //assume there's only 1 repo
            const branch = this.map[response.payload.branchId]
            const currRepo = this.map[response.payload.repo]
            const newCommit = currRepo.addCommit(response, branch) 
            this.map[response.id] = newCommit
            
        }


        //TODO if the resposne is OK, make views, add to dom


   } 


}

export default PageController