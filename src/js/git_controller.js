import Repo from "./git/repo.js"
//interfaces with the broker to signal/update the backend
class GitController {
    constructor(broker) {
        this.broker = broker
        this.map = {}
    }

    async update(event) {
        // const response = await this.broker.signal(event)

        console.log("update backend")
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

            this.repo = new Repo({})
        }

        if (event.type === "ADD_COMMIT") {
            const newCommit = this.repo.addCommit()

            const branch = this.repo.branches.filter(branch => branch.contains(newCommit))[0]

            this.map[`commit${newCommit.id}`] = newCommit
            payload = {
                "commit_id": newCommit.commitId,
                "branch_name": branch.name
            }
        }
        console.log("signal backend")
        toSend["payload"] = payload
        return toSend
    }
}

export default GitController