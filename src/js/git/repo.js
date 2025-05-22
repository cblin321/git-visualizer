import Commit from "./commit.js"
import Branch from "./branch.js"
class Repo {
   /**
    * Initializes a backend repo obj
    * @param {Object} options object of parameters for intializing repo, check src for more
    */
   constructor(options) {
      //head is a node, and branches is branches 
      if (options.head && options.branches) {
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

   getHeadBranch() {
      return this.head ? this.branches.filter(branch => branch.contains(head)) : this.branches[0]
   }

     /**
      * 
      * @param {*} event should have nothing in the payload
      */
     addCommit() {
         const newCommit = new Commit()
         this.getHeadBranch().addCommit(newCommit)
         this.head = newCommit
         return newCommit
     }

}

export default Repo