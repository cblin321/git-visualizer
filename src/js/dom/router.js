class Router {
    //simple router class to handle pages
    constructor(routes) {
        this.routes = routes
    }

    get(uri, callback) {
        //add DOMContent loaded to document, redirect, then run relevant JS fcn
        const execCallback = () => {
            callback()
        }

        document.addEventListener("DOMContentLoaded", () => {
            execCallback()
            document.removeEventListener("DOMContentLoaded", execCallback)
        })

        window.location.assign(uri)
    }

// document.addEventListener('DOMContentLoaded', () => {
//   // Your init code here
// });


}

export default Router