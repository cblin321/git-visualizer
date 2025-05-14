class Branch{
    //stores the parent commit  & commits for this branch 
    constructor(parent, commits, name) {
        this.parent = parent
        this.commits = commits
        this.name = name
    }
        
}

export default Branch