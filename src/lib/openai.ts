import OpenAI from "openai";
import { $api_key } from "@/store/settings";

export const openai = new OpenAI({
  apiKey: $api_key.get(),
  dangerouslyAllowBrowser: true,
});

// Update the API key when it changes
$api_key.subscribe((key) => {
  openai.apiKey = key as string;
});
