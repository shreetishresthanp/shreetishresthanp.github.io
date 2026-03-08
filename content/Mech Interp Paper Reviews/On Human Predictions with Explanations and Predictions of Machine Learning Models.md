---
title: On Human Predictions with Explanations and Predictions of Machine Learning Models
draft: false
tags:
  - mech_interp
  - papers
---
#### Summary
This paper investigates how explanations and predictions from machine learning models can influence human decision making. Using a deception detection task for identifying deceptive hotel reviews, the authors design a spectrum of six conditions ranging from full human agency with no machine assistance (control) to predicted labels with explicit accuracy and explanations and measure human accuracy and trust across 80 participants. Below are some of their core findings:
- Explanations alone improve human prediction performance
- Showing predicted labels significantly improves human performance
    - This confirmation also acknowledges concerns about humans overly relying on machines
- Explanations increase trust that humans place on machine predictions
    - The authors use this to suggest that explanations could potentially moderate the tradeoff between performance and agency
- Statements of accuracy improve trust even when the claimed accuracy is only 50%
    - Frequency explanations can help interpret and act on accuracy statements more effectively
Apart from these key findings, there are some interesting revelations from the study, which have been listed below:
- Random heatmaps (where random words are highlighted) boost human performance as well, leading to questions on placebo effect of explanations
- Humans tend to trust correct machine predictions more than incorrect ones

Via the experiment and the discussion of findings, the authors raise important questions about responsible deployment of interpretable models and the influence of these models on human agency in high-stakes decision settings.
#### Strengths
- Random heatmap experiment: Adding the random heatmap check was a good methodological move that reveals the placebo effect of explanations. Even though this isn't explored elaborately, the authors try to validate this by comparing it with the actual heatmap to find that the actual is more significant, suggesting humans can interpret valuable information beyond the placebo effect.
- Between-subjects study design: I like their choice for a between-subject study design which prevents participants from being influenced by prior exposure to other assistance conditions, ensuring that accuracy differences reflect assistance effects rather than practice effects.
#### Weaknesses
- Trust as a proxy metric: Since trust is tied to machine predictions, it only captures whether humans follow the machine and not whether they're genuinely reasoning independently. A participant who reasons carefully and reaches the same conclusion as the machine looks identical to one who simply follows it.
- Agency is never formally measured: The paper frames human agency as a core concern but never formally defines it or measures it. While trust and accuracy are used as close proxies, the authors treat higher accuracy as unambiguously good, which might not be the case.
#### Clarifying Questions
- The self-reported performance estimation and gender breakdown feel under-utilized. I don't understand the relevance of these metrics (what they're measuring and how it's important). I wonder instead of these, if something like whether a participant is a local (Chicago resident) vs not might be more revealing for certain trends.
- The random heatmap reveals a placebo effect and while the authors address that it's still less significant than the actual heatmap, did they consider following up with a condition that informed participants it was random to test whether this transparency about quality had any effect?
#### Concrete Suggestions
- To capture human agency more rigorously, the author's could study participants' reasoning process and confidence levels for why they came to a conclusion rather than averaging accuracy and trust metrics (perhaps a thematic analysis of some survey questions from their exit interview)