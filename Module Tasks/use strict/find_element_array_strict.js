'use strict'
function task(arr, meaning){
    for (let i = 0; i<arr.length; i++){
        if (arr[i] === meaning){
            return true
        }
    }
    return false
}
