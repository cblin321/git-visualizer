import Repo from "./git/repo"
//interfaces with the broker to signal/update the backend
class GitController {
    constructor(broker) {
        this.broker = broker
    }

    async update(event) {
        const response = await this.broker.signal(event)

        //TODO make relevant updates
    }

    signal(event) {
        //recieve the event, make the changes, change repos, whatever appropriately
        const toSend = {
            type: event.type,
            source: "consumer",
        }

        if (event.type === "INIT_REPO") {
            const payload = {
                id: "repo"
            }

            this.repo = new Repo()
            toSend["payload"] = payload
        }
        return toSend
    }
}

export default GitController