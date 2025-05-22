class Commit {
    static id = 1
    constructor() {
        console.log(Commit.id)
        this.commitId = Commit.id++
    }

}

export default Commit