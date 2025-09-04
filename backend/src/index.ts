import { WebSocketServer, WebSocket } from "ws";

const ws = new WebSocketServer({ port: 5000 });

interface User {
  socket: WebSocket;
  room: string;
  name: string;
}

let allSockets: User[] = [];

ws.on("connection", (socket) => {
  socket.on("message", (message) => {
    const parsedMessage = JSON.parse(message as unknown as string);
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
