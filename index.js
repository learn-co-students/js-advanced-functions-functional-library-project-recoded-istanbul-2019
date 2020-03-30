const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert ) {
     for(let i in collection){
       alert(collection[i])
     }
     return collection
    },

    map: function(collection, func) {
      let newCollection=[];
      for(let i in collection) {
        newCollection.push(func(collection[i]))}
        return newCollection
    },

    reduce: function(collection,func, accum) {
      for(let i in collection){
        if(accum === undefined)
          {accum = collection[i]}
          else{
            accum=func(accum, collection[i], collection)}
          }
          return accum
    },
     
    find: function(collection,pre) {
      for(let i of collection){
        if(pre(i)) 
        return i}
      return undefined
    }, 
 
    filter: function(collection, pre) {
      let newCollection =[];
      for(let i in collection){
        if(pre(collection[i])){
          newCollection.push(collection[i])
        }
      }
      return newCollection;
    },

    size: function(collection){
        return Object.keys(collection).length
      },

    first: function(collection, n ){
      if(n === undefined){
        return collection[0]
      }
      else{
        return collection.slice(0,n)
      }
    },
    last : function(collection, n) {
      if( n=== undefined) {
        return collection[collection.length-1];
      }
      else{
        return collection.slice(collection.length - n);
      }
    },
      compact: function(collection){
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