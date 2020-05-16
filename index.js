const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
     for(let i in collection) {
       alert(collection[i]);
     }
     return collection;
    },

    map: function(array, callback) {
      let newArray = [];
      for(let i in array) {
        newArray.push(callback(array[i]));
      }
      return newArray;
    },

    reduce: function(collection, callback, acc) {
      for(let i in collection) {
        if(acc === undefined) {
          {acc= collection[i]}
        } 
        else {
          acc = callback(acc, collection[i], collection)
        }
      }
      return acc;
    },

    find: function(collection, predicate) {
      for(let i of collection){
        if(predicate(i)) 
        return i}
      return undefined
    },

    filter: function(collection, predicate) {
      let newCollection = [];
      for(let i in collection) {
        if(predicate(collection[i])){
           newCollection.push(collection[i]);
        }
      }
      return newCollection;
    },

    size: function(obj) {
      var count = 0;
      for(var prop in obj) {
          if(obj.hasOwnProperty(prop))
              ++count;
      }
      return count;
    },

    first: function(arr, n) {
      if(n === undefined) {
        return arr[0]
      } else {
        return arr.slice(0,n);
      }
    },
    last: function(arr, n) {
      if(n === undefined) {
        return arr[arr.length-1];
      }
      else{
        return arr.slice(arr.length - n);
      }
    },
    compact: function (collection) {
      let newCollection=[]
      for(let i =0; i< collection.length; i++) {
        if(collection[i]) newCollection.push(collection[i])
        }
        return newCollection;
    },
    sortBy: function(array, callback){
      let collection = [...array]
      return collection.sort(function(a,b){
        return callback(a)-callback(b)
      })
    },
    flatten: function(collection, shallow, newCollection = []) {
      if (!Array.isArray(collection)) {
        return newCollection.push(collection);
      }
      if (shallow) {
        for (let val of collection)
          if (Array.isArray(val)) {
            for (let i = 0; i < val.length; i++) {
              newCollection.push(val[i]);
            }
          } else {
            newCollection.push(val);
          }
      } else {
        for (let val of collection) {
          this.flatten(val, false, newCollection);
        }
      }
      return newCollection;
      },
      uniq: function (array, isSorted, callback){
        if(!isSorted && callback){
          let arr=[]
          let newArr=[]

          for(let i=0; i<array.length; i++){
            if(!newArr.includes(callback(array[i]))){
              arr.push(array[i])
              newArr.push(callback(array[i]))
            }
          }
          return arr;
        }
        else if(isSorted){
          let result=[]
          for(let i=0; i<array.length; i++){
            if(array[i] !== array[i+1])
            result.push(array[i])
          }
          return result
        }
        else{
          let result =[]
          for(let e in array){
            if(!result.includes(array[e]))
            {
              result.push(array[e])
            }
          }
          return result
        }
    },
    keys:function(object){
      return Object.keys(object)
    },
    values: function(object){
      let val=[]
      for (let i in object){
        val.push(object[i])}
        return val
      },
      functions: function(object){
        let val=[]
        for(let i in object){
          if(typeof object[i] == 'function'){
            val.push(i)}
          }
          return val
        },
  }
})()

fi.libraryMethod()
