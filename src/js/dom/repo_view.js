class RepoView {
    constructor(branches, head) {
        this.branches = branches
        this.head = head
    }

    addCommit(event) {

    }
    
    render(parent) {
        this.branches.array.forEach(element => {
           element.render(parent) 
        });
    }


}

export default RepoView