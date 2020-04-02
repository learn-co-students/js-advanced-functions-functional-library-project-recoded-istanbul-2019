const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, fn) {

      if(Array.isArray(obj)){
        for(let elem of obj){
           fn(elem)
        }
      }
      else{
        for(let val in obj){
            fn(obj[val])
        }
      }
      return obj
    },

    map: function(obj,fn) {

        let newObj = obj
        let res = []

        if(Array.isArray(newObj)){
          for(let elem of newObj){
             res.push(fn(elem))
          }
        }
        else{
          for(let val in newObj){
              res.push(fn(newObj[val]))
          }
         
        }
      
        return res
      },

    reduce: function(collection,callback,acc=0) {

      for(let elem in collection){
        if(!acc){
          acc=collection[elem]
        }
        else{
          acc=callback(acc,collection[elem],collection)}
      }
      return acc
       
   
    },

    find: function(collection, test) {
      if(Array.isArray(collection)){
      for(let elem of collection){
        while(test(elem)){
          return elem
        }
      }
    }  

    },

    filter: function(collection,test){
      let res = []
      for(let elem of collection){
        if(test(elem))
        res.push(elem)
      }

      return res
    
    },

    size: function(collection) {
      if(Array.isArray(collection)){
        return collection.length
      }
      else{
        return Object.keys(collection).length
      }

    },

    first: function(arr,n=0) {
      if( n!==0 ){
        return arr.slice(0,n)
      }
      else{
        return arr[n]
      }
      

    },

    last: function(arr,n=1) {
      if(n!==1){
        return arr.slice(-n)
      }
      else{
        return arr[arr.length-1]
      }
      

    },

    compact: function(arr){
      let newArr = []
      for(let elem of arr){
        if(elem){
          newArr.push(elem)
        } 
        
      }
      return newArr

    },

    sortBy: function(arr,callback){
      let newArr = [...arr]

      return newArr.sort(function(a, b){return callback(a)-callback(b)})
      
    
    },


    flatten: function(arr,shallowVal=false){
      if(shallowVal){
        return arr.flat()
      }
      else{
        return arr.flat(Infinity)
      }

    },

    uniq: function(arr, isSorted=false,callback=null){
          if(callback){
            let newArr = arr.map(callback)
          return [...new Set(newArr.sort((a,b)=>a-b))]
        }else{
            if(isSorted){
            return [...new Set(arr)]
        }
        else{
          return [...new Set(arr)].sort((a,b)=>a-b)

        }

    }

  
      
    },

    keys: function(obj){
       return Object.keys(obj)
    },

    values: function(obj){
      return Object.values(obj)
   },


   functions: function(obj){
    let arr = [];
    for (let [key, val] of Object.entries(obj)) {
      if(typeof val === 'function'){
        arr.push(key)
      }
    }
    return arr.sort()
    
 },


  }
})()

fi.libraryMethod()


