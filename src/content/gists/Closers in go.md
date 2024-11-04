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

## Goroutines

```go title="goroutines.go"
package main

// func printSmth(name string) {
// 	println(name)
// }

func main() {

	myChannel := make(chan string)
	myChannel2 := make(chan string)

	go func() {
		myChannel <- "data"
	}()

	go func() {
		myChannel2 <- "cow"
	}()

	select {
	case msgFromMyChannel := <-myChannel:
		println(msgFromMyChannel)
	case msgFromMyChannel2 := <-myChannel2:
		println(msgFromMyChannel2)

	}
	// go printSmth("1")
	// go printSmth("2")
	// go printSmth("3")
	// println(time.Second)
	// time.Sleep(time.Second * 4)
	// fmt.Println("this is me")

}

```
