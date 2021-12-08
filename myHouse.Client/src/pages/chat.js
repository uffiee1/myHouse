import React, { Component } from 'react';

import { HubConnection } from '@aspnet/signalr-client';

class chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nick: '',
      message: '',
      messages: [],
      hubConnection: null,
    };
  }

  componentDidMount = () => {
    const nick = window.prompt('Your name:', 'John');

    const hubConnection = new HubConnection('http://localhost:5000/chat');

    this.setState({ hubConnection, nick }, () => {
      this.state.hubConnection
        .start()
        .then(() => console.log('Connection started!'))
        .catch(err => console.log('Error while establishing connection :('));

      this.state.hubConnection.on('sendToAll', (nick, receivedMessage) => {
        const text = `${nick}: ${receivedMessage}`;
        const messages = this.state.messages.concat([text]);
        this.setState({ messages });
      });
    });
  };

  sendMessage = () => {
    this.state.hubConnection
      .invoke('sendToAll', this.state.nick, this.state.message)
      .catch(err => console.error(err));

    this.setState({ message: '' });
  };

  render() {
    return (
      <div>
        <br />
        <input
          type="text"
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />

        <button onClick={this.sendMessage}>Send</button>

        <div>
          {this.state.messages.map((message, index) => (
            <span style={{ display: 'block' }} key={index}> {message} </span>
          ))}
        </div>
      </div>
    );
  }
}

export default chat;




// import * as signalR from "@microsoft/signalr";

// import React, { useEffect, useState } from "react";

// function chat() {
//   const hubConnection = new signalR.HubConnectionBuilder()
//     .withUrl("/message")
//     .build();

//   hubConnection.start();

//   var list = [];

//   interface MessageProps {
//     HubConnection: signalR.HubConnection;
//   }

//   const Messages = (messageProps) => {
//     const [date, setDate] =
//       useState <
//       Date >
//       useEffect(() => {
//         messageProps.HubConnection.on("sendToReact", (message) => {
//           list.push(message);
//           setDate(new Date());
//         });
//       }, []);

//     return (
//       <>
//         {list.map((message, index) => (
//           <p key={`message${index}`}>{message}</p>
//         ))}
//       </>
//     );
//   };

//   const SendMessage = () => {
//     const [message, setMessage] = useState("");

//     const messageChange = (event) => {
//       if (event && event.target) {
//         setMessage(event.target.value);
//       }
//     };

//     const messageSubmit = (event) => {
//       if (event) {
//         fetch("/api/message", {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             message: message,
//           }),
//         });

//         setMessage("");
//       }
//     };

//     return (
//       <>
//         <label>Enter your Message</label>
//         <input type="text" onChange={messageChange} value={message} />
//         <button onClick={messageSubmit}>Add Message</button>
//       </>
//     );
//   };

//   return (
//     <>
//       <SendMessage />
//       <Messages HubConnection={hubConnection}></Messages>
//     </>
//   );
// }

// export default chat;
