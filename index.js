const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, callback) {
      for (const element in collection) {
        callback(collection[element]);
      }
      return collection;
    },

    map: function (collection, callback) {
      const newCollection = [];

      for (const element in collection) {
        newCollection.push(callback(collection[element]));
      }
      return newCollection;
    },

    // const callback = (0, 2, [1,2,3]) // 3 + 4 + 5 = 12

    reduce: function (collection, callback, acc) {
      for (const element in collection) {
        if (acc === undefined) {
          acc = collection[element];
        } else {
          acc = callback(acc, collection[element], collection);
        }
      }
      return acc;
    },

    find: function (collection, predicate) {
      let found = undefined;
      for (let i in collection) {
        if (predicate(collection[i])) {
          found = collection[i];
          break;
        }
      }
      return found;
    },

    filter: function (collection, predicate) {
      const filteredArr = [];
      for (let i in collection) {
        if (predicate(collection[i])) {
          filteredArr.push(collection[i]);
        }
      }
      return filteredArr;
    },

    size: function (collection) {
      if (Array.isArray(collection)) {
        return collection.length;
      } else {
        return Object.keys(collection).length;
      }
    },

    first: function (array, n = 0) {
      if (n === 0) {
        return array[n];
      } else {
        let first = [];
        for (let i = 0; i < n; i++) {
          first.push(array[i]);
        }
        return first;
      }
    },

    last: function (array, n = 0) {
      if (n === 0) {
        return array[array.length - 1];
      } else {
        let last = [];
        for (let i = 0; i < n; i++) {
          last.unshift(array[array.length - i - 1]);
        }
        return last;
      }
    },
    compact: function (array) {
      let compacted = [];

      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          compacted.push(array[i]);
        }
      }

      return compacted;
    },

    sortBy: function (array, callback) {
      let sorted = [...array];

      sorted.sort(function (a, b) {
        return callback(a) - callback(b);
      });

      return sorted;
    },

    flatten: function (array, shallow = false, flattened = []) {
      if (shallow) {
        for (let i in array) {
          if (Array.isArray(array[i])) {
            flattened = flattened.concat(array[i]);
          } else {
            flattened.push(array[i]);
          }
        }
      } else {
        for (let i in array) {
          if (Array.isArray(array[i])) {
            this.flatten(array[i], false, flattened);
          } else {
            flattened.push(array[i]);
          }
        }
      }
      return flattened;
    },

    keys: function (object) {
      let objKeys = [];
      for (let i in object) {
        objKeys.push(i);
      }
      return objKeys;
    },

    values: function (object) {
      let objValues = [];
      for (let i in object) {
        objValues.push(object[i]);
      }
      return objValues;
    },

    uniq: function (arr, isSorted = false, callback) {
      let modifiedArr = [];
      if (callback) {
        for (let i = 0; i < arr.length; i++) {
          modifiedArr.push(callback(arr[i]));
        }
      } else {
        modifiedArr = [...arr];
      }
      let finderArr = [];
      let uniqArr = [];

      console.log(modifiedArr);
      for (let i = 0; i < arr.length; i++) {
        if (finderArr.indexOf(modifiedArr[i]) === -1) {
          finderArr.push(modifiedArr[i]);
          uniqArr.push(arr[i]);
        }
      }

      if (!isSorted) {
        uniqArr = uniqArr.sort();
      }
      return uniqArr;
    },

    functions: function (object) {
      let sortedArr = [];
      for (let i in object) {
        typeof object[i] === "function" ? sortedArr.push(i) : null;
      }
      return sortedArr;
    },
  };
})();

fi.libraryMethod();
