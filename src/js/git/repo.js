import Commit from "./commit"
import Branch from "./branch"
class Repo {
     constructor(branches, head) {
        this.head = head
        this.branches = branches
     }

     constructor(commits) {
        this.head = commits[commits.length - 1]
        this.branches = [new Branch(null, commits, "main")]
     }
        
     constructor() {
        this.head = null
        this.branches = [new Branch(null, [], "main")]
     }
}

export default Repo