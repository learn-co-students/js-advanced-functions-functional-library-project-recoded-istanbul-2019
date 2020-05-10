const fi = (function () {

  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (arg, callback) {
      if (Array.isArray(arg)) {
        for (let item of arg) { callback(item) }
      }
      else {
        for (let val of Object.values(arg)) { callback(val) }
        //for (let key in arg) { alert(arg[key]) }
      }
      return arg;
    },

    map: function (arg, callback) {
      let newArr, newObjVals;
      if (Array.isArray(arg)) {
        newArr = arg.map(callback);
        return newArr;
      }
      else {
        newObjVals = Object.values(arg)
        return newObjVals.map(callback)
      }
    },

    reduce: function (array, callback, initial) {
      let newArr = [...array];
      if (initial) {
        return newArr.reduce(callback, initial)
      }
      else { return newArr.reduce(callback) }
    },

    find: function (arg, callback) {

      let newArr, newObj, temp;
      if (Array.isArray(arg)) {
        newArr = arg.find(callback);
        return newArr;
      }
      else {
        newObj = arg;
        for (const [key, value] of Object.entries(newObj)) {
          temp = [key, value];
          return temp.find(callback)
        }
      }
    },
    filter: function (array, callback) {
      let newArr = [...array];
      return newArr.filter(callback)
    },
    size: function (arg) {
      let newArr, newObj;
      if (Array.isArray(arg)) {
        return newArr = arg.length;
      }
      else {
        newObj = arg;
        return Object.keys(newObj).length;
      }
    },
    first: function (array, num) {
      let newArr = [...array];
      if (num) {
        return newArr.filter((item, index) => index < num);
      }
      else {
        return newArr[0];
      }
    },
    //[1,2,3,4,5]
    last: function (array, num) {
      let newArr = [...array];
      if (num) {
        return newArr.filter((item, index) => index >= newArr.length - num);
      }
      else {
        return newArr[newArr.length - 1];
      }
    },
    compact: function (array) {
      let newArr = [...array];
      return newArr.filter(Boolean)
      //return newArr.filter(eliminate => { return !!eliminate; });
    },
    sortBy: function (array, callback) {
      let newArr = [...array], sinArr = [];
      if (typeof (newArr[0]) === 'number') {
        if (Number.isInteger(callback(newArr[0]))) {
          return newArr.sort((a, b) => a - b)
        }
        else {
          for (let i = 0; i < newArr.length; i++) {
            if (callback(newArr[i]) > callback(newArr[i + 1])) {
              let temp = newArr[i];
              newArr[i] = newArr[i + 1];
              newArr[i + 1] = temp;
              i = -1;
            }
          } return newArr;

        }
      }
      else { return callback(newArr).sort() }
    },
    flatten: function (array, state) {
      let newArr = [...array];
      if (state) { return newArr.flat(1) }
      else { return newArr.flat(Infinity) }
    },
    uniq: function (arg, state = 0, callback) {
      let newArr = [], temp2 = [];
      if (Array.isArray(arg)) {
        if (state !== 0) {
          for (let i = 0; i < arg.length; i++) {
            for (let j = 0; j < arg.length; j++) {
              //original [1, 2, 2, 3, 4, 6, 9]
              //mapped   [1, 2, 2, 0, 1, 0, 0]
              if (callback(arg[i]) !== callback(arg[j]) && !newArr.includes(arg[i]) && !temp2.includes(callback(arg[i]))) {
                temp2.push(callback(arg[i]));
                newArr.push(arg[i]);
                break;
              }
            }
          }
          return newArr;
        }
        else { return newArr = [...new Set(arg)] }
      }
    },
    keys: function (obj) {
      const newObj = Object.keys(obj);
      return newObj;
    },
    values: function (obj) {
      const newObj = Object.values(obj);
      return newObj;
    },
    functions: function (obj) {
      const newArr = [];
      /*for (let prop of Object.keys(obj)) {
        (typeof prop === "function") ? newArr.push(prop) : console.log("next");
      }*/
      /* for (let check of Object.keys(obj).sort((a, b) => (a < b) ? -1 : 1)) {
         (typeof obj === "function") ? newArr.push(check) : "";
       }*/
      Object.keys(obj).forEach(key => (typeof obj[key] == "function") ? newArr.push(obj[key]) : console.log("not fn"))
      return newArr.sort((a, b) => (a > b) ? 1 : -1);

    }
  }
})()

fi.libraryMethod()
