const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
          for (const i in collection) {
            if (collection.hasOwnProperty(i)) {
               callback(collection[i]);
            }
          }
          return collection;
    },

    map: function(collection, callback) {
        let newCollection = [];
        for(const i in collection) {
          let element = callback(collection[i]);
          {newCollection.push(element)};
        }
        return newCollection;
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
