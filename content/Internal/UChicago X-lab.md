---
title: UChicago X-lab
draft: true
tags:
  -
---
###### Interests and aspirations
Broadly sketch your career goals, your academic or other interests, the sort of work you enjoy most, and what you hope to get out of the fellowship. (Limit ~100 words)

I'm a Master's student in CS at Northeastern, and I spend most of my time trying to understand what language models are actually doing internally. My background is in software engineering and ML systems, but I've been moving steadily toward interpretability research through a seminar in Actionable Interpretability, research assistantship, and a lot of reading and writing on my personal site. Long term, I'm aiming for a PhD in mechanistic interpretability. What I'm hoping to get from this fellowship specifically is research judgment: the ability to engage seriously with a result, implement it faithfully, and know what it actually means.

###### Previous engagement with AI safety
Please list any AI safety programs you have participated in, organizing you have done for an AI safety group, AI safety conferences you have attended, blogs you like to read, podcasts you like to listen to, etc. We will likely ask you about your answer to this question in interviews.

I came to AI safety through two parallel threads. The first was studying how people interact with LLMs. Through Northeastern's Human-Centered NLP course and research assistantship, I designed experiments around user trust in LLM responses for health and educational decisions, which made the stakes of unreliable AI concrete for me. The second was growing uncomfortable with how little we understand about what's happening inside these models. This led me to Northeastern's Actionable Interpretability seminar, where papers like *Chain-of-Thought Is Not Explainability*, pushed me towards an independent project comparing SAE features to chain-of-thought reasoning. Outside structured programs, I maintain a personal website where I write about interpretability papers and ideas, and find interesting insights from posts on LessWrong.

###### Previous AI Research Experience
Please add any legible evidence of AI research ability. Preferably this would be an AI safety research output of some kind, but you can also link non-safety work or general software engineering work. If you have a GitHub or personal blog, this is a great place to link it.

Personal Blog: Paper reviews and writeups on mechanistic interpretability topics - [https://shreetishresthanp.github.io/tags/mech_interp](https://shreetishresthanp.github.io/tags/mech_interp)

Real-Time Anomaly-driven EMAs to Capture Varying Mental and Behavioral States among Adolescents: Co-authored and presented at Digital Health Summit, Dartmouth University, Dec 2025. Built real-time anomaly detection using LSTM networks and Isolation Forests in PyTorch - [https://github.com/shreetishresthanp/ubiwell-lab-artifacts/blob/main/Connect_Study_Poster.png](https://github.com/shreetishresthanp/ubiwell-lab-artifacts/blob/main/Connect_Study_Poster.png) 

Adaptive Tutoring with LLMs-Comparative Analysis Against Traditional Methods: Between-subjects controlled experiment measuring learning gains from an adaptive LLM tutor; 20% vs 9% improvement for experimental vs control group - [https://github.com/shreetishresthanp/adaptive_tutoring_assistant/blob/main/FindingsReport.pdf](https://github.com/shreetishresthanp/adaptive_tutoring_assistant/blob/main/FindingsReport.pdf) 

Experimental Design for Evaluating Trust in Health Chatbots: Designed a split-plot study to evaluate impact of source citations on chatbot trust and usability - [https://drive.google.com/file/d/1sU-txbJYFYdc7DK8rPHKXSmD5rBb5J92/view](https://drive.google.com/file/d/1sU-txbJYFYdc7DK8rPHKXSmD5rBb5J92/view) 



For a detailed list of projects and ML work experience, please refer to: [https://shreetishresthanp.github.io/Shreeti_Shrestha_Resume](https://shreetishresthanp.github.io/Shreeti_Shrestha_Resume)

###### What AI safety research area are you most interested in? Why do you think it is important?
Shoot for ~150 words.

I'm most excited about mechanistic interpretability, particularly whether chain-of-thought reasoning actually reflects what's happening inside a model. Chen et al. (2025) [1] find that state-of-the-art reasoning models verbalize their internal reasoning fewer than 40% of the time, which means the reasoning we see may mostly be a post-hoc narrative. If that's true, using CoT as evidence of aligned reasoning in medicine, law, or autonomous systems isn't just insufficient, it's misleading.

The research community is divided on this, but two results stand out to me. *How Does CoT Think?* [2] shows that CoT-derived SAE features improve correct answer probability when patched into a no-CoT run. RISE [3] discovers unsupervised reasoning vectors encoding behaviors like reflection and backtracking that can be causally steered. Both suggest SAEs surface genuine internal structure during reasoning, but neither asks whether that structure actually matches what the model is saying. That gap feels important.



[1] Chen, Yanda, et al. "Reasoning models don't always say what they think." *arXiv preprint arXiv:2505.05410* (2025). 

[2] Chen, Xi, Aske Plaat, and Niki van Stein. "How does Chain-of-Thought Think? Mechanistic Interpretability of Chain-of-Thought Reasoning with Sparse Autoencoding." *arXiv preprint arXiv:2507.22928* (2025).

[3] Zhang, Zhenyu, et al. "Fantastic Reasoning Behaviors and Where to Find Them: Unsupervised Discovery of the Reasoning Process." *arXiv preprint arXiv:2512.23988* (2025).

  
###### What is a paper you would be interested in replicating? Why do you think it would be a good replication?
Would an open source implementation of the paper provide value to the research community? Or, alternatively, would it be useful for the research community to know that this paper replicates? Please keep this to a single paragraph or less.

I'd want to replicate How Does CoT Think?[1], which uses sparse autoencoders (SAE) to extract features active during chain-of-thought reasoning and patches them into no-CoT runs to measure their causal effect on correct answer probability. The core finding that this works significantly better in larger models is interesting precisely because it's fragile-sounding: it depends heavily on which SAE dictionary was used, at what layer, and how patching was implemented. An open-source replication that carefully documents these choices and tests robustness across model sizes and SAE configurations would give the community a cleaner baseline. And if the result holds, it opens a natural next step I'm personally curious about: extracting top SAE features at each reasoning step, scoring how well they match the verbal content of that step, and suppressing misaligned features to see if reasoning degrades. If misalignment predicts errors, faithfulness becomes a measurable signal rather than a philosophical concern.



[1] Chen, Xi, Aske Plaat, and Niki van Stein. "How does Chain-of-Thought Think? Mechanistic Interpretability of Chain-of-Thought Reasoning with Sparse Autoencoding." *arXiv preprint arXiv:2507.22928* (2025).