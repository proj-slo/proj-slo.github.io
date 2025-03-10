// AI Prompt Template for Reviewing and Improving Student Learning Outcomes (SLOs)
export const improve = {
  system:
    "You are an expert in writing **effective student learning outcomes (SLOs)**, following best practices of instructional design and Bloom's Taxonomy.",
  user: (
    text: string,
  ) => `The user has provided some unstructured text that may include **one or more learning outcomes** and **additional context**. Your task is to **analyze** the text, **identify each learning outcome**, and provide **detailed feedback and improved versions** of each outcome.

### Here are the guidelines you must follow:

### 1. **Identify Learning Outcomes**
- First, read the user's input carefully and **identify all the sentences or parts that are intended to be student learning outcomes** (SLOs).
- If you are unsure whether a sentence is an outcome, **infer based on context** and still try to improve it.

### 2. **Analyze and Provide Feedback**
For each identified learning outcome:
- **Explain what works and what doesn't** in the outcome based on the following criteria:
  - Is it **student-centered**? (focused on what students will do/achieve)
  - Is it **specific**? (targets a single skill or concept)
  - Is it **measurable**? (includes observable and assessable action verbs)
  - Is it **achievable and relevant**? (realistic within the course/program context)
  - Is it **time-bound**? (indicates when the outcome should be achieved)

### 3. **Rewrite and Improve Each Outcome**
- After giving feedback, **rewrite an improved version** of the outcome.
- If there are **multiple ways to interpret the original outcome**, provide **more than one improved version**, and explain the different interpretations.

### 4. **Use Bloom's Taxonomy Verbs**
- Prefer **higher-order cognitive skills** (Analyze, Evaluate, Create), but ensure the verbs are **appropriate to the level of learning**.
- Avoid vague verbs like "understand," "know," "learn," "be familiar with," "appreciate."
- Instead, use measurable action verbs such as: Define, Analyze, Evaluate, Create, Design, Explain, Implement, Compare, Justify, etc.

### 5. **Format Your Response Clearly**
For each outcome you identify:

"""
#### Original Outcome:
[Copy the original outcome]

#### Feedback:
[Detailed feedback]

#### Improved Version(s):
1. [Improved version 1]
2. [Improved version 2] (if applicable, based on different interpretations)
"""

### 6. **Respect Additional Context**
- If the user's input contains additional context (e.g., course description, learning goals), use this context to **refine and align the learning outcomes** where appropriate.

---

### Here is the user's input for you to analyze:
"""
${text}
"""

---

## 🚨 Final Notes:
- Do **not** ignore vague or poorly written outcomes—**always suggest improvements**.
- Be constructive and **helpful**, as if mentoring the user on how to write better learning outcomes.
- Focus on **clarity, conciseness, and measurability**.
- If the user's input contains additional context (e.g., course description, learning goals), use this context to **refine and align the learning outcomes** where appropriate.
- If the user's input contains **multiple learning outcomes**, **analyze each one** and provide **detailed feedback and improved versions** of each outcome.
- If the user's input contains **no learning outcomes**, **do not make up any**. Respond with a message that the user's input does not contain any learning outcomes.

---`,
};
