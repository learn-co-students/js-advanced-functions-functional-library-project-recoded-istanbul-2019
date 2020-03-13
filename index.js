const fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (const iterator of collection) {
          callback(iterator)
        }
        
      } else {
        for (const [key, value] of Object.entries(collection)) {
          callback(value, key, collection);
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      let newArray = [];
      if (Array.isArray(collection)) {
       for (const iterator of collection) {
         newArray.push(callback(iterator))
       }
      } else {
        for (const [key, value] of Object.entries(collection)) {
          newArray.push(callback(value, key, collection));
        }
      }
      return newArray;
    },

    reduce: function(collection, callback, acc) {
      collection.forEach(element => {
        if (acc === undefined) {
          acc = element;
        } else {
          acc = callback(acc, element, collection);
        }
      });
      return acc;
    },
    find: function(collection, prediction) {
      for (let i = 0; i < collection.length; i++) {
        if (prediction(collection[i])) {
          return collection[i];
        }
      }
    },

    filter: function(collection, prediction) {
      let result = [];
      for (let i = 0; i < collection.length; i++) {
        if (prediction(collection[i])) {
          result.push(collection[i]);
        }
      }
      return result;
    },

    size: function(collection) {
      return Object.keys(collection).length;
    },

    first: function(collection, n) {
      let result = [];
      if (n === undefined) {
        n = 0;
        return collection[n];
      } else {
        if (n > collection.length) {
          n = collection.length;
        }
        n--;

        for (let index = 0; index <= n; index++) {
          result.push(collection[index]);
        }
        return result;
      }
    },

    last: function(collection, n) {
      let result = [];
      let length = collection.length;
      if (n === undefined) {
        n = 1;

        return collection[length - n];
      } else {
        if (n > collection.length) {
          n = 1;
        }
        // let index = collection.length - 1;
        let count = 0;
        while (count < n) {
          result.push(collection[length - n]);
          count++;
          length++;
        }
      }
      return result;
    },

    compact: function(array) {
      let resultArray = [];
      for (let i = 0; i < array.length; i++) {
        if (
          array[i] !== false &&
          array[i] !== null &&
          array[i] !== undefined &&
          !Number.isNaN(array[i]) &&
          array[i] != 0 &&
          array[i] != ""
        ) {
          //&&
          resultArray.push(array[i]);
        }
      }
      return resultArray;
    },

    sortBy: function(array, callback) {
      let result = [...array];
      if (typeof array[0] === "string") {
        result = result.sort();
      } else {
        result = result.sort((a, b) => callback(a) - callback(b));
      }

      return result;
    },
    flatten: function(collection, shallow = false, newArr = []) {
      if (!Array.isArray(collection)) {
        return newArr.push(collection);
      }
      if (shallow) {
        for (let val of collection)
          if (Array.isArray(val)) {
            for (let index = 0; index < val.length; index++) {
              newArr.push(val[index]);
            }
          } else {
            newArr.push(val);
          }
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr);
        }
      }
      return newArr;
    },

    uniq: function(array, isSorted = false, callback = false) {

      const result = [...array];

      function uniqueArr(element, index, self) {
        return self.indexOf(element) === index;
      }

      if (callback) {
        const modVals = new Set();
        const uniqVals = new Set();

        for (let elem of array) {
          const modElement = callback(elem);
          if (!modVals.has(modElement)) {
            modVals.add(modElement);
            uniqVals.add(elem);
          }
        }

        return Array.from(uniqVals);
      }

      return result.filter(uniqueArr);

    },

    keys: function(object){
      let result = [];
     for (const key in object) {
       result.push(key)
     }

     return result

    },
    values: function(object){
      let result =[];
      for (const key in object) {
        result.push(object[key])
      }
      return result
    },
    functions: function(object) {

      let result = [];
      for (const [key, val] of Object.entries(object)) {
        if(typeof(val) === 'function'){
          result.push(key)
        }
      }
      return result.sort()
    }
  };
})();

fi.libraryMethod();
