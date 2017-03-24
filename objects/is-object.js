/**
Checks whether an object is a plain, vanilla object.  Not an array, not null, not a function.  Just an object.

isObject({a: 1}) // true
isObject({}) // true
isObject({a: ['foo']}) // true

isObject(null) // false
isObject('foo') // false
isObject(['foo', 'bar']) // false
isObject(function() {}) // false
*/
export default function isObject(item) {
  return (typeof item === 'object' && !Array.isArray(item) && item !== null)
}

