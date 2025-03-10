export enum Model {
  OPENAI = "openai",
  OLLAMA = "ollama",
}

export const ModelDescriptions: Record<Model, string> = {
  [Model.OPENAI]: "OpenAI - GPT-4o-mini",
  [Model.OLLAMA]: "Ollama - Llama 3.2",
};
