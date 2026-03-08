---
title: "Towards Monosemanticity: Decomposing Language Models with Dictionary Learning"
draft: false
tags:
  - mech_interp
  - "#papers"
---
> *In this overview, I aim to do a high-level overview of the motivation and context for this paper, the method used, and key findings from the study. This is not a comprehensive summary (it does not go over the SAE setup in details nor does it explore evidence in detail for each finding). If you'd like more details, the full paper can be found [here](https://transformer-circuits.pub/2023/monosemantic-features). If you're looking to do a deep dive, their interactive interface is worth exploring*

#### Key Theme
The paper builds a case for using monosemantic features (rather than individual neurons) to help understand neural networks.
#### Motivation
A main focus of interpretability has always been to understand how neural networks work. And naturally, researchers had long hypothesized **neurons** -- that are the building blocks of these networks -- are the atomic unit for analysis. However, significant work found that neurons are confusing to work with. Why? Because neurons are **polysemantic** in nature.  What does this mean? Researchers found that neural networks often compress multiple feature directions into a single neuron, a concept called **superposition** (where a neural network has many more features than it has dimensions/neurons, and so rather than dedicating a neuron to each individual feature, the network ends up encoding each feature as a direction across multiple neurons).  As a result of superposition, each individual neuron gets triggered for multiple seemingly unrelated concepts, and this random behavior is called **polysemanticity** (a well-known example is when a single neuron was fired for HTTP request, Korean text and academic citation). This polysemantic behavior of neurons make them hard to work with and thus, a poor unit for understanding neural networks.  

So naturally, the question becomes, is there a better way?  

To address this, the paper proposes using features that are **monosemantic** (where each feature represents a distinct concept) as a unit of analysis.
#### Methodology
To learn these features, the authors propose using a **sparse dictionary learning** algorithm. Think of a dictionary as a vocabulary of all the English words that you can use. When you form a sentence (for example, "The hat is red"), you use only a subset of words from that dictionary. The goal is to find a vocabulary that contains individual features such that for each activation, only a sparse number of features are used.

The paper uses **Sparse Autoencoders** (SAEs) to apply dictionary learning in order to extract a large number of features from a one-layer transformer (a concept broadly referred to as decomposition in the paper). For a high-level overview of how SAEs operate, refer to this *[[An Intuitive Rundown of Some Key Concepts in Mech Interp|post]]*. In their implementations, they train SAEs on the MLP activations of the one-layer transformer, expanding a 512 neuron layer to anywhere from 512 (run A/0) - 131,072 (run A4) features. The SAE is trained to reconstruct the MLP activations while enforcing sparsity (via an L1 penalty) so that each input activates only a small number of features. This setup aims to recover a high-dimensional set of directions in the activation space that better represent the features.   

The authors evaluate the learned features using five computational proxies, human evaluation, and automated interpretability techniques to demonstrate that features are substantially more monosemantic and interpretable than individual neurons. They inspect individual features (Arabic script, DNA sequences, base64 encodings, Hebrew text), observe global patterns and discuss structural phenomena such as feature splitting (increasing SAE scale leads to previously entangled features separating into more granular ones) and finite-state-automata (where features coordinate to enable complex behavior). Through these results, the paper aims to provide new directions for understanding neural network behavior through interpretable features.
#### Key Findings
Through their results and example cases, the authors make four broad claims:
1. **Features are monosemantic**   
Each feature represents specifically one single context. They use a computational proxy defined by log likelihood to test feature activation. For example, they find that i) Arabic feature is specifically activated when there is Arabic text in the context (specificity) and ii) Arabic feature only activates for Arabic text in the context (sensitivity).
2. **Invisible in neuron basis (features are distinct from neurons)**  
There are active features that are not found in the neuron activations. For example, no distinct neuron is found to activate for Hebrew text which exists as a monosemantic feature.
3. **Enable model steering**  
Individuals features can be intervened on to cause appropriate downstream behavior. In the example for Arabic feature, the authors find that ablating (removing) the Arabic feature activation hurts the predictions of all Arabic tokens. An additional evidence is shown using logit weights where activating the Arabic feature increases the probability the network predicts Arabic script tokens.
4. **Universal across models (universality)**   
The authors train another one-layer transformer (B) with the same training parameters and architecture and a varying random initialization seed to discover that a particular feature is discovered in both the models, suggesting the universal nature of features. The authors hypothesize that these features can be consistently found across models of varying sizes, but leave it to future work to explore this.
#### More (structural) findings...
**Feature splitting**: When the autoencoder width (size) is increased, features are split to fit to more granular and concise descriptions, forming clusters of feature families. These granular features offer different resolutions for understanding a particular concept.  

**Finite-State-Automata**: Features are found to connect to one another to form a system that implements consecutive systematic behavior. For eg. the feature activating for capital letters (f1) and one for underscores (f2) work together to form a snake case variable name (with the f1 predicting the next token to be either f1 or f2 and the f2 predicting f1...).
#### Strengths
1. **Comprehensive Validation:** The authors use five computational proxies (with log-likelihood estimations), human evaluation with clear rubrics and two automated interpretability techniques (using GPT-4). Given that there's no standard metric for evaluating SAEs (at the time that this paper was published), varied evaluations (along with a combination of deep-dives and global analysis) offer faith in evidence.
2. **Promising Contribution and Justified Choices:** The authors build a solid case for why neurons are a poor unit for analysis and present a novel solution to how monosemantic features could potentially help understand models better. They provide an overview of why current approaches do not work and offer an elegant solution. Specifically, the expansion of the SAE from 1x (512) to 256x (131,072) features offered insight into how this approach can be tuned for granularity of features (which isn't the case for individual neurons). 
3. **Openness of Results:** The authors point out unexpected results (in Arabic when sensitivity metrics performed lower than expected), caveats addressing issues with their interpretability techniques, and apparent bugs (that they offer a potential explanation for via feature splitting).
#### Weaknesses
1. **Limited Scalability:** Since this was tested only on a 1-layer model, generalizability seems limited since the results might be different for multi-layer models. It also doesn't test on attention layers or on other architectures like CNNs, which further restricts generalizability.
2. **High Computational Cost**: Training SAEs is expensive and while the authors use this to frame interpretability as a computational problem, it still creates a barrier for researchers with limited resources to test out claims, and make further improvements.
3. **Misleading Claims for Universality:** The authors test it across 2 one-layer models that only differ in their random seed initializations. Considering these two tested models shared the same architecture and training params, more testing across varying models (probably fine tuned) and context would be appropriate to claim "universality".
4. **Incomplete coverage:** There are still some complex features that remain polysemantic.
#### Open Questions & Suggestions
1. With scaling SAEs revealing more and more granular features, is there a point where granularity simply becomes overwhelming? Could there ever truly be a universal set of "true features"?
2. The authors mention ignoring the dead and ultra-low density clusters for analysis since they barely have any significant effects on model behavior. To what extent is this true, and if so, maybe they could be dropped entirely?
3. Given that they're simply testing the hypothesis on a toy model (one-layer model), additionally, they could also compare feature representations from the base one-layer model to a fine tuned one (for a specific domain) to uncover more insights for corroboration.