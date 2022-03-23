# Basic Function

A collection of basic functions so that you don't have to write them every time.

## Table of Contents

  - [Installing](#installing)
  - [Example](#example)
  - [Functions](#functions)


# Installing

NPM:

```
npm i @advikguptadev/basic-function
```

CDN:

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

print()

```
// Print something (use instead of console.log)

print('Hello World')

// Output - Hello World
```

removeFromArray()

```
// Remove and item from array (arr = array to remove value from, value = value to remove from the array)

let arr = [10,11,12,13,14]
removeFromArray(arr, 13)

// Output - [10,11,12,14]
```

shuffleArray()

```
// Shuffle the contents of an array into a random order

let arr = [10,11,12,13,14]
shuffleArray(arr)

// Output - [12,14,11,10,13]
```
