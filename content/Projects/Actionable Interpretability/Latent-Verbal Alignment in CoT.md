---
title: "Tentative: Latent-Verbal Alignment in CoT"
draft: true
tags:
  -
---
### Presentation
- Clearly state the motivation/problem / question,
- Motivate why it matters for interpretability (emphasis on translation!),
- Cover relevant background & related work,
- Propose a concrete plan: method, experiments, success criteria, and risks.
### Proposal
1. Title + team members

2. Problem statement
- What are you trying to understand, measure, or build? Why should the reader care about the outcome?
- What would count as “success”?

3. Background / related work
- The key papers you’re building on (including course readings when relevant).

4. Proposed approach
- What you will do, concretely.
- What variants/ablations you plan to run.

5. Evaluation plan
- Datasets/tasks/models; metrics; baselines; sanity checks.
- What failure would look like; what would change your mind.

6. Feasibility
- Compute requirements (again consider using [NDIF](https://www.google.com/url?q=https://ndif.us/&sa=D&source=editors&ust=1773167093040617&usg=AOvVaw2n60Hpz33FeYKmbI2awOpG)!), data access, implementation plan.
- Risks + mitigation (e.g., “if X fails by week Y, we will switch to Z”).

7. Timeline
- A week-by-week plan from proposal to final deliverables.
### Notes
- Build-up:
	- CoT is not the full picture
		- CoT is not Explainability
		- Biasing Features: CoT as unfaithful if it omits a prompt-injected hint that affected the prediction
	- Counter argument
		- Is CoT really not Explainability? faithfulness conflated with incompleteness (due to lossy compression)
		- https://www.lesswrong.com/posts/HQyWGE2BummDCc2Cx/the-case-for-cot-unfaithfulness-is-overstated
	- Divided views
	- More and more efforts to look at features to identify CoT
	- Biasing Features:
		- Language Models Don’t Always Say What They Think: Unfaithful Explanations in Chain-of-Thought Prompting
- Inspiration Paper:
	- How does Chain of Thought Think? Mechanistic Interpretability of Chain-of-Thought Reasoning with Sparse Autoencoding
		- uses last layer activations
		- activation patching features from a CoT to no-CoT run
	





## Brief Overview (Plain Language)

When DeepSeek-R1 solves a math problem, two things happen at every reasoning step: it writes text ("let me verify this...") and internally activates specific computational patterns called SAE features. The question is — **do those internal patterns actually match what's being written?**

Anthropic's Chen et al. (2025) already proved behaviorally that models often don't say what they compute. But they couldn't explain _where_ or _why_ this happens mechanistically. The closest existing work ("How Does CoT Think?") only patches the final token and explicitly lists step-level causal tracing as future work they couldn't do.

**Your project fills that gap.** At each reasoning step, you extract the top causally active SAE features, label their meaning, and score whether that meaning semantically corresponds to what was actually written — using NLI entailment, not just keyword matching. You then validate causally: if you suppress a feature that fired internally but wasn't verbalized, does the reasoning change? This is the first step-level, causally validated, semantically scored account of the latent-verbal gap in a SOTA reasoning model.

---

## Detailed Proposal

**Title** _Do Models Say What They Compute? Probing SAE Feature Alignment in Chain-of-Thought Reasoning_

**Research Question** Do the SAE features most causally active at each reasoning step appear in the semantic content of that step's verbal text, and does this latent-verbal alignment differ systematically across layers and step positions?

---

**Motivation**

Chen et al. (2025) show SOTA reasoning models verbalize their internal reasoning fewer than 40% of the time and explicitly call for SAE-based mechanistic analysis as future work. Existing SAE-based CoT analyses either operate on final-token activations without step-level tracing ("How Does CoT Think?"), focus on error taxonomies without causal validation ("Finding SAE Representations of Errors"), or decompose features without scoring correspondence against verbal content (VS Decomposition). The Hypocrisy Gap paper measures divergence but not per-step and not causally. Your specific combination — NLI-based semantic correspondence scoring, step-level temporal tracking, and per-step causal validation on a SOTA reasoning model — has not been done.

---

**Model and Infrastructure**

- **Primary**: DeepSeek-R1 (671B) via Goodfire's open-source SAEs — the first public SAEs on a true SOTA reasoning model, including a math-specific SAE trained on OpenR1-Math, with pre-labeled features and pre-computed activation SQL databases
- **Fallback**: DeepSeek-R1-Distill-Llama-8B with Galichin et al. SAEs if 671B access is constrained
- **Dataset**: MATH-500 hard problems (levels 4–5)

---

**Pipeline — Four Stages**

**Stage 1: Trace Generation and Step Extraction** Generate reasoning traces on MATH-500 problems. Segment at `\n\n` delimiter boundaries to identify step positions. Extract top-k SAE features at each step boundary using Goodfire's pre-computed activations where available.

**Stage 2: Feature Labeling** Use Goodfire's pre-labeled feature map as the primary source. For unlabeled features, apply LLM-as-judge on max-activating examples (as in RISE). This produces a semantic label per feature per step.

**Stage 3: Latent-Verbal Correspondence Scoring** For each (feature label, verbal step text) pair:

- **Primary measure**: NLI entailment score via DeBERTa — does the step text entail the feature's concept?
- **Diagnostic baseline**: Keyword overlap — do core concept words from the feature label appear in the step text? High semantic similarity but low keyword overlap flags the most interesting "hidden computation" cases
- Aggregate into a per-step alignment score
- Validate against ~50–100 human-annotated pairs to establish metric validity

**Stage 4: Causal Validation** Using RISE-style activation patching: suppress features that fired at a step but were _not_ verbalized (low correspondence score). Observe whether subsequent verbal content shifts or the final answer changes. If suppressing latent-but-unspoken features affects downstream reasoning, those features are causally load-bearing despite being invisible in the text.

---

**Secondary Analyses**

- **Layer × step interaction**: Does alignment vary across layers, and does the layer at which misalignment peaks shift across step positions?
- **Qualitative case studies**: Identify systematically silent features — those that consistently fire but never appear in verbal content across many traces — as concrete illustrations of hidden computation

---

**Framing Flexibility**

The final framing depends on what the data shows:

- If alignment breakdown correlates with answer correctness → **Plan A**: propose a feature-level redefinition of faithfulness, extending Chen et al.'s behavioral findings mechanistically
- If the pattern is rich but not predictive of correctness → **Plan B**: deliver a mechanistic characterization of the latent-verbal gap, with causal validation as the core novel contribution

---

**Timeline**

- **Weeks 1–2**: Finalize literature review; verify Goodfire SQL database coverage of math problems; confirm pipeline against precomputed activations
- **Weeks 3–5**: Stage 1–2 at scale; feature labeling
- **Weeks 6–8**: Stage 3 correspondence scoring; human validation study
- **Weeks 9–10**: Stage 4 causal patching experiments
- **Weeks 11–12**: Layer × step analysis; qualitative case studies; writing

**Scope**: 2–3 months, built on existing pipeline, Goodfire's precomputed activations, and pre-trained SAE artifacts. No model training required.

