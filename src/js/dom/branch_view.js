class BranchView {
    constructor(commits, id, name) {
        this.commits = branches
        this.id = id
        this.name = name
    }

    addCommit(commit) {
        this.commits.push(commit)

        return commit
    }

    render(parent) {
        this.commits.array.forEach(element => {
           element.render(parent) 
        });
    }
}

export default BranchView