import Repo from "./git/repo"
//interfaces with the broker to signal/update the backend
class GitController {
    constructor(broker) {
        this.broker = broker
        this.map = {}
    }

    async update(event) {
        const response = await this.broker.signal(event)

        //TODO make relevant updates
    }

    /**
     * recieve the event, calls appropriate mutate data according to event
     * @param {Object} event 
     * @returns 
     */
    signal(event) {
        //
        const toSend = {
            type: event.type,
            source: "consumer",
        }

        let payload; 

        if (event.type === "INIT_REPO") {
            payload = {
                id: "repo"
            }

            this.repo = new Repo()
        }

        if (event.type === "ADD_COMMIT") {
            const [newCommit, commitPayload] = this.repo.addCommit(event)
            this.map.newCommit.id = newCommit
            
            payload = commitPayload 
        }

        toSend["payload"] = payload
        return toSend
    }
}

export default GitController