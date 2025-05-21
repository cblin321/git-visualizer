//commits, brnaches, merge (merge conflicts), rebase, remotes
import Router from "./js/dom/router.js"
import Broker from "./js/broker.js"
// import loadIntroPage from "./js/pages/introduction.js"

console.log("hi")

const WebBroker = new Broker()

// const routes = ["src/examples/introduction.html"]
 const routes = ["examples/introduction.html"]

const callbacks = []

const PageRouter = new Router(routes)

const navbar = document.createElement("nav")

const body = document.createElement("div")

const start = document.createElement("button")
start.addEventListener("click", () => {
    // PageRouter.get("examples/introduction.html", loadIntroPage)
    PageRouter.get("examples/introduction.html")
})
start.textContent = "Get Started"
body.appendChild(start)

document.body.appendChild(navbar)
document.body.appendChild(body)

export {WebBroker}