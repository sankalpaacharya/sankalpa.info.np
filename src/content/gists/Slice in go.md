---
title: "Slices in Go"
description: "Understanding slices in Go"
tags: ["go", "programming"]
date: 2024-11-05
---

## Slice

A slice is a more flexible data structure than a traditional array; it is built on top of arrays and has a dynamic size, allowing it to as needed.

### Slice vs. Array

```go
a := [3]int{1, 2, 3} // array
s := []int{1, 2, 3} // slice
```

You can't append values to an array, but you can to a slice.

### Understanding `cap()` and `len()`

- `len()`: This function returns the number of elements currently in a variable.
- `cap()`: This function returns the capacity of a variable, which is the maximum number of elements it can hold without reallocating.

Let's `fmt.Printf` these two variables:

```go
a := [3]int{1, 2, 3} // array
s := []int{1, 2, 3} // slice

fmt.Printf("Length(a): %v Capacity(a): %v\n", len(a), cap(a))
fmt.Printf("Length(s): %v Capacity(s): %v\n", len(s), cap(s))

// Output:
// Length(a): 3 Capacity(a): 3
// Length(s): 3 Capacity(s): 3

```

Everything looks fine. Let's append a value to the slice and check the length and capacity again.

```go
a := [3]int{1, 2, 3} // array
s := []int{1, 2, 3} // slice

s = append(s, 101)

fmt.Printf("Length(a): %v Capacity(a): %v\n", len(a), cap(a))
fmt.Printf("Length(s): %v Capacity(s): %v\n", len(s), cap(s))
// Output:
// Length(a): 3 Capacity(a): 3
// Length(s): 4 Capacity(s): 6
```

The capacity of the slice increased. If you look at the line `s = append(s, 101)`, I'm reassigning a new slice to the variable `s`. When we append a new element to a slice, if there isn't enough space in the underlying array, Go creates a new underlying array, copies the existing elements, and appends the new element. The capacity of the slice may increase, often doubling the original capacity to optimize performance.

### Creating a Slice with make

You can also use the make function to create a slice:

```go
s := make([]int, 0, 5) // integer slice of length 0 and capacity 5
```

When you append to this slice, it will fill up to its capacity before needing to allocate a new underlying array. If the slice's length exceeds its capacity, Go will automatically manage the memory allocation for you.
