var _ = {
    map: function (arr, callback) {
        if (typeof (callback) == 'function') {
            var newArr = [];
            for (let i = 0; i < arr.length; i++) {
                newArr.push(callback(arr[i]));
            }
            return newArr;
        }
    },
    find: function (arr, callback) {
        if (typeof (callback) == 'function') {
            var newVal;
            for (let i = 0; i < arr.length; i++) {
                if (callback(arr[i]) == true) {
                    return arr[i];
                }
            }
        }
    },
    filter: function (arr, callback) {
        if (typeof (callback) == 'function') {
            var newArr = [];
            for (let i = 0; i < arr.length; i++) {
                if (callback(arr[i]) == true) {
                    newArr.push(arr[i]);
                }
            }
            return newArr;
        }
    },
    reject: function (arr, callback) {
        if (typeof (callback) == 'function') {
            var newArr = [];
            for (let i = 0; i < arr.length; i++) {
                if (callback(arr[i]) == true) {
                    continue;
                } else {
                    newArr.push(arr[i]);
                }
            }
            return newArr;
        }
    },

    reduce: function (arr, callback, memo) {
        if (typeof (callback) == 'function') {
            
            for (let i = 0; i < arr.length; i++) {
                memo = callback(memo, arr[i]);
            }
            return memo;
        }
    }
}
var sum = _.reduce([1, 2, 3], function (memo, num) { return memo + num; }, 0);
console.log(sum);