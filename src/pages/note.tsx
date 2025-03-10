import { LearningOutcomeEditor } from "@/components/learning-outcome-editor";
import { GraduationCap } from "lucide-react";

const Note = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">
            Learning Outcomes Writer
          </h1>
        </div>

        <div className="space-y-4">
          <div className="prose prose-neutral dark:prose-invert">
            <p className="text-lg text-muted-foreground">
              Write effective learning outcomes using Bloom's Taxonomy verbs.
              Start with "Students will be able to..." and use the command
              palette to select appropriate action verbs.
            </p>
          </div>

          <LearningOutcomeEditor />
        </div>
      </div>
    </div>
  );
};

export default Note;
