# FlashTalk - Temporary Chats, Complete Privacy

A real-time chat application built using **Node.js** (WebSocket) for the backend and **React.js** with **Tailwind CSS** for the frontend. This app allows users to communicate instantly in a simple and responsive interface.

## 🚀 Features

* **Real-Time Messaging**: Chat with multiple users instantly using WebSockets.
* **Responsive UI**: Built with Tailwind CSS for a clean and mobile-friendly design.
* **Lightweight**: Simple frontend and backend with minimal dependencies.

## 🛠️ Tech Stack

* **Backend:** Node.js, WebSocket, TypeScript
* **Frontend:** React.js, Tailwind CSS, TypeScript, Vite

## 📦 Installation

### Prerequisites

* Node.js (v14 or higher)
* npm (v6 or higher)

### Steps

1. Clone the repository:

```bash
git clone https://github.com/SaiVardhanNP/ChatApplication.git
cd ChatApplication
```

2. Install backend dependencies and start the server:

```bash
cd backend
npm install
npm run build   # if you want to compile TypeScript to JS
node dist/index.js  # or ts-node src/index.ts for direct TS execution
```

3. Install frontend dependencies and start the React app:

```bash
cd ../frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173` (Vite default) and connect to the backend WebSocket server.

## 🧩 Folder Structure

```
ChatApplication/
├── backend/        # Node.js WebSocket server (TypeScript)
│   ├── src/
│   │   └── index.ts
│   ├── dist/       # Compiled JavaScript files
│   │   └── index.js
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
└── frontend/       # React + Tailwind frontend (Vite + TS)
    ├── src/
    ├── public/
    ├── node_modules/
    ├── package.json
    ├── package-lock.json
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    └── index.html
```

## 📄 License

This project is licensed under the MIT License.
