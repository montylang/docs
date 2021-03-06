---
id: functor
title: Functors
---

## Functors

Recall: A functor is something we can `map` over, applying a function to some underlying value.

Now that you know about type classes, classes, and collections, let's talk about how functors really work.

```python
type Functor:
  def map(self, function)
```

### Maybe Functor

Let's go back to the `Maybe` example, and see how we could implement it as a functor.

```python
class Maybe:
  Just(value)
  None
```

If we have a `Just(value)`, we should apply the function to `value`:

```python
Just(value).map(f) = Just(f(value))
```

If we have a `None`, we should do nothing

```python
None.map(f) = None
```

Putting these together:

```python
instance Maybe of Functor:
  def map(Just(value), f):
    return Just(f(value))

  def map(_, _):
    return None
```

### BTree

As promised, let's go over how to turn a BTree into a functor:

```python
class BTree:
  Node(value, left, right)
  Leaf
```

When we call `map` on a Node, we want to apply a function to the value, and all values on the left and right.

When we call `map` on a Leaf, we want to do nothing. Exactly the same as calling `None.map(f)`

```python
instance BTree:
  def map(Node(value, left, right), f):
    return Node(
      f(value),
      left.map(f),
      right.map(f),
    )

  def map(_, _):
    return Leaf
```

So, this isn't done automatically, but it's very simple to implement. And now, for any BTree we define, we can call `map` on it! Magical!
