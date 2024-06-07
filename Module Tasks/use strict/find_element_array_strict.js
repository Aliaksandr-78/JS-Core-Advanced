'use strict'
function task(arr, meaning){
    if (arr.length === 0 || meaning === undefined || meaning === null) {
        return false
    }
    for (let i = 0; i<arr.length; i++){
        if (arr[i] === meaning){
            return true
        }
    }
    return false
}
