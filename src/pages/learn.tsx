import Markdown from "@/components/markdown";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const docs = `
## Writing Effective Learning Outcomes

Student Learning Outcomes (SLOs) are statements that specify what students should know and be able to do after completing a lesson, unit, course, or program.

### Purpose

- SLOs provide students with clear expectations about what they should learn and help them track their own academic progress.
- SLOs guide instructors in aligning course design, assessments, and activities with learning objectives.
- SLOs enable programs to map learning goals across courses and identify curriculum gaps or overlaps.
- SLOs allow institutions to measure program effectiveness and make evidence-based improvements to student learning.
- SLOs help accrediting bodies assess program quality and educational standards.

### Tips for Effective Outcomes

- Make it about **students**—focus on what they will know and be able to do
    - Think "students will be able to" instead of "the course will cover"
- Make it **specific**—target a single skill or concept
    - Write clear, concise, and brief statements
- Make it **measurable**—use *action verbs* that you can observe and assess
    - Avoid vague terms like "understand," "know," "learn," or "appreciate"
- Make it **achievable**—consider available time and resources
    - Account for students' abilities, developmental levels, and existing skills
- Make it **relevant**—align with course/program goals
    - Match your assessment methods and teaching strategies
- Make it **time-bound**—include specific completion timeframes
    - Indicate when students should achieve the outcome: "By the end of the course..."

### Formula

\`\`\`plaintext
By the end of this [course/lecture/etc.], 
+ [students/participants/etc.] will be able to 
+ [observable action verb] 
+ [specific knowledge/skill/attitude/abilities/etc.].
\`\`\`
When the context is clear, start directly with the action verb instead of using the full introductory phrase \`By the end of this [...], [...] will be able to\`

### Tools

Bloom's Taxonomy helps educators write SLOs by providing action verbs that describe different levels of cognitive thinking.

Emphasize higher-order cognitive skills like analysis and evaluation, since these naturally incorporate lower-order skills such as remembering and understanding.

### Bloom's Taxonomy

Bloom's Taxonomy divides the way people learn into three domains. One of these is the cognitive domain, which emphasizes intellectual skills and abilities. This domain further divides into six categories that are arranged progressively from lower to higher levels of cognitive skills.

#### 1. Remembering

Exhibit knowledge of previously learned material by recalling facts, definitions, basic concepts, and other information.

- **Verbs**: Define, List, Recall, Identify, Name, Recognize
- **Example**: *Recall the five stages of the design thinking process.*

#### 2. Understanding

Demonstrate understanding of concepts, principles, and ideas by explaining them in your own words, summarizing, paraphrasing, or interpreting them.

- **Verbs**: Explain, Summarize, Paraphrase, Interpret, Classify
- **Example**: *Explain the relationship between supply and demand.*

#### 3. Applying

Solve problems or complete tasks by applying previously acquired knowledge and skills to new situations.

- **Verbs**: Implement, Execute, Use, Demonstrate, Solve
- **Example**: *Apply statistical methods to analyze research data.*

#### 4. Analyzing

Examine and break down complex ideas or concepts into their constituent parts and determine relationships between them. Make inferences and draw conclusions based on evidence and reasoning.

- **Verbs**: Differentiate, Organize, Compare, Contrast, Examine
- **Example**: *Analyze how cultural factors influence communication styles.*

#### 5. Evaluating

Make assessments of the quality of work or judge validity of ideas based on a set of criteria and present evidence to justify and support your evaluation.

- **Verbs**: Assess, Critique, Judge, Justify, Defend
- **Example**: *Evaluate the credibility of online information sources.*

#### 6. Creating

Synthesize information from various sources to create new ideas, products, or solutions.

- **Verbs**: Design, Develop, Formulate, Generate, Produce
- **Example**: *Design an original research project addressing a real-world problem.*


`;

const Learn = () => {
  return (
    <ScrollArea className="h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto m-4 py-12 p-6">
        <Markdown content={docs} />
      </div>
    </ScrollArea>
  );
};

export default Learn;
