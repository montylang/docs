---
id: type-class
title: Types & Classes
---

## Classes

Let's lead with an example. Suppose we want to implement booleans:

```python
class Bool:
  True
  False
```

This code defines two new values we can use - `True` and `False`.

## Type classes

The above values aren't super useful right now, we can't do anything with them. Suppose we wanted an `equals` function to compare boolean values. We would want a function like:

```python
def equals(firstBoolean, secondBoolean)
```

In fact, we probably want this function for a lot of other classes like ints, lists, JSON objects, ...

That's where type classes come in:

```python
type Equal:
  def equals(self, self)
```

This defines a template that classes can base their `equals` methods off of. If a class implements this `equals` function, we know that we can compare two variables of that class. This function is actually called when you use the `==` operator in Monty.

The `self` is a special keyword that indicates which parameter to use for looking up the implementation of `equals`.

## Instances

Ok so how do we actually implement this function for a class? With instances!

```python
instance Bool of Equal:
  def equals(True, True):
    return True

  def equals(False, False):
    return True

  def equals(_, _):
    return False
```
