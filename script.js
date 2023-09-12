function hasKey(key) {
  // Check if the key exists in the sampleObject
  if (sampleObject.hasOwnProperty(key)) {
    return true;
  } else {
    return false;
  }
}

// Define the global sampleObject
const sampleObject = {
  red: "#FF0000",
  green: "#00FF00",
  white: "#FFFFFF"
};

// Example usages:
console.log(hasKey("red"));    // Output: true
console.log(hasKey("blue"));   // Output: false
console.log(hasKey("white"));  // Output: true
