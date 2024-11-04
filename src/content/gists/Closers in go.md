---
title: "Closers in go"
description: "understanding closers in go"
tags: ["go", "prorgamming"]
date: 2024-11-5
---

## Clousers

Go functions may be closures. A closure is a function value that references variables from outside its body.

```go title="clousers.go"

func createCounter() func() int {
    count := 0
    increment := func() int {
        count++
        return count
    }
    return increment
}

func main() {
    counter1 := createCounter()
    counter2 := createCounter()

    fmt.Println(counter1()) // Output: 1
    fmt.Println(counter1()) // Output: 2
    fmt.Println(counter2()) // Output: 1
    fmt.Println(counter2()) // Output: 2
}

```
