# Basic Function

A collection of basic functions so that you don't have to write them every time.

## Table of Contents

  - [Installing](#installing)
  - [Example](#example)
  - [Functions](#functions)
    - [Print](#print)
    - [Remove From Array](#remove-from-array)
    - [Shuffle Array](#shuffle-array)
    - [Merge Arrays](#merge-arrays)
    - [Merge Objects](#merge-objects)
    - [Measure Function Duration](#measure-function-duration)


# Installing

Using npm:

```
npm i @advikguptadev/basic-function
```

Using jsDelivr CDN:

```
<script src="https://cdn.jsdelivr.net/gh/Advik-Gupta/basic-function/cdn.min.js"></script>
```

# Example

```
const { print } = require('@advikguptadev/basic-function');

// Print function inspired by python (use instead of console.log)
print('Hello World');
```

# Functions

#### Print

```
// Print something (use instead of console.log)

print('Hello World')

// Output - Hello World
```

#### Remove From Array

```
// Remove and item from array (arr = array to remove value from, value = value to remove from the array)

let arr = [10,11,12,13,14]
removeFromArray(arr, 13)

// Output - [10,11,12,14]
```

#### Shuffle Array

```
// Shuffle the contents of an array into a random order

let arr = [10,11,12,13,14]
shuffleArray(arr)

// Output - [12,14,11,10,13]
```

#### Merge Arrays

```
// Merge any two arrays

let arr1 = [1,2,3]
let arr2 = [4,5,6]
mergeArrays(arr1,arr2)

// Output - [1,2,3,4,5,6]
```

#### Merge Objects

```
// Merge any two objects

let object1 = {firstName: "Advik"}
let object2 = {lastName: "Gupta"}
mergeObjects(object1,object2)

// Output - {firstName: "Advik", lastName: "Gupta"}

// Remember an object can only have one key of the same name. If you pass 2 objects with same keys then only the second pair of keys will be there in the returned object. For eg -

let object1 = {firstName: "Advik"}
let object2 = {firstName: "William"}
mergeObjects(object1,object2)

// Output - {firstName: "William"}
```

#### Measure Function Duration

This functions takes three arguments. The first one is the function you want to measure the duration of. The second is any arguments you want to pass into the funtion, these should be passed in an array, if none are passed then the funtion will be called without any arguments. And the last being a boolean value which means wether you want the output of the function to be logged or not, this is false by default.

This is the format of the funtion = functionDuration(function1, function1arguments = [], printResult = false)

```
// Measure the duration it takes to run any function

let print100 = function () {
  for(let i=0; i < 100; i++) {
    console.log(i)
  }
}

functionDuration(print100)

// Output - 'This function took 13.299999952316284 milliseconds to operate.'

// Example with arguments

let print100 = function (name) {
  for(let i=0; i < 100; i++) {
    console.log(`${name} - ${i}`)
  }
}

functionDuration(print100, ['advik'])

// Output - 'This function took 12 milliseconds to operate.'
```