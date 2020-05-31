const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(input, func) {
      if (input.length) {
        for (let el of input) {
         func(el);
        }
    }else{
        for (let key in input) {
            console.log(`${key}: ${input[key]}`);
             func(input[key])
            }
        // mArr.push(Object.values(input))
    }
    return input;
    },

    map: function(input, func) {
      let newArr = [];
    if (input.length) {
        for (let el of input) {
        newArr.push(func(el));
        }
    }else {
      for (let key in input) {
        console.log(`${key}: ${input[key]}`);
        newArr.push(func(input[key]))
      }
      }
      return newArr
    },

    reduce: function(input, func, init) {
    for(let i=0; i<input.length; i++) {
      if (init === undefined) {
        init = input[i]
      }else
         init = func(init, input[i], input);
    }
    return init;  
    },

    find: function(input, func) {
      let result;
      for (let i = 0; i < input.length; i++) {
        let isFound = func(input[i], i, input)
        if(isFound){
          result = input[i]
          break 
        }
      }
    return result;  
    },

    filter: function(input, func) {
      let result = [];
      for (let i = 0; i < input.length; i++) {
        let isFound = func(input[i], i, input)
        if(isFound){
          result.push(input[i]); 
        }
      }
    return result;  
    },

    size: function(input) {
      return Object.keys(input).length; 
    },

    first: function(input, n) {
      let result;
      if (!n) {
          result=input[0]
      }else {
        result = [];
          for (let i = 0; i < input.length; i++) {
              console.log(input[i])
              if (input[i] == n) {
                  result.push(input[i]);
                  break
                  
              }else {
                  result.push(input[i])
                  
              }
          }
      }
      return result
    },

    last: function(input, n) {
      if (!n) {
        return input[input.length - 1]
      }else {
        return input.slice(input.length - n, input.length)
      } 
    },

    compact: function(input) {
      let result = [];
      for (let el of input) {
        if (el) {
          result.push(el);
        }
      }
      return result;
    },

    sortBy: function(input, func) {
      let result = [...input];
      result.sort((x, y) => {
        return func(x) - func(y);
      });
      return result;
    },

    flatten: function(array, shallow){
      if(shallow){
        return array.flat(1);
      }
     
     return array.flat(Infinity);

    },

    uniq: function(array, isSorted, func){
      let uniq = [];
      let muArr = [];
      let resuArr = [];
      if (func) {
        for (let i = 0; i < array.length; i++) {
          muArr.push(func(array[i]))
        }
      } else {
        muArr = [...array]
      }

      for (let i = 0; i < muArr.length; i++) {

        if (uniq.indexOf(muArr[i]) === -1) {
          uniq.push(muArr[i])
          resuArr.push(array[i])
        }
      }

      if (isSorted) {
        return resuArr
      } else {
        return resuArr.sort((x, y) => x - y);
      }
  
    },

    keys: function(obj){
      return Object.keys(obj)
    },

    values: function(obj){
      return Object.values(obj)
    },

    functions: function(obj) {
      let result=[]
      for(let key in obj){
        if(typeof(obj[key]) === 'function') {
          result.push(key);
        }
      }
      return result;
    },


  }
})()
console.log()
fi.libraryMethod()
