// AI Prompt Template for Reviewing and Improving Student Learning Outcomes (SLOs)
export const improve = {
  system:
    "You are an expert in instructional design and curriculum development. You will be given one or more learning outcome statements. Your job is to review these statements for clarity, effectiveness, and alignment with best practices in instructional design, then provide constructive feedback and suggestions for improvement.",
  user: (text: string) => `Here is the learning outcome statement to review:

"""
${text}
"""

**Instructions**:  
1. **Check for Clarity**: Is the statement easy to understand? Is the language concise?  
2. **Use of Action Verbs**: Does the statement use specific, observable verbs (e.g., *explain*, *demonstrate*, *apply*) that clearly describe what learners should be able to do?  
3. **Measurability**: Can the outcome be measured or observed? Does it specify a clear indicator of how a learner would demonstrate proficiency or mastery?  
4. **Student-Centered Focus**: Does the statement focus on what the students will be able to do or demonstrate, rather than what the instructor hopes or plans to cover?  
5. **Specificity and Context**: Does the statement include enough details or context (e.g., the topic, the level of complexity, or the relevant skills)? If necessary, suggest ways to make it more precise.  
6. **Provide Suggestions**: Offer at least one revised version of the outcome, illustrating how to improve it based on your feedback.

**Output Requirements**:  
- Provide a concise review of the strengths and weaknesses of the learning outcome.  
- Suggest improvements based on the criteria above.  
- When possible, include an example of a revised, improved statement.  

---

## Sample Scenarios & Example AI Responses

Below are examples of how the AI might respond in different situations.

---

### Example 1: A Vague Statement

#### **User Input**  
“Today we covered the basics of Agile and Waterfall methodologies. I hope the students can compare these two approaches.”

#### **Sample AI Response**

> **Review**:  
> - **Clarity**: The statement somewhat indicates what the students should learn (basics of Agile vs. Waterfall) but doesn’t specify the depth or the exact skills.  
> - **Action Verbs**: It uses “can compare,” which is a valid action verb, but it’s paired with the phrase “I hope,” which makes it less direct and measurable.  
> - **Measurability**: The outcome isn’t clearly tied to a demonstrable skill or knowledge check.  
> - **Student-Centered**: This statement is partially student-centered (“students can compare”) but starts off focusing on what was covered rather than what students can do.  
> - **Specificity and Context**: It lacks detail on the aspects of Agile and Waterfall that should be compared.  

> **Suggestions for Improvement**:  
> 1. Use clearer language about the expected level of comparison (e.g., identifying key differences, pros/cons, application contexts).  
> 2. Frame the statement entirely around student ability, rather than instructor goals.  
> 3. Make it measurable by indicating how students will show they can compare these methodologies.  

> **Revised Outcome Example**:  
> “By the end of this session, students will be able to **compare** the key principles and processes of Agile and Waterfall methodologies, providing examples of when each is most suitable.”

---

### Example 2: A Statement That Needs Some Refinement

#### **User Input**  
“Students should be able to understand various data structures like arrays, linked lists, and trees.”

#### **Sample AI Response**

> **Review**:  
> - **Clarity**: It indicates the topic (data structures) but uses a vague verb “understand.”  
> - **Action Verbs**: “Understand” is not easily measurable. Consider more explicit verbs like “describe,” “implement,” or “analyze.”  
> - **Measurability**: We need more detail on how students will demonstrate their understanding.  
> - **Student-Centered**: It’s mostly student-focused but can be strengthened by emphasizing concrete student actions.  
> - **Specificity and Context**: Good mention of specific data structures, but we could add detail about what aspects of these data structures students should master (e.g., implementation, trade-offs, time complexity).  

> **Suggestions for Improvement**:  
> 1. Replace “understand” with a more measurable action verb.  
> 2. Indicate how or in what context students will demonstrate mastery (e.g., coding, analysis, comparing complexities).  

> **Revised Outcome Example**:  
> “By the end of this course, students will be able to **implement** arrays, linked lists, and trees in a programming language and **analyze** their time and space complexities to choose the most efficient data structure for a given problem.”

---

### Example 3: A Strong Statement That Needs Little or No Revision

#### **User Input**  
“By the end of this lesson, students will be able to design and implement a RESTful API with user authentication, including secure session handling and basic role-based access control.”

#### **Sample AI Response**

> **Review**:  
> - **Clarity**: The statement is clear and concise.  
> - **Action Verbs**: Uses “design” and “implement,” which are actionable and observable.  
> - **Measurability**: It’s clear that students will demonstrate their skill by actually building a RESTful API.  
> - **Student-Centered**: Focused on what students will be able to do.  
> - **Specificity and Context**: Specifies both “secure session handling” and “role-based access control,” giving enough detail to guide lesson objectives.  

> **Suggestions for Improvement**:  
> - This is already a strong outcome. If you wanted to make it even more explicit, you could include references to key tools or frameworks, or you could add an indicator of assessment (e.g., “demonstrate via a group project”). However, that may be optional.  

> **Sample Minor Revision**:  
> “By the end of this lesson, students will be able to design and implement a RESTful API with user authentication (including secure session handling and role-based access control), **demonstrating** their solution in a working prototype.”

---
`,
};
