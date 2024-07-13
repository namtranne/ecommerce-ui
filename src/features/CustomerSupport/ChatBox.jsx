import { Button } from "@mantine/core";
import { MessageList, Input } from "react-chat-elements";

export default function ChatBox() {
  return (
    <div className="h-full py-4">
      <div className="h-full flex flex-col bg-slate-400">
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
            rightButtons=<Button>Send</Button>
          />{" "}
        </div>
      </div>
    </div>
  );
}
