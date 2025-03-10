export type OpenAIStreamChunk = {
  choices: [{
    delta: {
      content?: string;
    };
  }];
};

export type OllamaStreamChunk = {
  message: {
    content: string;
  };
};