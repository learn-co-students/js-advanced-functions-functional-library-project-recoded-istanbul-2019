const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
        for(let i in collection){
          alert(collection[i])
        }
        return collection
    },

    map: function(collection, callback) {
      const newArr = []
      for(let i in collection)
      {
        newArr.push(callback(collection[i]));
      }
      return newArr;
    },

    reduce: function(collection, callback, acc) {
      for(let i in collection){
        if (acc === undefined) {
          acc = collection[i]
        }else{
          acc = callback(acc, collection[i], collection)
        }
      }
      return acc
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i]) === true) {
          return collection[i];
        }
      }
    },

    filter: function(collection, predicate){
      const arr = []
      for (let i = 0; i < collection.length; i++){
        if(predicate(collection[i]) === true){
           arr.push(collection[i])
        }
      }
      return arr
    },

    size: function(collection){
      return Object.keys(collection).length
    },

    first: function (array, n) {
      if (n === undefined) {
        return array[0];
      } else {
        return array.slice(0, n);
      }
    },

    last: function (array, n) {
      if (n === undefined) {
        return array[array.length-1];
      } else {
        return array.slice(array.length - n);
      }
    },

    compact: function(array){
      let newArray = [];
      for (let i = 0; i < array.length; i++) {
        if (!!array[i] === true) {
          newArray.push(array[i]);
        }
      }
      return newArray;
    },

    sortBy: function(array, callback){
      let copyArray = [...array];
      copyArray.sort(function (a, b) { return callback(a) - callback(b) });
      return copyArray;
    },

    flatten: function(array, shallow = false, newArray = []) {
      if (!Array.isArray(array)) {
          return newArray.push(array)
      }
      if (shallow) {
          for (let value of array) {
              if (Array.isArray(value)) {
                  for (let i = 0; i < value.length; i++) {
                      newArray.push(value[i])
                  }
              } else {
                  newArray.push(value)
              }
          }
      } else {
          for (let value of array) {
              this.flatten(value, false, newArray)
          }
      }
      return newArray
  },
  
  uniq: function (array, isSorted = false, callback = (x) => x) {
      //[1, 2, 3, 6], false, (x => x % 3)
      let newCol = [];
      for (let i of array) {
        let counter = 0;
        for (let n of newCol) {
          if (callback(n) === callback(i)) {
            counter++;
          }
        }
        if (counter < 1) {
          newCol.push(i)
        }
      }
      return newCol;
    },

  keys: function (object) {
      return Object.keys(object);
  },

  values: function (object) {
      return Object.values(object);
  },

  functions: function (object) {
    let func = [];
    for (let i in object) {
      if (typeof object[i] === "function") {
        func.push(i);
      }
    }
    return func;
  }


  }
})()

fi.libraryMethod()
