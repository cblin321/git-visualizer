class BranchView {
    constructor(commits, id, name) {
        this.commits = branches
        this.id = id
        this.name = name
    }

    render(parent) {
        this.commits.array.forEach(element => {
           element.render(parent) 
        });
    }
}

export default BranchView