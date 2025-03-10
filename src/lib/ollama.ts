import { Ollama } from "ollama/browser";
import { $host_url } from "@/store/settings";

export let ollama = new Ollama({ host: $host_url.get() });

// Update the host URL when it changes
$host_url.subscribe((url) => {
  if (url) {
    ollama = new Ollama({ host: url });
  }
});
