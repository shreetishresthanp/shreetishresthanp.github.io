---
title: Base Template
draft: true
tags:
  -
---
Turpin et al (2023)
- Biasing features
	1. Reorder MCQ options in a few-shot prompt so that the answer is always A
	2. Suggested answer in the prompt (hint)
- Result: Adding such biasing feature heavily influences CoT predictions, accuracy drops by 36%
- Models alter their explanations to justify incorrect bias-consistent predictions
- Tested on GPT 3.5 and Claude 1.0 (2023 models)
- CoT explanations can be plausible yet systematically unfaithful.
- **Are unfaithful explanations a sign of dishonesty or lack of capability?**
-  A big critique for this paper was they didn't have an answer to what makes a model faithful. No sufficient testing for what faithfulness means. This could just be lossy compression

Is Cot Really not Explainability? && https://www.lesswrong.com/posts/HQyWGE2BummDCc2Cx/the-case-for-cot-unfaithfulness-is-overstated
- Omitting a biasing hint doesn't necessarily mean the reasoning is deceptive or post-hoc
- Faithfulness vs incompleteness distinction
- a model that reasons genuinely but summarizes imperfectly is very different from one that confabulates. Turpin et al.'s behavioral method cannot distinguish between these two explanations.


Chen et al (2025): Reasoning Models Don’t Always Say What They Think
Anthropic
- CoT monitoring is a promising approach to noticing unintended behaviors, but that it is not reliable enough to rule out unintended behaviors
- Testing Claude 3.7 Sonnet and DeepSeek-R1 across six hint types, they find that even the most capable reasoning models verbalize the hints they use fewer than 40% of the time. More telling: unfaithful CoTs are _longer_ than faithful ones
- Behavioral: they compare outputs with and without hints. They can tell you _that_ the gap exists and _how large_ it is, but not _where_ in the reasoning process it happens or _what the model is computing_ in the steps where it fails to verbalize. In their conclusion, they explicitly call for the next step: inspecting internal activations, specifically SAE features, to understand what models are actually computing when they stay silent.

"How Does CoT Think?" (Chen, Plaat & van Stein, 2025)
- first feature-level causal study of CoT faithfulness
- also the inspiration for this project
- monosemantic features from Pythia-70M and Pythia-2.8B while they tackle GSM8K math problems under CoT and plain (noCoT) prompting. Swapping a small set of CoT-reasoning features into a noCoT run raises answer log-probabilities significantly in the 2.8B model, but has no reliable effect in 70M, revealing a clear scale threshold
- Limitations: First, our activation patching targets only the residual activation of the final token and does not trace causal effects through the reasoning process; this is fundamentally due to the static, snapshotbased nature of the SAE framework, which is incompatible with token-level or path-level causal tracing methods (Goldowsky-Dill et al. 2023; Zhang and Nanda 2023). Second, our interpretation module relies on OpenAI’s LLMbased scoring (Agarwal, Tanneru, and Lakkaraju 2024), which offers an indirect perspective and does not ground explanations in specific neurons or heads, nor validate them with causal interventions (Geiger et al. 2023). Third, experiments are restricted to Pythia-2.8B and smaller variants; we did not include larger models such as LLaMA-7B, and our findings may not generalize (Shojaee et al. 2025; Demircan et al. 2024). Fourth, SAE-based feature analysis introduces biases and may miss distributed or entangled representations (Dooms and Wilhelm 2025; Karvonen et al. 2024; Bereska and Gavves 2024). Not all interpretable SAE features have causal effects (Menon et al. 2024). For future work, we suggest conducting token-level and path-based causal analysis, ideally in combination with SAE-based feature decomposition, such as stepwise interventions and path patching


**RISE (Zhang et al., 2025)** addresses a different but complementary gap. Rather than asking whether CoT features are causally meaningful, RISE asks: what reasoning behaviors _exist_ in the latent space at the step level? By training SAEs on step-level activations from DeepSeek-R1 and clustering the decoder columns, RISE discovers interpretable reasoning vectors — reflection, backtracking, confidence — and shows these can be injected or suppressed to steer model behavior across steps.

The literature has established that models don't always say what they compute (Turpin et al., Chen et al.), that this isn't simply compression (the counterargument remains unresolved mechanistically), that CoT features carry genuine causal content (How Does CoT Think?), and that the latent space has rich step-level structure in SOTA reasoning models (RISE). What no paper has done is bring these threads together: take the step-level features RISE discovers, score their semantic correspondence to the verbal content written at each step, and validate that correspondence causally — all on a SOTA reasoning model, across the full temporal trace.