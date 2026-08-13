---
title: A review of seminal papers in Scalable Distributed Systems
draft: false
tags:
  - papers
  - misc_topics
---
> *A note on format: Unlike traditional paper summaries that explain concepts in detail (LLMs handle that well), this is a "critical" review—my honest takes on what these foundational papers got right, where they fell short, and how they influenced my approach to building scalable systems.*
## What is a Distributed System, and why do we need them?
A distributed system, as the name suggests, is a **network of independent computers that work together as a single system.** When problems are realistically too big to be handled by a single machine, these systems offer **massive scaling capabilities** while ensuring reliable results. For example, Spotify streams millions of songs worldwide simultaneously, and LLMs like GPT rely on distributed systems to train and serve AI services at scale, enabling **parallel processing, fast data access, and fault tolerance.**

For a deeper yet accessible introduction, check out [_Introduction to Distributed System Design_](https://courses.cs.washington.edu/courses/cse452/22wi/papers/google-intro.html) and [*Distributed Systems for Fun and Profit by](https://book.mixu.net/distsys/single-page.html)* Mikito Takada. *[The first chapter](https://book.mixu.net/distsys/single-page.html#intro)* covers high-level goals like scalability, availability, and fault tolerance, and explains how abstractions, partitioning, and replication help achieve them.

---
Now that we have a working understanding of distributed systems, let's move on to some seminal papers:
## Paper 1: MapReduce: Simplified Data Processing on Large Clusters

**Authors:** Jeffrey Dean and Sanjay Ghemawat  
**Year:** 2008  
**Link:** *[Paper Link](https://doi.org/10.1145/1327452.1327492)*  
**Type:** Application/System Design Paper

**Key Idea**: A system design to efficiently process massive datasets by dividing work into two phases: **map** and **reduce**. The map phase **splits data across multiple machines** and applies a function to each piece. The reduce phase **aggregates the results** of individual pieces. For example, to count word frequencies across billions of documents, we could create multiple map workers to count words in their assigned documents, and then use reduce workers to aggregate the counts for each word across all mappers.

**Modern Relevance**: Influenced Hadoop and many cloud data processing frameworks today.

#### What Stood Out
- **Simple abstraction for complex problems**: MapReduce hides the complexities of distributed computing behind an intuitive interface, making it accessible to novice programmers to understand. The paper’s focus on practical implementations with tangible instances further strengthened its impact.
- **Built-in fault tolerance**: The authors acknowledge potential failures and have fail checks in place. Scheduling backup executions to avoid stragglers and output replication demonstrate strong cases for reliable design.

#### What Could Be Improved
- **Incomplete performance analysis**: The paper discusses locality benefits for performance (where most input data is read locally to conserve network bandwidth). However, it doesn't explore bottlenecks and trade-offs in performance as I/O overhead gets sufficiently large.
- **Limited generalizability evidence**: Evaluations focus heavily on Google’s infrastructure, without comparing alternative systems or addressing abstraction costs like debugging complexity across diverse algorithms.

#### Personal Takeaway
Fault tolerance being built directly into the programming model was a revelation: it's not an afterthought but a core design principle. Realizing how many modern systems we use (Hadoop, Spark, cloud data pipelines) trace back to the idea of map reduce made me appreciate how foundational papers shape entire ecosystems.

---
## Paper 2: Time, Clocks and the Events in a Distributed System

**Authors:** Leslie Lamport  
**Year:** 1978  
**Link:** *[Paper Link](https://dl.acm.org/doi/10.1145/359545.359563)*  
**Type:** Theoretical Foundation  

**Key Idea:** A good foundation for insights into **causality** in distributed systems, especially at a time when most systems were centralized. Introduces logical clocks to order events in distributed systems where machines lack synchronized physical clocks. The key insight: instead of asking “when did this happen?”, ask “did A happen before B?” Using the **happened-before** relationships and timestamps, processes can agree on even ordering without a global clock. For example, if process A sends a message at timestamp 5, process B updates its clock to at least 6 upon receiving it, establishing the **causal order**.

**Modern Relevance:** Foundation for vector clocks, version control systems (Git), and distributed databases (Cassandra, DynamoDB).

#### What Stood Out
- **Happened-before relation reframes time:** Rather than relying on physical clocks, Lamport showed that causal relationships are what truly matter in distributed systems—a paradigm shift that remains fundamental today. Think of individual components across time zones and how logical clocks might help ensure consistency.
- **Structured progression:** The paper builds from partial ordering to total ordering to physical clocks, each layer addressing limitations of the previous. This structured approach (with rules to be implemented and conditions for correctness) makes complex theory accessible.

#### What Could be Improved
- **Impractical fault tolerance:** The mutual exclusion algorithm requires all processes to participate; if any process fails, the system cannot proceed i.e. a single process failure halts the entire system. While acknowledged, the paper offers no practical recovery mechanisms or alternative designs for fault tolerance.
- **Physical clocks lack concrete grounding:** The transition to physical clocks becomes heavily mathematical without examples showing when and how practitioners should choose physical over logical clocks.

#### Personal Takeaway
While I knew about causality from operating systems, seeing it formalized for distributed systems crystallized why event ordering is so fundamental. This perspective reshapes how I think about designing coordination and consistency mechanisms across nodes that cannot rely on synchronized clocks. Additionally, I found this *[video](https://youtu.be/nfRouGH0oMg?si=5-GH2u1lT7aX649I)* fascinating, where Leslie Lamport discusses how relativity in physics influenced his thinking on causality and time in distributed computing. It's a unique glimpse into the origins of the paper and the thought process behind these foundational concepts.

---
## Paper 3: On the criteria to be used in decomposing systems into modules

**Authors:** D.L. Parnas  
**Year:** 1972  
**Link:** *[Paper Link](https://dl.acm.org/doi/10.1145/361598.361623)*  
**Type:** Software Design Principles  

**Key Ideas:** Introduces **information hiding** as the core principle for modular design—a concept familiar from object-oriented programming. Rather than dividing systems by processing steps (like a flowchart), Parnas argues that modules should hide design decisions likely to change. Using a KWIC index system, the paper compares two decompositions: flow-based decomposition (input → shift → alphabetize → output) versus one that hides implementation details behind abstract interfaces. When requirements change—like switching from in-memory to disk storage—the information-hiding approach confines changes to single modules.

**Modern Relevance:** Maps to the popular microservices architecture and API design that we see today. The "hide what varies" principle remains central to modern software engineering.

#### What Stood Out
- **Concrete comparative analysis:** The KWIC example with two modularizations makes the abstract principle tangible. Seeing how the same system, decomposed differently, handles change illuminates why design criteria matter.
- **Timeless insight on changeability:** Modules organized by hidden design decisions (data structures, algorithms, formats) prove far more adaptable than those organized by execution flow—a principle that directly informed microservices and clean architecture patterns I've encountered in practice.

#### What Could be Improved
- **Scalability discussion missing:** The paper doesn't address how information hiding scales to systems with hundreds of modules or explore the trade-offs when module dependencies become complex. Hidden implementation details that aid flexibility could complicate tracing errors across module boundaries in production systems, and this is worth discussing.
- **Oversimplifies module granularity:** The KWIC example works well for a small system, but the paper doesn't address how to determine optimal module size or handle scenarios where design decisions are deeply intertwined, making clean separation impractical without excessive interface complexity.

#### Personal Takeaway
Recognizing that modules should hide **what might change** rather than represent processing steps connected deeply with my experience refactoring legacy code (clean interfaces today mean manageable evolution tomorrow). The paper reinforced how abstraction and partial ordering (from earlier readings) combine in system design. Seeing these principles applied in production systems years later validates how foundational ideas shape entire engineering practices.

---
> *While these papers are quite dated, their intuition behind designing large-scale systems stay relevant to this date (I guess there's a reason they're called "foundational papers").*
