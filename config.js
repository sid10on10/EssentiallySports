let endpoint = {
    "dev": "https://cautious-tuna-loafers.cyclic.app",
    "local": "http://localhost:8000",
    "current": "dev"
}

let routes = {
    "feed": {
        "get": "/cors"
    }
}

export { endpoint, routes }