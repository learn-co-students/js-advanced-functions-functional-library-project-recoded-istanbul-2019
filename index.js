const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
        collection.forEach(e=>callback(e))
    },

    map: function(collection, callback) {
        let newArr = [];
        for(let i=0 ; i<newArr.length ; i++){
          newArr.push(callback(collection[i]));
        }
        return newArr;
    },

    reduce: function(collection, callback, acc) {
      let i=1; 
      acc === undefined && (acc = collection[0], i=1)
      
        for(i ; i<newArr.length ; i++){
          acc = callback(acc,collection[i]);
        }
        return acc;
    },

    functions: function() {
      return ["libraryMethod","each","map","reduce"]
    },


  }
})()

fi.libraryMethod()
