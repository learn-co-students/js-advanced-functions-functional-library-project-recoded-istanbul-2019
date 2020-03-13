const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(obj, alert) {
      for(let i in obj){
        alert(obj[i])
      }
      return obj
    },

    map: function(col,func) {
      let newCol=[]
      for(let i in col){newCol.push(func(col[i]))}
      return newCol
    },

    reduce: function(col,fun,acc) {
        for(let i in col){
          if(acc===undefined)
          {acc=col[i]}
          else{
            acc=fun(acc,col[i],col)}
        }
        return acc
    },
    
    find: function(col,pre) {
      for(let i of col){if(pre(i)) return i}
      return undefined
    },
    
    filter: function(col,pre) {
      let newCol=[]
      for(let i of col){if(pre(i)) newCol.push(i)}
      return newCol
    },
    
    size: function(col) {
      return Object.keys(col).length
    },
    
    first: function(arr,n=1) {
      if(n==1)return arr[0]
      return arr.slice(0,n)
    },
    
    last: function(arr,n=1) {
      if(n==1)return arr[arr.length-1]
      return arr.slice(-n)
    },
    
    compact: function(arr) {
      let newArr=[]
      arr.map(x=>{if(!x)return; else newArr.push(x)})
      return newArr
    },
    
    sortBy: function(arr,fun) {
      let newArr=[...arr]
      return newArr.sort((a,b)=>fun(a)-fun(b))
    },
    
    flatten: function(arr,shallow=false) {
      /*if(shallow)return arr.flat()
      return arr.flat(Infinity)*/
      
      if(shallow){ 
        return arr.reduce((acc, val) => acc.concat(val), [])}
      function flatDeep(arr, d = 1) {
         return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
        }
        return flatDeep(arr, Infinity)
      },
    
    uniq: function(arr,sorted=false,fun=x=>x) {
      let newArr=[]
      let newVal=[]
      for(let x of arr){
        let val=fun(x)
        if(!newVal.includes(val)){
          newArr.push(x)
          newVal.push(val)
        }
      }
     return newArr
     /*.filter((item, index) => arr.indexOf(item) === index)*/
    },
    
    keys: function(obj) {
      return Object.keys(obj)
    },
    
    values: function(obj) {
      let val=[]
      for(let i in obj){val.push(obj[i])}
      return val
    },
    
    
    functions: function(obj) {
      let val=[]
      for(let i in obj){
        if(typeof obj[i]=='function'){
          val.push(i)}
      }
      return val
    },


  }
})()

fi.libraryMethod()
