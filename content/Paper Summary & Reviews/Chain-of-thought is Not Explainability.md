---
title: Chain-of-thought is Not Explainability
draft: false
tags:
  -
---
##### Summary
CoT, or chain-of-thought prompting (the intermediate reasoning steps that an LLM generates when prompted to think step-by-step) have become increasingly popular as a measure to boost model performance and communicate reasoning steps to the end user. This paper challenges the widely accepted notion that CoT offers a transparent view into a model's reasoning process and can be relied on as an interpretability technique. 

The authors build a case that CoT is often unfaithful, (in that, its reasoning diverges from the model's actual decisions) leading to plausible but untrustworthy explanations. This faithfulness measure is evaluated on three properties: soundness, causal relevance, and completeness. They offer four lines of evidence for lack of such faithfulness (bias-driven rationalization, silent error correction, illogical shortcuts and filler tokens), and possible explanations for the cause of unfaithfulness. Using prior research in the field, they show empirical evidence that 1 in 4 CoT-centric papers (across high-stakes domains such as law, medicine, autonomous systems) treat CoT explicitly as an interpretability technique, and given the unfaithfulness problem, doing so can yield unwanted results, especially in high-stakes domains such as medicine and law. 

They recommend using more rigorous causal evaluations and hybrid approaches to further support CoT's role in interpretability. To that end, they propose  three general research directions to address this open problem, acknowledge limitations and alternative views, and drive home their main point that while CoT is still useful in boosting performance and as a proxy for model explanations in human-AI interactions, it should not be treated as a sole evidence for interpretability.
##### Strengths
- Important (and timely) position paper: The paper consolidates empirical evidence scattered across literature to establish CoT unfaithfulness as a systematic problem rather than isolated issues. To that end, it challenges the notion of CoT being widely accepted as an interpretability technique.
-  Robust methodology (for empirical survey of prior claims): The authors use an automated pipeline to analyze 1000 papers from 2024-04-30 to 2025-06-05, finding 25% treat CoT as an interpretability technique (38% in medicine, 63% in autonomous vehicles).  Their methodology combines automated classification (which is helpful for scaling) and manual validation (83% agreement).
- Evidence and claims backed by multiple models: They quote multiple papers and multiple model families (DeepSeek, GPT, Llama) for evidence of unfaithfulness and explanations for divergence, which makes a solid case for it not being a one-off thing. 
##### Weaknesses
##### Clarifying Questions
##### Concrete Suggestions

- Paper published in July 2025
- 
zero-shot CoT not addressed in the second paper








Another paper: Is Chain-of-Thought Really Not Explainability? Chain-of-Thought Can Be Faithful without Hint Verbalization
foundational 2022 paper: Third, there is no guarantee of correct reasoning paths, which can lead to both correct and incorrect answers; improving factual generations of language models is an open direction for future work
