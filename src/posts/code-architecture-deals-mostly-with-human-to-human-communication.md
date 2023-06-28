# Code Architecture deals mostly with human to human communication
_2023-06-28_

Lately, I have been reading and thinking about what Software Architecture is and why I have been finding it hard to find a consensus in the workplace when discussing what a "good" architecture looks like.

### Three concepts to evaluate software

In the process of writing down my thoughts I came to the conclusion that there are three main factors that can be used to evaluate a piece of software: correctness, performance and "ease to change". I think that Code Architecture is only (or at least mainly) concerned about the latter.

- **Correctness**: whether or not the software works as intended.

I find this to be a fuzzy concept and halfway between factual truth and interpretation since *r e q u i r e m e n t s*, the source of truth for the correctness of any piece of software, usually fail to offer a complete description of what is intended or needed.

Software architecture does nothing to address the correctness of a system; a single function of 5000 lines can do the exact same job as an elegant group of composed and aptly named pure functions or 10 different loosely coupled SOLID classes working together.

- **Performance**: how fast and resource efficient the software is.

This is a factual truth as it can be measured mathematically.

Again, architecture does nothing to improve the performance of software. I don't want to get into it, but I have a feeling that a case could be easily made about how all the scaffolding code that architecture requires actually hurts performance in most cases.

- **ETC (Ease To Change)**: how easy the software is to change.

How easy is for any given person to understand and be able to make changes to the code base, while also being sure that nothing is being broken. Also, I stole this concept from [The Pragmatic Programmer}(https://openlibrary.org/works/OL5748544W/The_Pragmatic_Programmer?edition=key%3A/books/OL7408140M).

While there are industry-accepted sets of best practices, there is no silver bullet that makes your code "ease to changeness" magically go up. Going further, what is considered easier to change may vary from team to team or even from culture to culture.

### What makes anything easy to change?

The ability to produce any kind of written media in an approachable and understandable manner needs empathy and experience understanding someone else's ideas. Our technology background allows us to write code, but it's empathy and experience what enables us to write easy to change code.

Code architecture main focus is to make software easier to change, it is intended to benefit us humans by making the code faster to understand and modify, and leaves aside the correctness and performance of the system. It forces us to understand how we, as an individual programmer or a team, think and organize.

When discussing code design and patterns I have usually found myself and others having a wrong mindset, as if we were discussing how to properly build a plane or a bridge, where there are actual physical constraints and scientific truths. In software, our constraints and truths consists of our way of understanding code and communicating ideas.

It makes sense then, to take a more human and emphatic approach when discussing an implementation and keep concepts like readability or code simplicity at the top in the list of priorities when deciding how to design an implementation.

While correctness and performance are undeniably important, I believe that at least one third of our focus should be on writing software that requires minimal effort to understand.
