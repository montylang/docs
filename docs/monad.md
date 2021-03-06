---
id: monad
title: Monads & Unwrap
---

## Monads

TODO: Add explanations

```python
instance Maybe of Monad:
  def bind(Just(value), f):
    return f(value)

  def bind(None, _):
    return None
```

```python
a = Just(3)
b = Just(4)

aPlusB = unwrap:
  innerA <- a
  innerB <- b
  wrap(innerA + innerB)
```
