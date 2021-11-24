import * as signalR from "@microsoft/signalr";

import React, { useEffect, useState } from "react";

function chat() {
  const hubConnection = new signalR.HubConnectionBuilder()
    .withUrl("/message")
    .build();

  hubConnection.start();

  var list = [];

  interface MessageProps {
    HubConnection: signalR.HubConnection;
  }

  const Messages = (messageProps) => {
    const [date, setDate] =
      useState <
      Date >
      useEffect(() => {
        messageProps.HubConnection.on("sendToReact", (message) => {
          list.push(message);
          setDate(new Date());
        });
      }, []);

    return (
      <>
        {list.map((message, index) => (
          <p key={`message${index}`}>{message}</p>
        ))}
      </>
    );
  };

  const SendMessage = () => {
    const [message, setMessage] = useState("");

    const messageChange = (event) => {
      if (event && event.target) {
        setMessage(event.target.value);
      }
    };

    const messageSubmit = (event) => {
      if (event) {
        fetch("/api/message", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: message,
          }),
        });

        setMessage("");
      }
    };

    return (
      <>
        <label>Enter your Message</label>
        <input type="text" onChange={messageChange} value={message} />
        <button onClick={messageSubmit}>Add Message</button>
      </>
    );
  };

  return (
    <>
      <SendMessage />
      <Messages HubConnection={hubConnection}></Messages>
    </>
  );
}

export default chat;
