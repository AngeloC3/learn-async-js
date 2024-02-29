const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumOfArow(arr, rowIdx) {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIdx) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr[rowIdx].length; i++) {
                    sum += arr[rowIdx][i];
                }
                resolve(sum);
            }, 0);
        } else {
            reject("ERROR!");
        }
    })
}

async function calcSum() {
    promises = [];
    for (let x = 0; x < array2D.length; x++) {
        promises.push(sumOfArow(array2D, x));
    }
    try {
        const rowSums = await Promise.all(promises);
        let sum = 0;
        rowSums.forEach(rowSum => {
            sum += rowSum;
        })
        console.log("Sum = " + sum);
    } catch (error) {
        console.log("Error: " + error);
    }
}

calcSum();