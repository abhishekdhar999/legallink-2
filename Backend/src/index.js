import connectDB from "./db/db.js";
import { app } from "./app.js";
import dotenv from 'dotenv'
import  { WebSocketServer,WebSocket } from 'ws';
import path from 'path'
import Message from "../Model/message.model.js";
const port  =  3001;
dotenv.config();
connectDB();

   const server = app.listen(port,()=>{
            console.log("server is running on port",port)
        })
    
console.log("server",server);
const wsServer = new WebSocketServer({
     server:server
});

wsServer.on("connection", function connection(ws) {
    console.log("Connected to socket");

    // Send a message to the client when it connects
    ws.send("hello connected to ws server");

    // Handle message events from the client
    ws.on('message', async (data) => {
        // Step 1: Parse the incoming data
        const { chatId, sender, content } = JSON.parse(data);
      
        // Step 2: Save the message to the database
        const newMessage = new Message({ chatId, sender, content });
        await newMessage.save();
      
        // Step 3: Broadcast the message to all connected clients
        wsServer.clients.forEach(client => {
          if (client !== ws && client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify({ chatId, sender, content }));
          }
        });
      });

    // Handle errors (optional but useful)
    ws.on("error", (err) => {
        console.error("Socket error:", err);
    });
});