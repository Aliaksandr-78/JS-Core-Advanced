function bubbleSort(arr) {
    let n = arr.length
    let swapped
    do {
        swapped = false
        for (let i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                let temp = arr[i - 1]
                arr[i - 1] = arr[i]
                arr[i] = temp
                swapped = true
            }
        }
        n--
    } while (swapped)
    return arr
}
