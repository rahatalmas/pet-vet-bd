import React, { useState, useEffect } from 'react';

function Chat() {
  const [ws, setWs] = useState(null);
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');
  const [receiver, setReceiver] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    // Connect to the WebSocket server
    const socket = new WebSocket('ws://localhost:8081');

    socket.onopen = () => {
      console.log('Connected to WebSocket server');
      setWs(socket);
    };

    socket.onmessage = (event) => {
      console.log('Message from server:', event.data);
      setResponse(event.data); // Show server response
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    socket.onclose = () => {
      console.log('Disconnected from WebSocket server');
    };

    // Cleanup on unmount
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);
  const test = () =>{
    const socket = new WebSocket('ws://localhost:8081');

socket.onopen = () => {
  console.log('Connected to WebSocket server');
  setWs(socket);
  
};
socket.onerror = (error) => {
          console.error('WebSocket error:', error);
        };
}
  const handleStoreUser = () => {
    if (ws && user) {
      const message = JSON.stringify({
        type: 'store',
        user: user,
      });
      ws.send(message);
    }
  };

  const handleSendMessage = () => {
    if (ws && receiver && message) {
      const messageToSend = JSON.stringify({
        type: 'txt',
        sender: user,
        receiver: receiver,
        message: message,
      });
      ws.send(messageToSend);
    }
  };

  const containerStyle = {
    width: '100%',
    maxWidth: '600px',
    margin: '100px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    textAlign: 'center',
    color: '#007bff',
    marginBottom: '20px',
  };

  const inputGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    marginTop: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const responseStyle = {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '4px',
    border: '1px solid #ccc',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>WebSocket Chat</h1>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Your User:</label>
        <input
          style={inputStyle}
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Enter your username"
        />
        <button
          style={buttonStyle}
          onClick={handleStoreUser}
        >
          Store User
        </button>
      </div>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Message:</label>
        <input
          style={inputStyle}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
        />
      </div>
      <div style={inputGroupStyle}>
        <label style={labelStyle}>Receiver:</label>
        <input
          style={inputStyle}
          type="text"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          placeholder="Enter receiver's username"
        />
        <button
          style={buttonStyle}
          onClick={handleSendMessage}
        >
          Send Message
        </button>
      </div>
      <div style={responseStyle}>
        <h2>Response:</h2>
        <p>{response}</p>
      </div>
    
    </div>
  );
}

export default Chat;
