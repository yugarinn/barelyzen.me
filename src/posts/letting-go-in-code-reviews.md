# Letting go in code reviews
_2024-10-01_

I am pretty new at leading a team.
Up until now I had never had the chance to actually be the one paving the way.

I've *read* a lot about managing teams.

I've *been part* of a lot of teams.

I've *sporadically led* short-term projects.

So, of course, I had ideas about the kind of leader I wanted to be. I had several leaders I looked up to, still do. Some of them are personalities from the Internet whom I've never met and others are people that have led me IRL.

And yet, to the surprise of no one, I quickly found out that my preconceived plans about how THINGS HAVE TO BE™ are pretty much subject to my company's ability to hire talent and the actual characteristics of the people I end up collaborating with.

This last year I led a team of junior developers, which made me learn quite a bit about empathy, how to pass down knowledge and how to share my experiences. It has also taught me a lot about why I code the way I do. As they say, [teaching someone is the best way to learn](https://www.psychologytoday.com/us/blog/how-to-be-brilliant/201206/the-protege-effect).

So I just want to write down some of the insights that I gathered during this period, in no particular order:

## 1. Let go of the minor issues in code reviews

Look, I know how I like responsibilities to be shared across services, variables named and methods to be written.

Yet, I have learned to let go of minor stylistic issues and focus on the big picture when code reviewing.


## 2. The benefits of linting and static analysis tools

I think we, as a team, would loose soooo much time without them.

The linter allows us to ensure new code is kept clean and consistent within the codebase, while the static analyzer automatically warns us of silly mistakes that would otherwise have to be detected at code review time.   

## 3. Doubling down on my bet on tests

If the two previous points were all about offloading developer responsibilities onto automated tools, this one is quite the opposite and the thing that may cause the most friction, at least initially, among junior developers.

We won't deploy code that is not tested, period. We own our features through our tests, there is no other way to ensure that what we deploy is what was actually expected from us to develop.

## 4. Learn to write, and to write well

Here I'm just going to quote [Jason Fried and DHH's REWORK](https://basecamp.com/books/rework):

> "Clear writing is a sign of clear thinking. Great writers know how to communicate. They make things easy to understand. They can put themselves in someone else’s shoes. They know what to omit.
> 
> [...] Writing is making a comeback all over our society. Look at how much people email and text message now rather than talk on the phone. Look at how much communication happens via instant messaging and blogging. Writing is today’s currency for good ideas."

---

I look forward to revisiting this write-up some time from now and checking if it still holds true for me.

