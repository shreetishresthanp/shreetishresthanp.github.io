---
title: An Intuitive Rundown of Some Key Concepts in Mech Interp
draft: false
tags:
  - mech_interp
---
> *I've found that mech interp as a field is not quite beginner-friendly. So my goal, at least for this post, is to make the things I discuss as conceptually simple as it can be. Hopefully, it's intuitive enough to then go and understand the technical details. Is this far-fetched? We'll see.*

---
### Sparse Autoencoders (SAE): 

> *SAEs have been my favorite so far. Perhaps because I spent so much time reading about it, or perhaps because it closely aligns with my initial curiosity about representation in networks. Despite its pitfalls, I'd say it's a notable milestone in the evolution of mech interp. It's fun to see the trajectory of how researchers arrived at this.*

An autoencoder is a neural network designed to take in inputs, compress it (to capture important features and relationships) and then reconstruct the input data. It has an **1. encoder** that takes in an input (better known as activations that refer to data flowing through the model at some intermediate layer), maps those inputs to a **2. hidden representation layer** which compresses the input data, and a **3. decoder** that takes in the compressed data and tries to reconstruct an approximation of the original input.

A sparse autoencoder differs in the dimension of its hidden layer. It is said to be **overcomplete**, meaning the dimension of the hidden representations is greater than the dimension of the input to the encoder. This allows for **sparsity**, which ensures that only a few elements are be active (non-zero) in the hidden representations. 

With their sparse and overcomplete attributes, SAEs help tackle the problem caused by **superposition** (where a neural network has many more features than it has dimensions/neurons, and so rather than dedicating a neuron to each individual feature, the network ends up encoding each feature as a direction across multiple neurons) that leads to neurons being **polysemantic** (a single neuron representing seemingly multiple unrelated concepts; a famous example is where one neuron fired for academic citations, Korean text, HTTP requests) and thus, harder to understand.

Below are some resources for learning more about SAEs:
- This *[article](https://adamkarvonen.github.io/machine_learning/2024/06/11/sae-intuitions.html)* goes into some technical details of how SAEs work; pretty light and intuitive
- If you want more (and then some more) details on how SAEs are used for mech interp, check out this foundational *[work](https://transformer-circuits.pub/2023/monosemantic-features)* published by researchers at Anthropic.

---
#### Next-up 
- **Probing**
- **Activation Patching**
- **Logit Lens**
- **Circuits**
- **In-context learning/induction heads**
