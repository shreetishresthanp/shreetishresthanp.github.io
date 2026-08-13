---
title: Base Template
draft: true
tags:
  -
---
#### Q3
In my MS research, I study how human behavioral context can be modeled from smartphone and wearable sensor data, with a specific interest in how context evolves over time and what representations models learn.

Working with collaborators in HCI and cognitive science challenged my perspective. While I was focused on building and interpreting models, they pushed me to consider questions that came before modeling: Were our context labels valid? What assumptions were we making when deriving them from raw sensor data? Were we measuring the constructs we actually cared about?

I initially wanted to move quickly into modeling, but I realized we shared the same goal of building a trustworthy understanding of human context. To align our approaches, we made those questions part of the modeling process, refining our context definitions, making assumptions explicit, and narrowing the project scope before developing a baseline model.

The experience changed how I think about interpretability. I had viewed it as understanding a model's internal representations; I now see that it begins much earlier, with the assumptions, labels, and representations that shape what a model can learn. This, I've come to realize is especially important when building AI systems for sensitive domains, where unreliable representations can lead to misleading conclusions about human behavior.


#### Q2
I came to AI safety through two parallel threads. 

The first was studying how people interact with LLMs. Through Northeastern’s Human-Centered NLP course and research assistantship, I designed experiments around user trust in LLM-generated responses for health and educational decisions, which made the stakes of unreliable AI concrete for me.

The second thread was a growing discomfort with how little we understand about what happens inside these models. That led me to the Actionable Interpretability seminar, where papers like “Chain-of-Thought Is Not Explainability” motivated an independent project comparing SAE features with chain-of-thought reasoning and further exploration of interpretability.

Currently, through the MIT AI Safety Fundamentals reading group, I have been engaging with broader alignment questions, including inner/outer alignment and scalable oversight. Through SASH, I hope to deepen these interests through mentorship from researchers working on faithfulness and interpretability, feedback on whether my ideas around auditing model reasoning are grounded, and exposure to how technical safety research connects with governance and policy.

I'm also excited to learn alongside researchers who approach evidence and risk from perspectives different from my own. I believe, AI safety is still developing its foundations, and questions around evaluation and measurement remain particularly important to me. SASH represents an opportunity to strengthen my technical foundation, refine my research direction, and contribute to and engage more meaningfully with the broader alignment community.

#### Q1
When a model's internal representation appears to track a meaningful concept, how do we know it reflects genuine structure rather than a spurious pattern that only works in-distribution?

I've encountered this question directly through my MS research modeling human behavioral context from smartphone and wearable sensor data. Building this pipeline required distinguishing meaningful behavioral patterns from artifacts introduced by noisy measurements, incomplete observations, and assumptions in how concepts were defined. This shaped my interest in whether representations learned by AI systems correspond to the phenomena we believe they capture, and how we can evaluate that correspondence.

My prior work has given me two perspectives on this. In the MS research, I've developed experience validating signals in messy real-world data and questioning whether learned patterns reflect genuine structure. Through an Actionable Interpretability seminar project, I explored the relationship between model reasoning and internal representations, comparing sparse auto-encoder features with chain-of-thought reasoning at a step level. Together, these experiences led me to view representation validation as an empirical question rather than an assumption.

During the fellowship, I'd like to explore this through different AI safety approaches. With interpretability mentors, I'm interested in evaluating whether identified representations correspond to mechanisms that drive model behavior. With mentors studying cognitive modeling, I'm interested in how concepts like intent and goals can be grounded in observable behavior. With mentors working on embodied AI, I'm interested in distinguishing representations that capture generalizable structure from shortcuts that fail under distribution shift.

Through SASH, I hope to develop stronger approaches for evaluating AI systems beyond the settings they were tested in, and learn how interpretability and cognitive science can contribute to safer, trustworthy systems.