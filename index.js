const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, alert) {
      
      for(let i in arr)
      {
        alert(arr[i])
      }
      return arr;

    },

    map: function(arr,alert) {
      let newArr=[];
      for(let i in arr)
      {
        newArr.push(alert(arr[i]));
      }
      return newArr;

    },

    reduce: function (collection, callback, acc) {
      for(let i in collection){
      if(acc===undefined){
        acc=collection[i];
      }
      else {
      
        acc=callback(acc,collection[i])
      }}
      return acc
    },
    
    find: function(collection, predicate) {
      for(let i in collection){
        if(predicate(collection[i])){
          return collection[i]
        }
      }

    },
    filter: function(collection, predicate) {
      let newCollection=[];
      for(let i in collection){
        if(predicate(collection[i])){
          newCollection.push(collection[i])
        }
      }
    return newCollection;
    },
    size: function(collection){
      if(collection instanceof Array){
        return collection.length
      }
      else {
        let num=0;
        for(let i in collection){
          num++;
        }
        return num;
      }
    },
    first: function(collection,n) {
      let newCollection=[];
      if(n===undefined)
      return collection[0];
      for(let i=0;i<n;i++){
        newCollection.push(collection[i])
      }
      return newCollection;
    },
    last: function(collection,n){
      let newCollection=[];
      if(n===undefined)
        return collection[collection.length-1]
      else {
      for(let i=(n>=collection.length?0:collection.length-n); i<collection.length; i++){
        newCollection.push(collection[i]);
      }
      return newCollection;
      }
    },
    compact: function(collection) {
      let newCollection=[];
      for(let i in collection){
        if(collection[i]){
          newCollection.push(collection[i])
        }
      }
      return newCollection
    },
    sortBy: function(collection, callback) {
      let newCollection= JSON.parse(JSON.stringify(collection));
      return newCollection.sort((a,b)=>callback(a)-callback(b))
    },
    
    
    
    
    
    
    
    
       // let newCollection=[];
      // if(shallow){
      //   // for(let i of collection){
      //   //   // if
      //   //   // newCollection.push()
      //   // }
      //   newCollection=collection.flat(1);
      // }
      // else{
      //   newCollection=collection.flat(Infinity);
      // }
      // return newCollection;
      
       // let newCollection=[];
    //   if(shallow){
    //   for(let i=0;i<collection.length;i++){
    //     if(collection[i] instanceof Array){
    //       newCollection.push(...collection[i])
    //     }
    //   else{
    //     newCollection.push(collection[i])
    //       }
    //     }
    //   }
    //   else{
     
    //   }
    //   return newCollection;
    
    // if(!shallow){
    //   return collection.flat(Infinity) 
    // }
    // else{
    //   return collection.flat()
    
    // }
    
   // return newCollection
    flatten: function(collection,shallow=false) {
    if(!shallow){
      return collection.flat(Infinity) 
    }
    else{
      return collection.flat()
    
    }
    
    return newCollection
    },
    uniq: function(collection,fd,callback) {
  console.log(callback===undefined)
      if(callback===undefined){
      for(let m=0;m<collection.length;m++){
      let help=collection[m];
      for(let i =m+1;i<collection.length;i++){
        if(collection[i]==help){
          collection.splice(i,1);
          i--;
        }
      }
}
}
else{
// let x=collection.map(e=>callback(e));
 let x=[];
  let z=[];
  for(let i of collection){
    if(!z.includes(callback(i))){
      x.push(i)
    }
    z.push(callback(i))
  }
  return x
      }
  
      return collection
    },
    keys: function(object) {
    return Object.keys(object);
    },
    values: function(object) {
return Object.values(object);
    },
    functions: function() {

    },
  }
})()

fi.libraryMethod()
