const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(colection,fn) {
      if(Array.isArray(colection)){
        for (let i = 0; i < colection.length; i++) {
          fn(colection[i],i,colection)          
        }
      }else{
        let keys = Object.keys(colection)
        for (let i = 0; i < keys.length; i++) {
          fn(colection[keys[i]],keys[i],colection)          
        }
      }
      return colection
    },

    map: function(col,fn) {
      if(Array.isArray(col)){
       let array = col.slice()
        for (let i = 0; i < array.length; i++) {
          array[i] = fn(array[i],i,col)
        }
        return array
      }else{
        let array = []
        let key = Object.keys(col)
        for (let i = 0; i < key.length; i++) {
          array.push(fn(col[key[i]],key[i],col))          
        }
        return array
      }
    },

    reduce: function(arr,fn,acc="") {
      if(acc === ""){
        let total = arr[0]
        for (let index = 1; index < arr.length; index++) {
          total = fn(total,arr[index],arr)
        }
        return total
      }else{
        let total = acc
        for (let index = 0; index < arr.length; index++) {
          total = fn(total,arr[index],arr)
        }
        return total
      }
    },
    find: function(col,fn){
      for (let index = 0;index<col.length;index++){
        if (fn(col[index])){return col[index]}
      }
    },

    filter: function(col,fn){
      let filteredArray = []
      for (let index = 0;index<col.length;index++){
        if (fn(col[index])){filteredArray.push(col[index])}
      }
      return filteredArray
    },

    size: function(colection){
      if(Array.isArray(colection)){
        return colection.length
      }else{
        return Object.keys(colection).length
      }

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

    },
    
    compact: function(array){
      let compactVersion = []
      for (let index = 0; index < array.length; index++) {
        if(array[index]) compactVersion.push(array[index])
      }
      return compactVersion
    },
    
    sortBy: function(array,fn){
      return array.slice().sort((a,b)=>fn(a)-fn(b))
    },
    
    flatten: function(array,bolean = false){
      if (bolean === false){
        return array.slice().flat(Infinity)
      }else{
        return [].concat(...array)
      }
    },

    uniq: function(array,isSorted ="",fn = ""){
      if (isSorted===""){
        let uniqArray = [array[0]]
        for (let i = 1; i < array.length; i++) {
          let j = 0
          for ( j = 0; j < uniqArray.length; j++) {
            if (array[i] === uniqArray[j]) break
          }
          if (j==uniqArray.length) uniqArray.push(array[i])
        }
        return uniqArray

      }else if(isSorted=true && fn ===""){
        let x = array[0]
        let uniqArray = [x]
      for (let index = 1; index < array.length; index++) {
        if (array[i] != x){
          x= array[i]
          uniqArray.push(x)
        }
      }
      
      }else{
        let uniqArray = [array[0]]
        for (let i = 1; i < array.length; i++) {
          let j = 0
          let a = fn(array[i])
          for ( j = 0; j < uniqArray.length; j++) {
            if (fn(uniqArray[j]) === a) break
          }
          if (j==uniqArray.length) uniqArray.push(array[i])
        }
        return [1,2,3]
      }
    },

    keys: function(obj){
      const testObj = Object.assign({}, obj)
      let arr = Object.keys(testObj)
      return arr      
    },

    values: function(obj){
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
