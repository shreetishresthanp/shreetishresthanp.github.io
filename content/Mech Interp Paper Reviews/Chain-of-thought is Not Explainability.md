---
title: Chain-of-thought is Not Explainability
draft: false
tags:
  - "#mech_interp"
  - "#papers"
---
#### Summary
CoT, or chain-of-thought prompting (the intermediate reasoning steps that an LLM generates when prompted to think step-by-step) has become increasingly popular as a measure to boost model performance and communicate reasoning steps to the end user. This paper challenges the widely accepted notion that CoT offers a transparent view into a model's reasoning process and can be relied on as an interpretability technique. 

The authors build a case that CoT is often unfaithful (its reasoning diverges from the model's actual decisions), leading to plausible but untrustworthy explanations. This faithfulness measure is evaluated on three properties: soundness, causal relevance, and completeness. They offer four lines of evidence for lack of such faithfulness (bias-driven rationalization, silent error correction, illogical shortcuts and filler tokens), and possible explanations for the cause of unfaithfulness. Using prior research in the field, they show empirical evidence that 1 in 4 CoT-centric papers (across high-stakes domains such as law, medicine, autonomous systems) treat CoT explicitly as an interpretability technique, and given the unfaithfulness problem, doing so can yield unwanted results, especially in high-stakes domains. 

They recommend using more rigorous causal evaluations and hybrid approaches to further support CoT's role in interpretability. To that end, they propose  three general research directions to address this open problem, acknowledge limitations and alternative views, and drive home their main point that while CoT is still useful in boosting performance and as a proxy for model explanations in human-AI interactions, it should not be treated as a sole evidence for interpretability.

#### Strengths
1. Important (and timely) position paper: The paper consolidates empirical evidence scattered across literature to establish CoT unfaithfulness as a systematic problem rather than isolated issues. This justifies the motivation for their position and to that end, they challenge the notion of CoT being widely accepted as an interpretability technique.
2. Robust methodology (for empirical misuse): The authors use an automated pipeline to analyze 1000 papers from 2024-04-30 to 2025-06-05, finding 25% treat CoT as an interpretability technique (38% in medicine, 63% in autonomous vehicles). Their methodology combines automated classification (which is helpful for scaling) and manual validation (83% agreement).
3. Goes beyond "what's wrong" to "why it's wrong": The authors explore a fundamental problem (distributed computation vs sequential verbal reasoning) to address why faithfulness occurs in LLMs which further highlights limitations of CoT as an interpretability technique. They also cite examples across multiple model families which makes this exploration more convincing as a general architectural mismatch.
4. Nuanced Stance: They do not oversimplify the problem, nor do they make CoT exploration a "doom-and-gloom" venture. They acknowledge alternative views, offer future directions, acknowledge those directions' limitations, and conclude with a nuanced approach to using CoTs.
5. They provide clear criteria used for testing faithfulness (based on soundness, causal relevance and completeness). This offers a kickstart for future validation work since these can be empirically tested.
6. Their interdisciplinary approach to draw insights from neuroscience and cognitive science (especially for bias recognition and confabulation) seems plausible when contextualizing CoT limitations.

#### Weaknesses
1. Proposed solutions might be impractical: While the whole of CoT improvement is largely mysterious, the solutions that they offer are too generic. Each of those is still limited by the challenges in producing faithful explanations (Section 5) and so, these seem more like vague conjectures instead of testable concrete hypothesis.
2. Unclear stance on CoT usefulness: Despite their nuanced stance on CoT, Section 7 on alternative views on CoT feels inadequate. Using "CoTs as a useful proxy" might be misleading because how would go about identifying trustworthy CoTs (when a CoT reasoning is good vs when it's completely erroneous). "CoT as performing computation in complex tasks", if true, implies unfaithful reasoning is structurally unavoidable for complex tasks, undermining the feasibility of the proposed solutions, which again leads us back to square one.
3. Missing qualitative evaluation: Since they're heavily focused on how CoT is unfaithful and people should avoid using it in high-stakes domains, a user study to see impacts of such over-reliance might've built a strong case for implications of oversimplifying the stated issue.

#### Open Questions
1. While I appreciate the parallels drawn from cognitive science/neuroscience to reason about CoT limitations, how are these helpful especially when measuring faithfulness (both CoT and neuroscience are, after all, largely unpredictable when it comes to fallible reasoning)?
2. I wonder what the trend/percentage for CoT interpretability claim would be if they did the literature review survey now. (25% is motivating enough, sure, especially for high-stakes, but that's also a 75% underclaim for CoT sufficiency).

#### Concrete Suggestions
1. Even though this is a position paper, it might be worth specifying an acceptable threshold for their faithfulness criteria (80%?) to see the actual implications for the hypothesis they present (is CoT sufficient for interpretability?).
2. Maybe user studies to solidify the high-stakes overreliance implications.