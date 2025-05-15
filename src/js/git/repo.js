import Commit from "./commit"
import Branch from "./branch"
class Repo {
      /**
       * 
       * @param {*} branches 
       * @param {*} head expected to be an obj of format {"commit" : commit, "branch": branch}
       */
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

     /**
      * 
      * @param {*} event should have nothing in the payload
      */
     addCommit(event) {
         const newCommit = new Commit()
         this.head.branch.addCommit()
         this.head.commit = newCommit
         const payload = {
            "commit_id": newCommit.id,
            "branch_id": this.head.branch.id
         }
         return [newCommit, payload]
     }

}

export default Repo