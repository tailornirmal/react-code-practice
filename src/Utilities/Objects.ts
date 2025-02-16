// Problem - 1
// Bengaluru A-Startup SDE II: Inversion of Object
// Given an object make the keys as values and values as keys.
// Defintely have to handle duplicates and make an assumption that it's values are only String

// Invert(Object)
// .then('Use only array.reduce() to built the object')
// .then('Avoid any mutations')
// .then('Use ES 6 mostly') // Expected to use spread(`...obj`) and destructuring of the parameters

// // PS: .then() means its a follow-up question and not real code XD

// Problem - 2

// Bengaluru A-Startup SDE II: Object flatten to all levels
// Recursively destructure if the type of value is an object
// Alternatively, use the obj.flat(n) where n is the number of levels the flatten will get affected.
// Do not prefer this because, for a random object, the nth level nesting is unknown. If it's known, then it's the best solution. Infinity works but isNaN(Infinity) is true.
// Be mindful of using Object.toString() to check the type of value instead of instanceof as it more efficient and doesn't need additional checks.
// Here's a much advanced flatten by npm module called flat: https://github.com/hughsk/flat/blob/master/index.js#L16

// Traverse and flat Object

var test = {
  a: "jack",
  b: {
    c: "sparrow",
    d: {
      e: "hahaha",
    },
  },
};

function traverseAndFlatten(
  currentNode: object,
  target: object,
  flattenedKey: any
) {
  for (var key in currentNode) {
    if (currentNode.hasOwnProperty(key)) {
      var newKey;
      if (flattenedKey === undefined) {
        newKey = key;
      } else {
        newKey = flattenedKey + "." + key;
      }

      var value = currentNode[key];
      if (typeof value === "object") {
        traverseAndFlatten(value, target, newKey);
      } else {
        target[newKey] = value;
      }
    }
  }
}

function flatten(obj: object) {
  var flattenedObject = {};
  traverseAndFlatten(obj, flattenedObject);
  return flattenedObject;
}

var flattened = JSON.stringify(flatten(test));
console.log(flattened);

// Output

// {"a":"jack","b.c":"sparrow","b.d.e":"hahaha"}

// === Code Execution Successful ===

// Traverse and flat JS Array

const array = [4, 3, 44, 6, 3, [2, 6, [44, 7, 3]]];

const recursiveFlatten = (array) => {
  const reducer = (a, b) => {
    return a.concat(Array.isArray(b) ? recursiveFlatten(b) : b);
  };
  return array.reduce(reducer, []);
};

console.log(recursiveFlatten(array));

// Output
// [
//     4, 3, 44, 6, 3,
//     2, 6, 44, 7, 3
//  ]
