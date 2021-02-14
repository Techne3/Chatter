import React from "react";
import { ChatEngine } from "react-chat-engine";

import "./App.css";
import ChatFeed from "./components/ChatFeed";

function App() {
  return (
    <div>
      <ChatEngine
        height="100vh"
        projectID="35435e33-b921-4d19-8f17-f478d55a201b"
        userName="Tim"
        userSecret="123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
