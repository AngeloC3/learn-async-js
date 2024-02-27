const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];

function sumOfArow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIdx) {
            setTimeout(() => {
                arr[rowIdx].filter((e) => {
                    return e < 0;
                }).length > 0 ? resolve(`Found row: ${arr[rowIdx]}`) : reject("Not")
            }, 0);
        } else {
            reject("ERROR!");
        }
    })
}

promises = [];
for (let x = 0; x < array2D.length; x++) {
    promises.push(sumOfArow(array2D, x));
}

Promise.any(promises)
    .then((results) => {
        console.log(results);
    })
    .catch((error) => console.log("Error: " + error));