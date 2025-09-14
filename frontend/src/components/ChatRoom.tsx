import { useEffect, useState, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";

interface Message {
  sender: string;
  message: string;
}

const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

const ChatRoom = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const location = useLocation();
  const name = (location.state as any)?.name || "Anonymous";

  const [ws, setWs] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const socket = new WebSocket("https://flashtalk-production.up.railway.app/");
    setWs(socket);

    socket.onopen = () => {
      socket.send(
        JSON.stringify({ type: "join", payload: { roomId, name } })
      );
    };

    socket.onmessage = (event) => {
      const parsed = JSON.parse(event.data);
      setMessages((prev) => [...prev, parsed]);
    };

    socket.onclose = () => console.log("Disconnected from server");

    return () => {
      socket.close();
    };
  }, [roomId, name]);

  const handleSend = () => {
    if (ws && input.trim()) {
      ws.send(JSON.stringify({ type: "chat", payload: { message: input } }));
      setInput("");
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="min-h-screen w-full  bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative flex flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 -left-10 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 p-6 border-b border-white/10">
        <h1 className="text-3xl font-bold text-center">
          Room: <span className="text-purple-400">{roomId}</span>
        </h1>
        <p className="text-gray-400 text-center mt-1">You are: {name}</p>
      </div>

      {/* Chat Window */}
      <div className="relative z-10 flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-4">
        {messages.map((msg, idx) => {
          const isMe = msg.sender === name;
          return (
            <div
              key={idx}
              className={`flex items-end ${
                isMe ? "justify-end" : "justify-start"
              }`}
            >
              {!isMe && (
                <div className="w-10 h-10 rounded-full bg-purple-600/70 flex items-center justify-center text-white font-bold mr-2 flex-shrink-0">
                  {getInitials(msg.sender)}
                </div>
              )}
              <div
                className={`max-w-xs md:max-w-md p-3 rounded-xl ${
                  isMe
                    ? "bg-purple-600/50 text-white rounded-br-none"
                    : "bg-white/10 text-gray-200 rounded-bl-none"
                }`}
              >
                {msg.message}
              </div>
              {isMe && (
                <div className="w-10 h-10 rounded-full bg-purple-600/70 flex items-center justify-center text-white font-bold ml-2 flex-shrink-0">
                  {getInitials(msg.sender)}
                </div>
              )}
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="relative z-10 p-6 border-t border-white/10 flex items-center gap-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="flex-1 px-4 py-3 rounded-2xl bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
        <button
          onClick={handleSend}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
