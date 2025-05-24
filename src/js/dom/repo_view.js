import CommitView from "./commit_view.js"
class RepoView {
    constructor(branches, head) {
        this.branches = branches
        this.head = head
    }

    addCommit(event, branch) {
        //find relevant branch, add commit
        
        const newCommit = new CommitView(event.payload.name, event.payload.id, true)

        branch.addCommit(newCommit)

        if (this.head)
            this.head.toggleHead()
        this.head = newCommit
        
        return newCommit
    }
    
    render(parent) {
        console.log("render repo")
        this.branches.forEach(element => {
           element.render(parent) 
        });
    }


}

export default RepoView