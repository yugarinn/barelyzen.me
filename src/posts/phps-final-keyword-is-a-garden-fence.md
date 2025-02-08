# PHP's final keyword is a garden fence
_2025-02-08_

PHP's [`final` keyword](https://www.php.net/manual/en/language.oop5.final.php) has seen some controversy over the years. Those who are in favour often mention often mention reasons like avoiding ["inheritance chain of doom"](https://en.wikipedia.org/wiki/Multiple_inheritance) or encouraging composition over inheritance. Folks that dislike this feature argue that it limits flexibility or that it prevents freedom when extending the code.

In my current project, a REST API, I like to think about it as a garden fence. It marks the outermost classes of our business logic, and no further code should be used to arrive at the final response. This encourages me and my team to use composition, while also ensuring that every problem solution has the same structure, a recognisable pattern that we all understand.
