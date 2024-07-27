import { Client } from "@stomp/stompjs";

class SocketClient {
  constructor(url, jwt) {
    this.url = url;
    this.jwt = jwt;
    this.client = new Client({
      brokerURL: url,
      connectHeaders: {
        Authorization: `Bearer ${jwt}`,
      },
      reconnectDelay: 5000,
      heartbeatIncoming: 10000,
      heartbeatOutgoing: 10000,
      onConnect: () => {
        console.log("Connected to WebSocket");
      },
      onDisconnect: () => {
        console.log("Disconnected from WebSocket");
      },
      onStompError: (frame) => {
        console.error("Broker reported error: " + frame.headers["message"]);
        console.error("Additional details: " + frame.body);
      },
    });
  }

  activate() {
    this.client.activate();
  }

  deactivate() {
    this.client.deactivate();
  }

  subscribe(destination, callback) {
    return this.client.subscribe(destination, (message) => {
      callback(message.body);
    });
  }

  publish(destination, body) {
    this.client.publish({ destination, body: JSON.stringify(body) });
  }
}

export default SocketClient;
