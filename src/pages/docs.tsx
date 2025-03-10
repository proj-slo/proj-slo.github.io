import Markdown from "@/components/markdown";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const docs = `
# Writing Effective Learning Outcomes

Student Learning Outcomes (SLOs) are statements that specify what students should know and be able to do after completing a course or program.

## Purpose

- SLOs clarify expectations, learning goals, and assessment methods for students.
- SLOs guide instructors in aligning course design, assessments, and activities with learning objectives.
- SLOs enable programs to map learning goals across courses and identify curriculum gaps or overlaps.
- SLOs allow institutions to measure program effectiveness and make evidence-based improvements to student learning.
- SLOs help accrediting bodies assess program quality and educational standards.

## Tips for Effective Outcomes

Focus on describing students' demonstrable knowledge, skills, and abilities—not just topics or content that instructors will cover.

- Make it **specific**—target a single skill or concept
    - Write clear, concise, and brief statements
- Make it **measurable**—use *action verbs* that you can observe and assess
    - Avoid vague terms like "understand," "know," "learn," or "appreciate"
- Make it **achievable**—consider available time and resources
    - Account for students' abilities, developmental levels, and existing skills
- Make it **relevant**—align with course/program goals
    - Match your assessment methods and teaching strategies
- Make it **time-bound**—include specific completion timeframes

Emphasize higher-order cognitive skills like analysis and evaluation, since these naturally incorporate lower-order skills such as remembering and understanding.

## Formula

> By the end of this [course/unit/workshop/lecture], [students/participants/learners] will be able to [observable action verb] [specific knowledge/skill/attitude/abilities].

When the context is clear, start directly with the action verb instead of using the full introductory phrase "By the end of this [course/unit], students will be able to."

## Tools

Bloom's Taxonomy helps educators write SLOs by providing action verbs that describe different levels of cognitive thinking.

## Bloom's Taxonomy

### 1. Remember
*Retrieving relevant knowledge from long-term memory*
- **Verbs**: Define, List, Recall, Identify, Name, Recognize
- **Example**: *Recall the five stages of the design thinking process.*

### 2. Understand
*Constructing meaning from instructional messages*
- **Verbs**: Explain, Summarize, Paraphrase, Interpret, Classify
- **Example**: *Explain the relationship between supply and demand.*

### 3. Apply
*Using procedures in given situations*
- **Verbs**: Implement, Execute, Use, Demonstrate, Solve
- **Example**: *Apply statistical methods to analyze research data.*

### 4. Analyze
*Breaking material into constituent parts and determining relationships*
- **Verbs**: Differentiate, Organize, Compare, Contrast, Examine
- **Example**: *Analyze how cultural factors influence communication styles.*

### 5. Evaluate
*Making judgments based on criteria and standards*
- **Verbs**: Assess, Critique, Judge, Justify, Defend
- **Example**: *Evaluate the credibility of online information sources.*

### 6. Create
*Putting elements together to form a coherent or functional whole*
- **Verbs**: Design, Develop, Formulate, Generate, Produce
- **Example**: *Design an original research project addressing a real-world problem.*

`;

const Docs = () => {
  return (
    <ScrollArea className="h-full overflow-y-auto">
      <div className="max-w-xl mx-auto m-4 py-12 p-6">
        <Markdown content={docs} />
      </div>
    </ScrollArea>
  );
};

export default Docs;
