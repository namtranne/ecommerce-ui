import { Button } from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { MessageList, Input } from "react-chat-elements";
import SocketClient from "../../socket/SocketClient";
import SocketClientContext from "../../context/SocketClientContext";

export default function ChatBox() {
  const { client } = useContext(SocketClientContext);
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    try {
      client.publish({
        destination: `/app/chat/sendMessage/admin`,
        body: message,
      });
    } catch (e) {
      console.log(e);
    }
    setMessage("");
  };

  return (
    <div className="h-full py-4 ">
      <div className="h-full w-full flex flex-col bg-slate-400">
        <MessageList
          className="message-list flex-1 w-full"
          lockable={true}
          toBottomHeight={"100%"}
          dataSource={[
            {
              position: "left",
              type: "text",
              title: "Kursat",
              text: "Give me a message list example !Give me a message list example !Give me a message list example !",
              status: "sent",
              className: "max-w-[200px]",
            },
            {
              position: "right",
              type: "text",
              status: "read",
              title: "Emre",
              text: "That's all.",
            },
          ]}
        />
        <div className="flex p-2">
          <Input
            placeholder="Type here..."
            multiline={true}
            rightButtons=<Button onClick={() => handleSendMessage()}>
              Send
            </Button>
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />{" "}
        </div>
      </div>
    </div>
  );
}
