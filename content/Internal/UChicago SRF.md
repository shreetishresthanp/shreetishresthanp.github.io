---
title: UChicago SRF
draft: true
tags:
  -
---

##### 3-5 year career goals

Broadly, I'm interested in understanding how language models represent information and how their internal computations give rise to the behaviors we observe. That curiosity has been pulling me steadily toward mechanistic interpretability research.

My background is in software engineering and ML systems, but I've been moving toward interpretability through Northeastern's Actionable Interpretability seminar and independent projects I write about on my personal site. Right now, that work is grounded in my research assistantship at UbiWell, where I study how foundational language models encode time series information.

The next step is a PhD in mechanistic interpretability. But getting there meaningfully means closing the gap between reading research and actually doing it, which is what I'm focused on for the immediate future. Longer term, I want to work on interpretability problems that connect to real failure modes: cases where something in a model's internal structure predicts a downstream problem that its outputs don't reveal.



**Sub-question:** Do SAE features active during chain-of-thought reasoning steps semantically align with what the model verbalizes in those steps?
and does misalignment predict reasoning errors?

**Why this matters:**

As AI systems get deployed, there's increasing reliance on chain-of-thought (CoT) reasoning as an interpretability signal. "CoT is not Explainability" [1] discusses the impacts of this overreliance, especially in high-stakes domains such as medicine, law and autonomous decision-making, and makes a case that CoT is rather unfaithful. If a model "shows its work," the assumption is that we can audit it. But that assumption hasn't been rigorously tested. If a model's internal computation during a reasoning step is doing something meaningfully different from what it writes out, then CoT-based oversight is not just incomplete, it's actively misleading. 

While the research community is divided on the effectiveness of CoT, 

Chain-of-thought (CoT) prompting is used as a performance-enhancing technique and as a proposed interpretability mechanism for AI safety monitoring. Yet, evidence reveals that CoT outputs can be unfaithful: models produce plausible reasoning that does not accurately reflect the computations actually driving their answers [ 1, 2]. However, this evidence is almost entirely behavioral i.e. comparison involves inputs and outputs without examining what is actually happening inside. Prior work demonstrates that SAE features can causally influence CoT outputs [3 ] and that SAE latent space can be used to discover unsupervised reasoning behaviors [ 4 ]. But neither line of work directly measures the correspondence between what the model computes and what it verbalizes, step by step. My proposed project seeks to answer a more fundamental question: 

Do the sparse autoencoder (SAE) features most active at each CoT step actually encode the semantic content of what the model is writing at that step?

The relevant stakeholders here are AI developers building oversight tools, evaluators designing safety benchmarks, and policymakers making deployment decisions for high-stakes systems. If CoT monitoring is to serve as a safety mechanism, it must catch the computations that actually determine model behavior. If not, policymakers relying on reasoning traces as evidence of aligned behavior would be working from the wrong signal entirely. The. "CoT is Not Explainability"[1] paper discusses the risk of this in high-stakes domains such as medicine, law and autonomous decision-making. This project is inspired by the same paper, in that, identifying the structure and magnitude of any latent-verbal gap provides evidence about exactly where such monitoring succeeds or fails. 

The plan is to address this gap by defining a quantitative correspondence score, referred to as the Latent-Verbal Alignment score. For each CoT reasoning step, how semantically consistent are the top-k active SAE features (characterized by auto-interpreted labels) with the verbal text of
that step? Then, I ask whether this alignment varies systematically across reasoning stage types (calculation, planning, self-correction, and uncertainty expression) and whether a subset of features is consistently silent (highly active yet never corresponding to any verbalized content).

This is scoped to run on a single open-source reasoning model with an existing SAE dictionary (a reasoning model like Deepseek), which makes it feasible in 3-6 months. The output would be a replicable pipeline and a concrete measure of faithfulness gaps, something the field currently doesn't have a clean version of.

That said, there's a real argument that this work might not be impactful on the margin: if the finding is that CoT is sometimes unfaithful, that's already suspected by many researchers. The value would be proving the existence of the gap, showing it has some structure, and making the gap measurable to see if it predicts failures.

**Approach:**



The core methodology involves three steps. First, extract top SAE features activating at each reasoning step across a set of benchmark problems (probably MATH problems for ease of verification). Second, score semantic alignment between those features and the verbalized step using LLM-as-a-judge (does the internal feature representation actually correspond to what the model wrote?) Third, run suppression experiments: when you intervene on features that show high misalignment, does reasoning accuracy drop more than when you suppress well-aligned features? If yes, that's evidence the gap is causally meaningful, not just descriptive.

