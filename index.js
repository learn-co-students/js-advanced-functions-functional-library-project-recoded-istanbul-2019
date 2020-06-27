const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let i in collection){
        callback(collection[i]);
      }
      return collection;
    },

    map: function(collection, callback) {
      const newArray = [];

      for (let i in collection){
        newArray.push(callback(collection[i]));
      }
      return newArray;
    },

    reduce: function(collection, callback, acc) {
      for (let i in collection){
        if (acc === undefined){
          acc = collection[i]
        } else {
          acc = callback(acc, collection[i], collection);
        }
      }
      return acc;
    },

    find: function(collection, predicate) {
      let element = undefined;

      for (let i in collection){
        if(predicate(collection[i])){
          element = collection[i];
          break;
        }
      }
      return element;
    },

    filter: function(collection, predicate) {
      const filteredArray = [];

      for (let i in collection){
        if(predicate(collection[i])){
          filteredArray.push(collection[i])
        }
      }
      return filteredArray;
    },

    size: function(collection) {
      if (Array.isArray(collection)){
        return collection.length;
      } else {
        return Object.keys(collection).length;
      }
    },

    first: function(array, n) {
      let arr = [];

      if (!n) {
        return array[0]
      } else {
        for (let i = 0; i < n; i++) {
          arr.push(array[i])
        }
      }
      return arr;
    },


    last: function(array, n) {
      return (
        n ? array.slice(array.length - n, array.length)
        :
        array[array.length - 1]
      )
    },

    compact: function(array) {
      let noFalsy = [];

      for (let i = 0; i < array.length; i++){
        if (array[i]) {
          noFalsy.push(array[i])
        }
      }
      return noFalsy;
    },

    sortBy: function(array, callback) {
      let sortedArr = [...array];

      sortedArr.sort((a, b) => {
        return callback(a) - callback(b);
      })
      return sortedArr;
    },

    flatten: function(array, shallow) {
      let arr = [];

      for (let n in array) {
        if (shallow) {
          if (Array.isArray(array[n])) {
            arr = arr.concat(array[n])
          } else {
            arr.push(array[n])
          }
        } else {
          if (!Array.isArray(array[n])) {
            arr.push(array[n])
          } else {
            arr = arr.concat(this.flatten(array[n]))
          }
        }
      }
      return arr;
    },

    uniq: function(array, isSorted, callback) {
      let uniqueNumbers = [];
      let lastArray = [];
      let newArray = [];

      if (callback) {
        for (let i = 0; i < array.length; i++) {
          newArray.push(callback(array[i]))
        }
      } else {
        newArray = [...array]
      }

      for (let i = 0; i < newArray.length; i++) {
        if (uniqueNumbers.indexOf(newArray[i]) === -1) {
          uniqueNumbers.push(newArray[i])
          lastArray.push(array[i])
        }
      }

      if (isSorted) {
        return lastArray
      } else {
        return lastArray.sort((a, b) => a -b)
      }
    },
 
    //Object Functions

    keys: function(object) {
      let keys = [];

      for (let key in object) {
        keys.push(key)
      }
      return keys;
    },

    values: function(object) {
      let values = [];

      for (let key in object) {
        values.push(object[key])
      }
      return values;
    },

    functions: function(object) {
      let functions = [];

      for (let key in object) {
        if (typeof object[key] === "function") {
          functions.push(key)
        }
      }
      return functions
    },

  }
})()

fi.libraryMethod()
