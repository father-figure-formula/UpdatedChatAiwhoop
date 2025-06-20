import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../botConfig';
import MessageParser from '../MessageParser';
import ActionProvider from '../ActionProvider';

export default function Home() {
  return (
    <div style={{ maxWidth: "600px", margin: "50px auto" }}>
      <h1>Whop AI Bot</h1>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}
