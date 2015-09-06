var mergeSort = function(arr) {
	if (arr.length < 2) {return arr}
	
	var center = Math.floor(arr.length/2),
		left = arr.slice(0,center),
		right = arr.slice(center)

	return merge(mergeSort(left), mergeSort(right))
    },
    merge = function(left, right) {
    	var result = []
    	while (left.length && right.length) {
			if (left[0] < right[0]) {
				result.push(left.shift())
			} else {
				result.push(right.shift())
			}
    	}
    	while (left.length) {
    		result.push(left.shift())
    	}
    	while (right.length) {
    		result.push(right.shift())
    	}
    	return result
    }
