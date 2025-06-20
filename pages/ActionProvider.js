class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleMessage = (message) => {
    const response = this.createChatBotMessage(`You said: "${message}"`);
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, response],
    }));
  };
}

export default ActionProvider;
