import React, { useEffect, useState } from 'react';

function Chat() {
    const [onlineList, setOnlineList] = useState([]);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [ws, setWs] = useState(null);

    useEffect(() => {
        // Initialize WebSocket connection
        const socket = new WebSocket('ws://localhost:3001');
        setWs(socket);

        socket.onopen = () => {
            console.log('WebSocket connected');
        };

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            if (data.addrs) {
                setOnlineList(data.addrs);
            } else if (data.message) {
                setMessages((prevMessages) => [...prevMessages, data.message]);
            }
        };

        socket.onclose = () => {
            console.log('WebSocket disconnected');
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        return () => {
            socket.close();
        };
    }, []);

    const sendMessage = () => {
        if (ws && inputMessage.trim()) {
            ws.send(inputMessage);
            setInputMessage('');
        }
    };

    return (
        <>
            <div>
                <h1>Online List:</h1>
                <ul>
                    {onlineList.map((addr, index) => (
                        <li key={index}>{addr}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h1>Send Message</h1>
                <input 
                    value={inputMessage} 
                    onChange={(e) => setInputMessage(e.target.value)} 
                    placeholder="Enter your message" 
                />
                <button onClick={sendMessage}>Send</button>
            </div>
            <div>
                <h1>Public Messages</h1>
                <ul>
                    {messages.map((msg, index) => (
                        <li key={index}>{msg}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Chat;
