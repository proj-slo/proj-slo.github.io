import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGenerate } from "@/hooks/use-generate";
import { useOpenAI } from "@/hooks/use-openai";
import { OllamaStreamChunk } from "@/types/stream";
import { OpenAIStreamChunk } from "@/types/stream";
import { Model } from "@/types/models";
import { useOllama } from "@/hooks/use-ollama";
import { toast } from "sonner";
import { Task } from "@/types/tasks";
import Markdown from "@/components/markdown";
import { useState } from "react";
import { ClipboardCopy } from "lucide-react";

export default function GeneratePage() {
  const { generateData, updateGenerateData, clearGenerateData } = useGenerate();
  const { topic, context, instruction, result } = generateData;
  const { completion: openai_completion, loading: openai_loading } = useOpenAI(
    Task.GENERATE,
  );
  const { completion: ollama_completion, loading: ollama_loading } = useOllama(
    Task.GENERATE,
  );
  const [showCopyButton, setShowCopyButton] = useState(false);

  const processStreamResponse = async (
    stream: AsyncIterable<OpenAIStreamChunk | OllamaStreamChunk>,
    modelType: Model,
  ) => {
    updateGenerateData({ result: "" });
    let fulltext = "";
    for await (const chunk of stream) {
      const content =
        modelType === Model.OPENAI
          ? (chunk as OpenAIStreamChunk).choices[0]?.delta?.content
          : (chunk as OllamaStreamChunk).message.content;
      fulltext = fulltext + (content || "");
      updateGenerateData({
        result: fulltext,
      });
    }
  };

  const generate = async () => {
    const model = Model.OPENAI;
    const completion =
      model === Model.OPENAI ? openai_completion : ollama_completion;

    toast.promise(
      (async () => {
        const stream = await completion(
          generateData.topic,
          generateData.context,
          generateData.instruction,
        );
        // @ts-ignore
        await processStreamResponse(stream, model);
        return "Text generated successfully";
      })(),
      {
        loading: "Generating text...",
        success: (message) => message,
        error: (error) => error.message,
      },
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    toast.success("Copied to clipboard");
  };

  return (
    <ScrollArea className="h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto m-4 py-12 p-6">
        <h1 className="text-2xl font-bold mb-6">
          Generate Student Learning Outcomes
        </h1>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="topic">Topic (Required)</Label>
            <Input
              id="topic"
              placeholder="Enter a topic (e.g., Photosynthesis, JavaScript Conditional Statements)"
              value={topic}
              onChange={(e) => updateGenerateData({ topic: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="context">Context (Optional)</Label>
            <Textarea
              id="context"
              placeholder="Enter any context about your audience, course level, etc."
              value={context}
              onChange={(e) => updateGenerateData({ context: e.target.value })}
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="instruction">Instruction (Optional)</Label>
            <Textarea
              id="instruction"
              placeholder="Enter any specific instructions for generating the learning outcomes"
              value={instruction}
              onChange={(e) =>
                updateGenerateData({ instruction: e.target.value })
              }
              rows={4}
            />
          </div>

          <div className="flex gap-2">
            <Button
              onClick={generate}
              className="flex-1"
              disabled={openai_loading || ollama_loading || !topic.trim()}
            >
              Generate
            </Button>
            <Button onClick={clearGenerateData} variant="outline">
              Clear
            </Button>
          </div>

          {result && (
            <div
              className="mt-8 p-6 border rounded-lg relative"
              onMouseEnter={() => setShowCopyButton(true)}
              onMouseLeave={() => setShowCopyButton(false)}
            >
              {showCopyButton && (
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={copyToClipboard}
                  className="absolute top-2 right-2 h-8 w-8"
                  title="Copy to clipboard"
                >
                  <ClipboardCopy className="h-4 w-4" />
                </Button>
              )}
              <Markdown content={result} />
            </div>
          )}
        </div>
      </div>
    </ScrollArea>
  );
}
