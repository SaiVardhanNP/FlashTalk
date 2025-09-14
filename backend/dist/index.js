import { WebSocketServer, WebSocket } from "ws";
const PORT = parseInt(process.env.PORT || "5000", 10);
const ws = new WebSocketServer({ port: PORT });
let allSockets = [];
ws.on("connection", (socket) => {
    socket.on("message", (message) => {
        const parsedMessage = JSON.parse(message);
        if (parsedMessage.type === "join") {
            allSockets.push({
                socket,
                room: parsedMessage.payload.roomId,
                name: parsedMessage.payload.name,
            });
        }
        if (parsedMessage.type === "chat") {
            let currentRoom = null;
            let senderName = null;
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i]?.socket == socket) {
                    currentRoom = allSockets[i]?.room;
                    senderName = allSockets[i]?.name;
                }
            }
            for (let i = 0; i < allSockets.length; i++) {
                if (allSockets[i]?.room == currentRoom) {
                    allSockets[i]?.socket.send(JSON.stringify({
                        message: parsedMessage.payload.message,
                        sender: senderName
                    }));
                }
            }
        }
    });
    socket.on("close", () => {
        allSockets = allSockets.filter((x) => x.socket != socket);
    });
});
