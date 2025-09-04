import { WebSocketServer } from "ws";
const ws = new WebSocketServer({ port: 5000 });
ws.on('connection', (socket) => {
    console.log("Connected");
    socket.send("Hello from websocket!");
    socket.on('message', (e) => {
        if (e.toString() === "PING")
            socket.send("PONG");
    });
    socket.on('disconnect', (message) => {
        socket.send("Disconnected!");
    });
});
