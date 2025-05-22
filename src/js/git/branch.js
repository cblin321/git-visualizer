class Branch{
    //stores the parent commit  & commits for this branch 
    constructor(parent, commits, name) {
        this.parent = parent
        this.commits = commits
        this.name = name
    }

    contains(commit) {
        return this.commits.includes(commit)
    }

    addCommit(commit) {
        this.commits.push(commit)
    }
        
}

export default Branch