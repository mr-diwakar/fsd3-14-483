import http from "http";

const server = http.createServer((req, res) => {

    if (req.url == "/" && req.method == "GET")
        res.end("home page");

    else if (req.url == "/product" && req.method == "GET")
        res.end("show product");

    else if (req.url == "/product" && req.method == "POST")
        res.end("add product");

    else if (req.url == "/product" && req.method == "PUT")
        res.end("update product");

    else if (req.url == "/product" && req.method == "DELETE")
        res.end("Delete product");

    else
        res.end("Page not found");
});

server.listen(3001, () => console.log("prg11 is running at 3001..."));