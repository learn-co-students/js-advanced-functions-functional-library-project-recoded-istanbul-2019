const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,fn) {
      if (Array.isArray(collection)){
        for(const element of collection){
          fn(element,collection.indexOf(element), collection)
        } }
      else if(typeof(collection)==='object'){
        for(const property in collection){
          fn(collection[property],property,collection)
        } 
      }
      return collection;
    },


    map: function(collection, callback) {

      let resultArr=[]  
      if (Array.isArray(collection)){
        for(const element of collection){
          resultArr.push(callback(element,collection.indexOf(element), collection))
        } 
      }
      else if(typeof(collection)==='object'){
        for(const property in collection){
          resultArr.push(callback(collection[property],property,collection))
        } 
      }
      return resultArr;

    },

    reduce: function(collection, callback, acc=0) {

      for(const val of collection){
        acc = callback(acc,val,collection)
      }
     
      return acc;
    },
  
    find: function(collection, predicate) {
      for(const val of collection){
        if(predicate(val)){
          return val
        }
      }
      return undefined;

    },

    filter: function(collection, predicate) {
      let resultArr=[]
      for(const val of collection){
        if(predicate(val)){
          resultArr.push(val)
        }
      }
      return resultArr;
    },

    size: function(collection) {
      let count=0
      if(Array.isArray(collection)){
        for(const element of collection){
          count++
        }
      }
      else if(typeof(collection)==='object'){
        for(const property in collection){
          count++
        } 
      }
      return count
    },
    // Array Functions
    first: function(array, n) {
      if(!n){
        return array[0];
      }
      let result=[]
      for(let i=0;i<n;i++){
        result.push(array[i]);
      } 
      return result;
    },

    last: function(array, n) {
      if(!n){
        return array[array.length-1];
      }
      let result=[]
      for(let i=1;i<=n; i++){
        result.unshift(array[array.length-i]);
      }
      return result;
    },

    compact: function(array){
      let resultArr=[]
      for(const e of array){
        if(!!e){
          resultArr.push(e)
        }
      }
      return resultArr;
    },

    sortBy: function(array, callback){
      let sorted=[...array]
      return sorted.sort(function(a, b){return callback(a)-callback(b)})

    },
    
    flatten: function(array, shallow){
      if(!shallow){
        return array.flat(Infinity);
      }
     return array.flat(1);

    },

    uniq: function(array, isSorted=false, callback){
      if(callback){
        let resultArr= array.map(callback);
        let sorted= resultArr.sort((a,b)=>a-b)
        let uniq = [...new Set(sorted)];
        return uniq;
      }else {
        if(isSorted){
        let uniq=[...new Set(array)]
        return uniq

        }
        else{
          return [...new Set(array)].sort((a,b)=>a-b)
        }
    }

    },

    //Object Functions
    keys: function(obj){
      return Object.keys(obj)
    },

    values: function(obj){
      return Object.values(obj)
    },


    functions: function(obj){
      let resultArr=[]
      for(const e in obj){
        if(typeof(obj[e])==='function'){
          resultArr.push(e);
        }
      }
      return resultArr.sort();
    },
  }
})()

fi.libraryMethod()


