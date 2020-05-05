const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      if (collection instanceof Array) {
        const newCollec = collection.slice()
        // console.log(newCollec)
      }
      else {
        const newCollec = Object.values(collection)
        // console.log(newCollec)
        for (let index = 0; index < newCollec.length; index++) {
          callback(newCollec[index]);
        }
        return collection
      }

    },

    map: function (collection, callback) {
      collection = Object.values(collection)
      const array = []
      for (let index = 0; index < collection.length; index++) {
        array.push(callback(collection[index]))

      }
      return array

    },

    reduce: function (collection, callback, acc) {
      if (acc === undefined) {
        acc = collection[0]
        collection = collection.slice(1)
      }

      for (let index = 0; index < collection.length; index++) {
        acc = callback(acc, collection[index], collection);

      }
      return acc
    },

    find: function (collection, predicate) {


      for (let index = 0; index < collection.length; index++) {
        if (predicate(collection[index])) {
          return collection[index]
        }

      }
      return undefined


    },
    filter: function (collection, predicate) {
      let array = []

      for (let index = 0; index < collection.length; index++) {
        if (predicate(collection[index])) {
          array.push(collection[index])

        }

      }
      return array


    },
    size: function (collection) {

      if (collection instanceof Array) {
        return collection.length
      }
      else {

        collection = Object.keys(collection)
        return collection.length
      }

    },
    first: function (collection, stop) {
      let array = []
      if (!stop) {
        return collection[0]
      }
      else {
        for (let index = 0; index < stop; index++) {
          array.push(collection[index])

        }
        // console.log(array)
        return array
      }

    },
    last: function (collection, stop) {

      if (!stop) {
        return collection[collection.length - 1]
      }
      else {

        return collection.slice(collection.length - stop, collection.length)
      }
    },
    compact: function (collection) {
      let array = []
      collection.forEach(element => {
        if (element) {
          array.push(element)
        }
      });
      return array
    },
    sortBy: function (collection, callback) {
      const array = [...collection]
      console.log(array.sort())
      return array.sort(function (a, b) {

        return callback(a) - callback(b)
      })
    },
    flatten: function flatten(array, shallow) {
      let arr = []
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
      console.log(arr)
      return arr
    },
    uniq: function (array, isSorted, callback) {
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
        return lastArray.sort((a, b) => a - b)
      }
    },
    keys: function (object) {
      let keys = [];
      for (let key in object) {
        keys.push(key)
      }
      return keys
    },

    values: function (object) {
      let values = [];
      for (let key in object) {
        values.push(object[key])
      }
      return values
    },

    functions: function (object) {
      let functions = [];
      for (let key in object) {
        if (typeof object[key] === 'function') {
          functions.push(key)
        }
      }
      return functions
    },


  }
})()

fi.libraryMethod()
