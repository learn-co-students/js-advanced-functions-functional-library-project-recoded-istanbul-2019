const fi = (function() {
    return {
        libraryMethod: function() {
            return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
        },

        each: function(collection, callback) {
            for (const key in collection) {
                if (collection.hasOwnProperty(key)) {
                    callback(collection[key]);
                }
            }

            return collection
        },

        map: function(collection, callback) {
            let newArr = []
            for (const key in collection) {
                if (collection.hasOwnProperty(key)) {
                    newArr.push(collection[key])
                }

            }
            return newArr.map(element => {
                return callback(element);
            })
        },

        //   reduce: function(arr, callback, acc) {
        //     let collection = arr.slice(0)

        //     if (!acc) {
        //         acc = collection[0]
        //         collection = collection.slice(1)
        //     }

        //     for (let i = 0; i < collection.length; i++) {
        //         acc = callback(acc, collection[i], collection)
        //     }
        //     return acc;
        // },

        reduce: function(arr, cb, acc) {
            let collection = arr.slice(0)

            if (!acc) {
                acc = collection[0]
                collection = collection.slice(1)

            }
            for (let index = 0; index < collection.length; index++) {
                acc = cb(acc, collection[index], collection)
            }
            return acc

        },


        find: function(arr, cb) {
            let i = 0
            let returnVal
            while (i < arr.length) {
                if (cb(arr[i]) === true) {
                    returnVal = arr[i]
                    break
                } else {
                    i++
                }
            }
            return returnVal
        },

        filter: function(arr, cb) {
            let newArr = []
            arr.forEach(element => {
                if (cb(element) === true) {
                    newArr.push(element)
                }
            })
            return newArr;
        },
        size: function(arr) {
            let i = 0
            for (const key in arr) {
                if (arr.hasOwnProperty(key)) {
                    i++;
                    console.log(arr[key]);

                }
            }

            return i
        },

        first: function(arr, n) {
            let newArr = []
            if (!n) {
                return arr[0]
            } else {
                for (let index = 0; index < n; index++) {
                    newArr.push(arr[index]);

                }
                return newArr
            }
        },
        //n=2, length = 3, index=2
        last: function(arr, n) {
            let newArr = []
            if (!n) {
                return arr[arr.length - 1]
            } else {
                for (let index = arr.length - n; index < arr.length; index++) {
                    newArr.push(arr[index]);


                }
                return newArr
            }
        },
        compact: function(array) {
            let newArr = []
            for (let index = 0; index < array.length; index++) {
                array[index] ? newArr.push(array[index]) : console.log('falsy');
            }
            return newArr



        },
        sortBy: function(arr, cb) {
            let newArr = arr.slice(0)
            return newArr.sort(function(a, b) { return cb(a) - cb(b) })
        },
        flatten: function(arr, par) {
            if (!par) {
                return arr.flat(Infinity)
            } else {
                return arr.flat()
            }
        },

        uniq: function(arr, isSorted, cb) {
            if (!isSorted && !cb) {
                return arr.filter((item, index) => arr.indexOf(item) === index)
            } else {
                let arrUniq = arr.filter((item, index) => arr.indexOf(item) === index)
                let uniqSet = new Set(arr.map(element => {
                    return cb(element);
                }))

                let backToArray = [...uniqSet];

                return arrUniq.slice(0, backToArray.length)
            }
        },

        keys: function(object) {
            let newArr = []
            for (const key in object) {
                if (object.hasOwnProperty(key)) {
                    newArr.push(key)
                }
            }
            return newArr
        },

        values: function(object) {
            let newArr = []
            for (const [key, value] of Object.entries(object)) {
                newArr.push(value)
            }
            return newArr
        },

        functions: function(obj) {
            let newArr = []
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] === 'function') {
                        newArr.push(key)

                    }
                }
            }
            return newArr.sort()
        }
    }
})()

fi.libraryMethod()