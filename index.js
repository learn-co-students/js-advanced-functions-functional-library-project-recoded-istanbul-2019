const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection  , callBack) {
     for(let key in collection){
          alert(callBack(collection[key] , key , collection))
       }
        return collection;
    },

    map: function(collection , callBack) {
      const arr = []
      for(let key in collection){
        arr.push(callBack(collection[key] , key , collection));
      }
      return arr;
    },

    reduce: function(collection , callBack ,init) {
      if(init){
        return collection.reduce(callBack , init);
      }else{
        return collection.reduce(callBack);
      }
    },


    find: function(collection , predicate) {
      return collection.find(predicate)
    },

    filter: function(collection , predicate){
       return collection.filter(predicate);
    },

    size: function(collection){
      let numberOfValues =0;
      let values = Object.values(collection);
      for(let i =0; i < 5; i++){
        if(values[i]){
          numberOfValues++;
        }
      }
      return numberOfValues;
    },

    first: function(array ,n =0){
      if(n === 0){
        return array[0];
      }else{
        return array.filter(function(el , index){
          return index < n ;
        })
      }
    },

    last: function(array ,n){
      const newArr = []
      if(!n){
        return array[array.length -1 ];
      }else{
        for(let i  =0; i<array.length ; i++){
            let counter =(array.length - n )+i;
            if(counter < array.length){
              newArr.push(array[counter])
            }
           
        }
      }
      return newArr;
    },

    compact:function(arr){
      return arr.filter(Boolean)
    },

    flatten: function(array , shallow){
      if(!shallow){
        return array.flat(Infinity);
      }else{
        return array.flat(1);
      }
      
    },

    keys:function (object){
      return Object.keys(object);
    },

    values:function(object){
      return Object.values(object);
    },


    sortBy:function(arr , callBack){
      let newArr = []
      for(let i = 0;i<arr.length;i++){
        newArr.push(arr[i])
      }
      return newArr.sort(function (a,b){return callBack(a)-callBack(b)})
    },


    uniq:function(arr , isSorted , callback){
  
      let modifiedArr=[]
      if(callback){
        for(let i = 0 ;i <arr.length ; i++){
          modifiedArr.push(callback(arr[i]));
        }
      }else{
        modifiedArr = [...arr];
      }
      let finderArr = [];
      let uniqArr=[]

      for(let i = 0 ; i < arr.length ; i++){
      if(finderArr.indexOf(modifiedArr[i])===-1){
        finderArr.push(modifiedArr[i]);
        uniqArr.push(arr[i]);
      }}

      if(!isSorted){
        uniqArr=uniqArr.sort();
      }
      return uniqArr;
      
    },

    functions: function(object) {
      let newArr = [];
      for(let key in object){
        if(typeof object[key] === "function"){
          newArr.push(key)
        }
        
      }
      return newArr.sort();
   }
    
  }
})()

fi.libraryMethod()
