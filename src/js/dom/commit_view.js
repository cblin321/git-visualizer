class CommitView {
    constructor(name, id, head) {
        this.id = id
        this.isHead = head
        this.element = {}
        this.element.container = document.createElement("div")
        this.element.label = document.createElement("p")
        this.element.label.textContent = name

        this.element.container.appendChild(this.element.label)

        this.element.label.classList.add("commit-text")
        this.element.container.classList.add("commit-container")
    }

    toggleHead() {
        this.head = !this.isHead
    }

    render(parent) {
        parent.appendChild(this.element.container)
    }


}

export default CommitView