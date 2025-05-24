class BranchView {
    constructor(commits, name) {
        this.commits = commits
        // this.id = id
        this.name = name
        this.element = document.createElement("div")
    }

    addCommit(commit) {
        this.commits.push(commit)
        commit.render(this.element)
        return commit
    }

    render(parent) {
        this.commits.forEach(element => {
           element.render(this.element) 
        });
        parent.appendChild(this.element)
    }
}

export default BranchView