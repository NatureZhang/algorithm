function mergeTwoArray (arr1, arr2) {
	let arry = new Array(arr1.length + arr2.length);
	let length1 = arr1.length, length2 = arr2.length;
	let p1 = 0, p2 = 0, i = 0;
	while (p1 < length1 || p2 < length2) {
		
		if (arr1[p1] < arr2[p2]) {
			arry[i] = arr1[p1];
			p1++;
		}
		else {
			arry[i] = arr2[p2];
			p2++;
		}	
		
		i++;
	}
	return arry;
}

function main () {
	let array1 = [1, 3, 5, 7];
	let array2 = [2, 4, 6, 8, 10, 12, 14];
	
	let result = mergeTwoArray(array1, array2);
	
	console.log(result);
}

main();