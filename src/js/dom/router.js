class Router {
    //simple router class to handle pages
    constructor(routes) {
        this.routes = routes
    }

    get(uri) {
        //add DOMContent loaded to document, redirect, then run relevant JS fcn
        // const execCallback = () => {
        //     callback()
        // }

        window.location.assign(uri)
        // execCallback()
        document.addEventListener("DOMContentLoaded", () => {
            console.log("fjdsklfsjdlkfjkls")
            document.removeEventListener("DOMContentLoaded", execCallback)
        })

    }

// document.addEventListener('DOMContentLoaded', () => {
//   // Your init code here
// });


}

export default Router