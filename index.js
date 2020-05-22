const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading the article!';
    },

    each: function(collection, callback) {
      for (const property in collection) {
        callback(collection[property], property, collection);
      }
      return collection;
    },

    map: function(collection, callback) {
      let arr = [];
      for (const property in collection) {
        arr.push(callback(collection[property]));
      }
      return arr;
    },

    reduce: function(collection, callback, acc) {
      if (acc != undefined) {
        for (const property in collection) {
          acc = callback(acc, collection[property], collection);
        }
      } else {
        acc = collection[0];
        for (let i = 1; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection);
        }
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (const property in collection) {
        if (predicate(collection[property]) === true) return collection[property];
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      const arr = [];
      for (const property in collection) {
        if (predicate(collection[property]) === true) arr.push(collection[property]);
      }
      return arr;
    },

    size: function(collection) {
      let size = 0;
      for (const property in collection) {
        size++;
      }
      return size;
    },

    first: function(array, n = 1) {
      if (n === 1) {
        return array[0];
      } else {
        return array.flat().slice(0, n);
      }
    },

    last: function(array, n = 1) {
      if (n === 1) {
        return array[array.length - 1];
      } else {
        return array.flat().slice(-n);
      }
    },

    compact: function(array) {
      const arr = [];
      for (const e of array) {
        if (e) {
          arr.push(e);
        }
      }
      return arr;
    },

    sortBy: function(array, callback) {
      const arr = array.slice(0);
      arr.sort((x,y)=>callback(x) - callback(y));
      return arr;
    },

    flatten: function(array, shalow = false) {
      if (shalow === true) {
        return array.flat();
      } else {
        return array.flat(Infinity);
      }
    },

    uniq: function(array, isSorted = false, callback) {
      if (callback === undefined) {
        callback = x => x;
      }
      const arr = [];
      let i, j, duplicate;
      for (i = 0; i < array.length; i++) {
        duplicate = false;
        for (j = 0; j < arr.length; j++) {
          if (callback(array[i]) === callback(arr[j])) {
            duplicate = true;
            break;
          }
        }
        if (duplicate === false) arr.push(array[i])
      }
      return arr;
    },

    keys: function(object) {
      const arr = [];
      for (const e in object) arr.push(e);
      return arr;
    },

    values: function(object) {
      const arr = [];
      for (const e in object) arr.push(object[e]);
      return arr;
    },

    functions: function(object) {
      const arr = [];
      for (let f in object) {
        if (f && (typeof object[f]).localeCompare('function') === 0) arr.push(object[f].name)
      }
      return arr.sort();
    },
  }
})()

fi.libraryMethod();
