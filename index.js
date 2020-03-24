const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    each: function(arr,alert) {
        for (let element in arr){
           alert(arr[element])
        }
      return arr  
    },
     map: function(arr,func) {
      let array = []
      for (let element in arr){
        let k=func(arr[element])
        
        array.push(k)
      }
      return array
    },
  
    reduce: function(array,func,acc) {
        for(let element in array){
          if(acc===undefined)
          {acc=array[element]}
          else{
            acc=func(acc,array[element],array)}
        }
        return acc
    },
    find : function(array, predicate){
        for( let ele of array )
        {
        if(predicate(ele )) return ele  
        }
        return undefined 
    },
    filter : function(array, predicate){
      let arr = []
      for (let element of array){
        if(predicate(element)) arr.push(element)
      }
      return arr 
    },
    size:function(collection){
      let ind = 0 
      for(let element in collection){
          ind += 1
      }
      return ind
    },
     first: function(array,n){
      if (n === undefined){
        return array[0]
      }else{
        return array.slice(0,n)
      }
    },

    last: function(array,n){
      if (n === undefined){
        return array[array.length-1]
      }else{
        return array.slice(-n)
      }

    },compact: function(array){
      let compactVersion = []
      for (let index = 0; index < array.length; index++) {
        if(array[index]) compactVersion.push(array[index])
      }
      return compactVersion
    },
    sortBy: function(array, callback){
      let arr =[...array]
      return arr.sort(function(a, b){ return callback(a)-callback(b) })
    },
    flatten :function(array,bol){
     // let result = []
     // if(bol=== true) {return  [].concat(...array) }
      //else {return array.prototype.flat(Infinity)}
      function flatDeep(arr, d = 1) {
       return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                    : arr.slice();
    }
    if(bol=== true) return flatDeep(array, 1)
    else return flatDeep(array, Infinity)

    },
    uniq : function(array, isSorted, callback){
      if(!isSorted && callback){
         let arr =[]
  let arr1 = []

for (let i=0;i< array.length;i++){
   if(!arr1.includes(callback(array[i]))) {
    arr.push(array[i])
    arr1.push(callback(array[i]))
}}
return arr  
      }
      else if(isSorted){
        let res = [] 
        for (let i = 0 ; i<array.length ; i++){
          if(array[i] !== array[i+1]) res.push(array[i])
        }
        return res 
      }
      else
      {
          let res =[]
            for(let element in array)
            {
               if(!res.includes(array[element]))
                {
                  res.push(array[element])
                }
            }
        return res 
 
      }
      
    },
    keys:function(object){
     return Object.keys(object)
      
    },values: function(obj){
      const testObj = Object.assign({}, obj)
      let arr = Object.values(testObj)
      return arr
    },

    functions: function(obj) {
      let array = Object.keys(obj)
      let methods = []
      for (let index = 0; index < array.length; index++) {
        if((typeof obj[array[index]]) === "function") methods.push(array[index])
        
      }
      return methods.sort()
    },


  }
})()

fi.libraryMethod()
    
    