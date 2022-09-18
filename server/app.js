const http = require("http")

const server_ip = "127.0.0.1"
const server_port = 5985


try {
    const PORT = process.env.PORT || server_port;
    const server = http.createServer((_req, res) => {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/plain")
        res.end("Hello, World")
    });


    server.listen(server_ip, PORT, () => {
        console.log(`Server is running on http://${server_ip}:${server_port}`)
    })

} catch (e) {
    console.log(e)
}

