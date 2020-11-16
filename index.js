const weightedLottery = weights => {
    let choices = []
    for (key of Object.keys(weights)) {
      for (let i = 0; i < weights[key]; i++) {
        choices.push(key)
      }
    }
    return(choices[Math.floor(Math.random() * choices.length)])
  }
  
  const weights = {
    winning: 1,
    losing: 1000
  }
  
  const weightsTwo = {
    green: 1,
    yellow: 2,
    red: 3
  }
  
  console.log(weightedLottery(weights))
  console.log(weightedLottery(weightsTwo))


// [] creating an empty array

// The Object.keys() method returns an array of a given object's own enumerable property names,
// iterated in the same order that a normal loop would.

// JavaScript Array push() Method The push() method adds new items to the end of an array, 
// and returns the new length. Note: The new item(s) will be added at the end of the array.

// The floor() (Math.floor()) method rounds a number DOWNWARDS to the nearest integer, and returns the result.
// If the passed argument is an integer, the value will not be rounded.

// Math.random() used with Math.floor() can be used to return random integers.

