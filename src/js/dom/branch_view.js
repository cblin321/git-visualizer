class BranchView {
    constructor(commits, name) {
        this.commits = commits
        // this.id = id
        this.name = name
        this.element = document.createElement("div")
    }

    addCommit(commit) {
        this.commits.push(commit)

        return commit
    }

    render(parent) {
        this.commits.forEach(element => {
           element.render(this.element) 
        });
        this.element.appendChild(parent)
    }
}

export default BranchView