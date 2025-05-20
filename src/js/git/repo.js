import Commit from "./commit.js"
import Branch from "./branch.js"
class Repo {
   /**
    * Initializes a backend repo obj
    * @param {Object} options object of parameters for intializing repo, check src for more
    */
   constructor(options) {
      //head is a node, and branches is branches 
      if (this.head && this.branches) {
         this.head = options.head
         this.branches = options.branches
      }

      //provided a list of commits
      if (options.commits) {
         this.head = options.commits[options.commits.length - 1]
         this.branches = [new Branch(null, options.commits, "main")]
      }

      //provide nothing/invalid options
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