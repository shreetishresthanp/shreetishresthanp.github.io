---
title: "Latent-Verbal Alignment: Characterizing SAE Feature Patterns Across CoT Reasoning Steps"
draft: false
tags:
  - mech_interp
  - projects
---
#### Problem Statement
Chain-of-thought (CoT) prompting is widely used both as a performance-enhancing technique and as a proposed interpretability mechanism for AI safety monitoring. Yet a growing body of evidence reveals that CoT outputs can be unfaithful: models produce plausible-sounding reasoning that does not accurately reflect the computations actually driving their answers~\cite{turpin2023, chen2025reasoning}. Crucially, this evidence is almost entirely **behavioral** i.e. the comparison involves inputs and outputs without examining what is actually happening inside the model.

This project seeks to answer a more fundamental question: \\
> **Do the sparse autoencoder (SAE) features most active at each CoT step actually encode the semantic content of what the model is writing at that step?**

Prior mechanistic work demonstrates that SAE features can causally influence CoT outputs~\cite{chen2025cot} and that SAE latent space can be used to discover unsupervised reasoning behaviors~\cite{zhang2025rise}. But neither line of work directly measures the correspondence between what the model computes and what it verbalizes, step by step.

The plan is to address this gap by defining a quantitative correspondence score, referred to as the **Latent-Verbal Alignment** score. For each CoT reasoning step, how semantically consistent are the top-$k$ active SAE features (characterized by auto-interpreted labels) with the verbal text of that step? Then, I ask whether this alignment varies systematically across reasoning stage types (calculation, planning, self-correction, and uncertainty expression) and whether a subset of features is consistently silent (highly active yet never corresponding to any verbalized content).

#### Research Question & Hypotheses
##### H1 — Baseline 
> Real LVA scores are statistically significantly above random-feature and step-shuffle baselines.

- **Threshold**: p < 0.05, Cohen's d > 0.3
- **Note**: A null result on H1 is still a successful finding — it directly answers the broader problem statement.
---
##### H2 — Structure 📐
> Mean alignment is measurably lower at self-correction/uncertainty steps than at calculation/setup steps.
---
##### H3 — Silent Features 
> At least 15–20 features consistently score in the bottom 5th percentile across examples, constituting evidence of computation invisible to CoT monitoring.
---
##### Extension — Trajectory 
> At least one alignment trajectory pattern (drift, dip-and-recovery, convergence) is statistically distinguishable from a step-shuffled baseline.

#### Why this matters for (actionable) interpretability? 
If CoT monitoring is to serve as a safety mechanism, it must catch the computations that actually determine model behavior. Identifying the structure and magnitude of any latent-verbal gap provides evidence about exactly where such monitoring succeeds or fails.

