---
title: ARENA Application
draft: true
tags:
  - "#misc"
  - "#applications"
---
### Experience and Motivation
###### What are your current career plans? (150)
- Current State: working as a research assistant
	- Working on research with time series LLM models
- Actionable interpretability seminar
	- Focused on readings
- Working on project to interpret if sae features align with step by step CoT reasoning
- PhD or research in interpretability

Broadly, I’m interested in understanding how language models represent information and how their internal computations give rise to the behaviors we observe. This curiosity has drawn me toward mechanistic interpretability research.

As a master’s student, I work on research involving time-series language models, analyzing how LLMs encode temporal structure and examining patterns in their learned representations. In parallel, I've been exploring interpretability through Northeastern University's Actionable Interpretability seminar, where Anthropic's monosemanticity work introduced me to sparse autoencoders as a tool for decomposing representations, and "Chain-of-Thought Is Not Explainability" challenged my assumptions about whether visible reasoning reflects internal computation. This tension motivated my current independent project exploring whether SAE features align with intermediate chain-of-thought steps.

Long term, I plan to pursue a PhD or research role in interpretability. ARENA's hands-on curriculum would give me the technical foundation to pursue this more rigorously and position me for research-level contributions.


An ongoing artifact of my trajectory can be found here: [https://shreetishresthanp.github.io/]

###### Why are you applying to ARENA? (100)
- Building and learning independently
- Offers network and support and engagement in the alignment community (broader goal of mech interp)
- Exposure to ongoing research
- Interpretability research struggles with Benchmarks as I've seen in my early journey. ARENA has a dedicated section in its curriculum for LLM evaluations

Interpretability feels like a field still defining its own foundations. That’s exactly what draws me to it, but it also means rigorous evaluation is challenging. I’ve noticed benchmarks are a consistent gap across many papers. That's why ARENA’s dedicated chapter on Evaluations stood out to me; it signals seriousness in verifying discoveries, not just making them.

Beyond the technical depth this program offers, the opportunity to learn alongside peers and mentors absorbed by similar research questions excites me equally. I see this program as a chance to grow both my skills and my engagement with the broader alignment community.

###### Please tell us about your prior experience with AI safety (100)

- I've worked on ML application (like building pipeline and ML infrastructure in Trimble): this might not be relevant
- Human-Centered NLP course and projects focusing on human-centric evaluations: 
	- can LLM powered learning overtake traditional methods? (user study measuring engagement and effectiveness in LSAT preparation)
	- Designing experiment to test whether users trust LLM responses for health questions that are cited vs not
- Actionable Interpretability seminar
	- Readings and posted reviews on my personal page about a few of the papers I found itneresting; - Presented few papers: monosemanticity, latent QA, CoT is not explainability
	- Doing the CoT vs SAE features for my final project inspired by the papers
- RA work: 
	- Built DAIMON: Dashboards in AI Monitoring (HCI focused)
	- New project likely exploring time-series encoding in models like OpenTSLM: don't have an idea yet but exploring how OpenTSLM works so far
- Have a personal website that has some posts about mech interp topics and papers

I came to AI safety through two parallel threads. The first was studying how people interact with LLMs. Through Northeastern's Human-Centered NLP course and research assistantship, I designed experiments around user trust in LLM responses for health and educational decisions, which made the stakes of unreliable AI concrete for me. The second was growing uncomfortable with how little we understand about what's happening inside these models. That led me to the Actionable-Interpretability seminar, where papers like Chain-of-Thought Is Not Explainability pushed me towards an independent project comparing SAE features to chain-of-thought reasoning, and into writing about interpretability on my website.


###### Please tell us about the most impressive technical project you've undertaken (100)
-- I've worked on ML application (like building pipeline and ML infrastructure in Trimble): this might not be relevant
- RA work (doesn't seem relevant either): 
	- Built DAIMON: Dashboards in AI Monitoring (HCI focused)
	- New project likely exploring time-series encoding in models like OpenTSLM: don't have an idea yet but exploring how OpenTSLM works so far
- Actionable Interpretability seminar
	- Readings and posted reviews on my personal page about a few of the papers I found itneresting; 
	- Doing the CoT vs SAE features for my final project inspired by the papers (this project is only an idea currently; no implementation)
- - Human-Centered NLP course and projects focusing on human-centric evaluations: 
	- can LLM powered learning overtake traditional methods? (user study measuring engagement and effectiveness in LSAT preparation): could write about this since this was a full fledged research study but no relevance to this program
	- Designing experiment to test whether users trust LLM responses for health questions that are cited vs not


For a Human-Centered NLP course, I built and evaluated an adaptive LLM tutoring system powered by Gemini 2.0 Flash for teaching LSAT Logical Reasoning. The agent retrieved practice questions from a vector database and personalized its curriculum based on each user's pre-quiz performance across nine question subtypes. I ran a between-subjects controlled experiment with matched pre/post quizzes, measuring learning gains alongside perceived readiness, frustration, and engagement. The experimental group showed 20% improvement versus 9% for the control group, with higher perceived readiness and lower frustration. The project sharpened my thinking about what it means to rigorously evaluate AI systems.
###### Please tell us about your coding/ML experience (100)
My foundation comes from building production ML systems at Trimble Maps, where I developed extract-transform-load (ETL) pipelines, applied clustering on road networks, and leveraged historical traffic patterns for route optimization. As a research assistant, I contributed to a mental health prediction project using long short-term memory (LSTM) networks and isolation forests in PyTorch to detect anomalies, and built an AI monitoring dashboard. Beyond coursework in ML and Distributed Systems, I completed MIT's Intro to Deep Learning and am currently working with transformer internals and mechanistic interpretability tools including SAELens and NDIF, primarily in Python with PyTorch and HuggingFace.


### Technical 
Choose a technical AI safety agenda that you are particularly excited about and answer the following questions:
- Why do you think research on this agenda will lead to a positive impact on the safety of AI systems? Try to be as concrete as possible.
- Is there a result in this field that you found particularly interesting? Can you think of one further experiment that would tell us more? (It doesn't have to be practical)
- 250 words

- Latent QA
- Role: biochemist: unraveling
- MIT: that thing to reveal password
- 
I'm most excited about mechanistic interpretability, particularly whether Chain-of-Thought reasoning actually reflects what's happening inside a model. What unsettles me is that models might produce plausible reasoning traces that don't correspond to what they're actually computing. Chen et al. (2025) [1] find that state-of-the-art reasoning models verbalize their internal reasoning fewer than 40% of the time, which means the reasoning we see may mostly be a post-hoc narrative. If that's true, using CoT as evidence of aligned reasoning in medicine, law, or autonomous systems isn't just insufficient, it's misleading [2].

While the research community has been divided on this, two results have caught my eye. "How Does CoT Think?" [3] shows that CoT-derived SAE features, when patched into a no-CoT run, significantly improve correct answer probability but only in larger models, suggesting CoT's internal structure is capacity-dependent. RISE [4] goes further, discovering unsupervised reasoning vectors encoding behaviors like reflection and backtracking that can be causally steered. Both results suggest SAEs can surface genuine internal structure during reasoning but neither asks whether that internal structure actually matches what the model is saying.

That's the question I keep coming back to. A natural experiment I'd propose is to extract the top SAE features active at each reasoning step, score how well they semantically match the verbal content of that step, and then suppress misaligned features to see if subsequent reasoning degrades. If misalignment predicts errors, faithfulness stops being a philosophical concern and becomes a measurable safety signal.

[1] Chen, Yanda, et al. "Reasoning models don't always say what they think." _arXiv preprint arXiv:2505.05410_ (2025).
[2] https://aigi.ox.ac.uk/wp-content/uploads/2025/07/Cot_Is_Not_Explainability.pdf
[3] Chen, Xi, Aske Plaat, and Niki van Stein. "How does chain of thought think? mechanistic interpretability of chain-of-thought reasoning with sparse autoencoding." _arXiv preprint arXiv:2507.22928_ (2025).
[4] Zhang, Zhenyu, et al. "Fantastic Reasoning Behaviors and Where to Find Them: Unsupervised Discovery of the Reasoning Process." _arXiv preprint arXiv:2512.23988_ (2025).

I’m particularly drawn to mechanistic interpretability as a safety agenda because I want to understand what models _actually_ compute, not just what they say. Chain-of-Thought (CoT) reasoning is compelling, but if models produce plausible reasoning traces that don’t reflect their internal computation — as Chen et al. (2025) show, with state-of-the-art reasoning models verbalizing their internal steps fewer than 40% of the time — then using CoT as evidence of alignment feels dangerously fragile. In high-stakes domains, this mismatch could mask serious misalignment.

What excites me is how Sparse Autoencoders (SAE) open a window into feature-level computation. I’ve been fascinated by the idea that we can trace individual features and circuits to see _what the model is actually doing_, yet current work hasn’t rigorously measured whether SAE activations correspond step-by-step with CoT outputs.

I would test this by extracting top-k SAE features at each reasoning step, evaluating their alignment with CoT via NLI entailment, and causally intervening by patching low-alignment features to see how reasoning outputs change. If misalignment predicts reasoning errors, we gain a quantitative signal for when to trust CoT. This approach excites me because it turns interpretability into a practical tool for AI safety — revealing when models are truly reasoning versus just sounding convincing.

I'm most excited about mechanistic interpretability as a safety agenda. If models can produce plausible-sounding reasoning that doesn't reflect their internal computation (as "Chain-of-Thought Is Not Explainability" suggests) then behavioral evaluations alone are insufficient evidence of alignment. Mechanistic interpretability addresses this by asking what models are actually computing, not just what they output. This is directly safety-relevant: a model that appears aligned but pursues misaligned internal objectives is more dangerous than one whose misalignment is detectable.

A result I found particularly interesting is LatentQA, which proposes training a decoder to answer open-ended questions about model activations in natural language. This makes internal states queryable at scale, a meaningful step toward verifying reasoning rather than just observing it. The finding that their framework, LIT, outperforms linear probes by 32.2% and can elicit harmful knowledge that prompting baselines evade suggests the approach surfaces genuinely internal information rather than surface-level patterns.

One limitation I see is the absence of ground truth validation: even if decoded interpretations are plausible, we don't know if they're faithful. A further experiment would systematically test faithfulness by intervening on activations, patching in known concepts via activation steering, and checking whether LatentQA correctly reports the injected content. This would provide a causal test of whether the decoder is reading internal states or confabulating. If it fails, it would reveal an important gap between interpretability tools that describe model behavior and those that genuinely decode internal computation.














Read Anthropic's Assistant Axis paper until section 2.3 (linked below) and answer the following questions:
- Why might we want to understand how personas arise in models?

Understanding how personas arise helps explain how language models internally represent the “Assistant” identity. If this persona corresponds to a direction in activation space, unusual behavior may reflect drift into other personas rather than simple failure. Such drift has practical consequences across a spectrum of severity: benign shifts toward theatrical or sycophantic behavior can reduce reliability in deployment; certain conversational contexts may organically push models toward harmful outputs without adversarial intent; and attackers may deliberately induce alternative personas to elicit unsafe capabilities (jailbreaks). Studying these mechanisms therefore enables drift detection and targeted interventions.

- Does the paper provide evidence that personas are represented similarly across different models?
Yes. Across three model families of varying sizes (Gemma 2 27B, Qwen 3 32B, and Llama 3.3 70B) PC1 derived from role vectors has high pairwise cosine similarity (> 0.92), with similar consistency in trait space where pairwise similarity exceeds 0.81. Comparing Gemma's base and instruct versions yields nearly identical PC1s, suggesting persona differentiation exists prior to post-training and is likely inherited from the pre-training corpus. PC2 and PC3 show only moderate alignment, suggesting that while the primary axis of persona variation is universal, finer-grained dimensions are more model-specific.



1. Yes, the first mention of this is in Figure 1 where the authors denote that Assistant Axis' alignment with PC1 in the "persona space" occurs across different models. Across sections 2.1 and 2.2, they compare three different models of varying sizes (LLama 3.3 70B, Qwen 3 32B and Gemma 2 27B) to discover the findings as follows:
	- Between all pairs of models, PC1 characterized by the role vectors offers high cosine similarity for roles (> 0.92)
	- Similar trends are seen for PC1s in the trait space where pair-wise similarity on trait PC1 was > 0.81.
	- Across Gemma's open-weight base and instruct versions, the resulting PC1s are nearly identical, suggesting LLMs already have axes of persona differentiation in their base models that are likely inherited from pre-training corpus. 
	- A role highly similar to the Assistant persona across all models is the generalist
	- PC2 and PC3 were moderately consistent across models with some interesting differences.
	-

- What do you think about their method of identifying personas using extraction questions? Why might we want to extract personas this way? Is there another way we could do it?
Extraction questions probe behavioral expression indirectly: rather than asking "are you playing this role?", they elicit how a persona manifests across diverse contexts, avoiding the model's mere recitation of its instructions. Their open-ended, LLM-generated nature captures subjective variance and context-sensitive expressions that a fixed rubric might miss. I also think using 40 independent single-turn questions is a justified choice as multi-turn extraction could conflate stable persona representations with conversational drift, which the paper seeks to isolate.  

One limitation I see is reproducibility: since the extraction questions are LLM-generated and not fully disclosed, exact replication is difficult. An interesting alternative would be training linear probes on residual stream activations to predict persona labels directly. This is more representationally grounded and a direct test of whether persona information is linearly encoded. The tradeoff is that probes require labeled data and may overfit surface features, whereas extraction questions produce behaviorally grounded vectors averaged across diverse contexts, offering robustness without supervision.

A potential limitation is reproducibility: extraction questions are LLM-generated and not fully disclosed, making exact replication difficult. An alternative is to train linear probes on residual stream activations to predict persona labels directly. This is more representationally grounded and tests whether persona information is linearly encoded. The tradeoff is that probes require labeled data and may overfit surface features, whereas extraction questions produce behaviorally grounded vectors averaged across contexts, providing robustness without supervision.

One limitation is reproducibility: since the extraction questions are LLM-generated and not fully disclosed, the pipeline is difficult to replicate exactly. An alternative would be training **linear probes** on residual stream activations to predict persona labels directly, rather than averaging activations over behavioral outputs. This is more representationally grounded and directly tests whether persona information is linearly encoded — consistent with the paper's own framing. The tradeoff is that probing requires labeled data and risks overfitting to surface features, whereas extraction questions produce behaviorally grounded vectors averaged across diverse contexts, making them more robust and requiring no supervision.


	- 
	- 
	- Alternatives could include category-based probing (scoring responses along pre-defined trait axes), clustering model outputs in embedding space to discover latent personas, or structured role-play prompts, though each has trade-offs in coverage and interpretability.


	- 
	- Explicitly asking "are you playing this role?" would run the risk of the model simply narrating the instructions its given, whereas, using extraction questions allows inclusion of subjectivity and variance in viewpoints surrounding a certain persona. 

	
	The paper uses extraction questions to probe behavioral expression indirectly, which avoids the risk that the model would just narrate instructions if asked directly. This method captures subjectivity and variance in the persona while remaining robust. One limitation is that the extraction questions aren’t fully disclosed and no comprehensive list exists, so reproducibility is constrained. Alternatives could include category-based probing (scoring responses along pre-defined trait axes), clustering model outputs in embedding space to discover latent personas, or structured role-play prompts, though each has trade-offs in coverage and interpretability.
	- 

The rationale behind identifying personas using extraction questions is solid in my opinion because this accounts for subjective opinions within the same role/persona. Moreover, the idealist view is that the scale (0-100) evaluation for these questions accounts for subjective nuances such as tone, humor, regional and cultural beliefs, linguistic nuances.


Your intuition is right but the reasoning is underdeveloped. You mention subjectivity and scale but don't articulate _why_ extraction questions are better than simpler alternatives. The core insight is that extraction questions are **indirect** — they probe behavioral expression without explicitly asking "are you playing this role?", which avoids the model simply narrating its instructions. You could also mention an alternative: directly prompting the model with system instructions and measuring activations, though this risks conflating instruction-following with genuine persona adoption. Restructure around: (1) what problem extraction questions solve, (2) why indirection matters, (3) one concrete alternative and its tradeoff.

Extraction questions are prompts designed to elicit behavioral expression of a persona — for example, asking "how do you view people who take credit for others' work?" should produce different responses depending on whether the model is acting acerbic versus diplomatic. The key insight is that these questions are **indirect**: rather than asking "are you playing this role?", they probe how the persona actually manifests in model outputs. The model's activations on these responses are then averaged to produce a role vector — a direction in activation space representing that persona.


Please write no more than 300 words. You may use AI models, but the writing and ideas should be your own. Link to paper here: [https://arxiv.org/pdf/2601.10387](https://arxiv.org/pdf/2601.10387)

You **do not** need to read the full paper.
1. 
2. Understanding how personas arise helps explain how language models internally represent the “Assistant” identity. If this persona corresponds to a direction in activation space, unusual behavior may reflect drift into other personas rather than simple failure. Such drift has practical consequences across a severity spectrum: benign shifts toward theatrical or sycophantic behavior can reduce reliability in deployment; certain conversational contexts may organically push models toward harmful outputs without adversarial intent; and attackers may deliberately induce alternative personas to elicit unsafe capabilities (jailbreaks). Studying these mechanisms therefore enables drift detection and targeted interventions.

  

Yes. Across three model families of varying sizes (Gemma 2 27B, Qwen 3 32B, and Llama 3.3 70B) PC1 derived from role vectors has high pairwise cosine similarity (> 0.92), with similar consistency in trait space where pairwise similarity exceeds 0.81. Comparing Gemma's base and instruct versions yields nearly identical PC1s, suggesting persona differentiation exists prior to post-training and is likely inherited from the pre-training corpus. PC2 and PC3 show only moderate alignment, suggesting that while the primary axis of persona variation is universal, finer-grained dimensions are more model-specific.

  

Extraction questions probe behavioral expression indirectly; they elicit how a persona manifests across diverse contexts rather than prompting the model to narrate its instructions. Their open-ended, LLM-generated nature captures subjective variance that a fixed rubric might miss. Using 40 independent single-turn questions seems justified since multi-turn extraction could conflate stable persona representations with conversational drift.

  

One limitation I see is reproducibility: since these questions are LLM-generated and undisclosed, exact replication is difficult. An alternative would be training linear probes on residual stream activations to predict persona labels directly. This is more representationally grounded and a direct test of linear encoding. The tradeoff is that probes require labeled data and may overfit surface features, whereas extraction questions offer robustness without supervision.

Extraction questions probe behavioral expression indirectly — eliciting how a persona manifests across diverse contexts rather than prompting the model to narrate its instructions. Their open-ended, LLM-generated nature captures subjective variance that a fixed rubric might miss, and single-turn independence is justified since multi-turn extraction would conflate stable persona representations with conversational drift.

One limitation is reproducibility: the questions are LLM-generated and undisclosed, making exact replication difficult. An interesting alternative would be training linear probes on residual stream activations to predict persona labels directly — more representationally grounded and a direct test of linear encoding. The tradeoff is that probes require labeled data and may overfit, whereas extraction questions offer robustness without supervision.