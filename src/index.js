//commits, brnaches, merge (merge conflicts), rebase, remotes
import Router from "./js/dom/router"
import Broker from "./js/broker"

const Broker = new Broker()

const routes = ["src/examples/introduction.html"]

const callbacks = []

const Router = Router(routes)

const navbar = document.createElement("nav")

const body = document.createElement("div")

const start = document.createElement("button")
start.textContent = "Get Started"
body.appendChild(start)

document.body.appendChild(navbar)
document.body.appendChild(body)
