const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      let arr;
      if (Array.isArray(collection)) {
        arr = collection;
      } else {
        arr = Object.values(collection);
      }
      for (let index = 0; index < arr.length; index++) {
        callback(arr[index]);
      }
      return collection;
    },

    map: function (collection, callback) {
      let newArr = [], arr;
      if (Array.isArray(collection)) {
        arr = collection;
      } else {
        arr = Object.values(collection);
      }
      for (let index = 0; index < arr.length; index++) {
        newArr.push(callback(arr[index]));
      }
      return newArr
    },

    reduce: function (collection, callback, acc) {
      if (!acc) {
        acc = collection[0];
        collection = collection.slice(1);
      }
      for (let index = 0; index < collection.length; index++) {
        acc = callback(acc, collection[index], collection);
      }
      return acc;
    },

    find: function (collection, predicate) {
      for (let index = 0; index < collection.length; index++) {
        if (predicate(collection[index])) {
          return collection[index];
        }
      }
      return undefined;
    },
    filter: function (collection, predicate) {
      let arr = [];
      for (let index = 0; index < collection.length; index++) {
        predicate(collection[index]) && arr.push(collection[index]);
      }
      return arr;
    },

    size: function (collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function (collection, stop) {
      let arr = [];
      if (stop) {
        for (let index = 0; index < stop; index++) {
          arr.push(collection[index]);
        }
        return arr;
      } else {
        return collection[0];
      }
    },

    last: function (collection, stop) {
      if (stop) {
        return collection.slice(collection.length - stop, collection.length);
      } else {
        return collection[collection.length - 1];
      }
    },

    compact: function (collection) {
      let arr = [];
      collection.forEach(element => {
        if (element) {
          arr.push(element);
        }
      });
      return arr;
    },

    sortBy: function (collection, callback) {
      const arr = [...collection];
      return arr.sort((a, b) => callback(a) - callback(b));
    },

    flatten: function flatten(array, shallow) {
      let arr = [];
      for (let number in array) {
        if (shallow) {
          if (Array.isArray(array[number])) {
            arr = arr.concat(array[number])
          } else {
            arr.push(array[number])
          }
        }
        else {
          if (!Array.isArray(array[number])) {
            arr.push(array[number])
          } else {
            arr = arr.concat(this.flatten(array[number]))
          }
        }
      }
      return arr;
    },

    uniq: function (array, isSorted, callback) {
      let uniqueNumbers = [], lastArray = [], newArray = [];
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
        return lastArray.sort((a, b) => a - b)
      }
    },

    keys: function (obj) {
      let keys = [];
      for (let key in obj) {
        keys.push(key);
      }
      return keys;
    },

    values: function (obj) {
      let values = [];
      for (let key in obj) {
        values.push(obj[key]);
      }
      return values;
    },

    functions: function (obj) {
      let functions = [];
      for (let key in obj) {
        if (typeof obj[key] === 'function') {
          functions.push(key);
        }
      }
      return functions;
    },


  }
})()

fi.libraryMethod()