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
        // newArr.push(Object.values(input))
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
      let acc = init === undefined ? 0 : init;
    for(let i=0; i<input.length; i++) {
         acc = func(acc, input[i], input);
    }
    return acc;  
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
      let result;
      if (!n) {
          result=input.pop();
      }else {
        result = [];
          for (let i = 0; i < input.length ; i++) {
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

    functions: function() {

    },


  }
})()

fi.libraryMethod()
