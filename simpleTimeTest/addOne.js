const arr = [1,2,3];

const startaddOne = Date.now();

function addOne(array) {
    return 1 + array[0];
}

function sumArr(array) {
    let sumTotal = null;

    for(let num of array) {
        sumTotal += num;
    }

    return sumTotal;
}

function pairArray(array) {
    let pairArray = [];

    for(let num of array) {
        for(let nums of array) {
            let pair = [num,nums];
            pairArray.push(pair);
        }
    }

    return pairArray;
}

function functionTimer(method) {
    const start = Date.now();
    const result = method(arr);
    const end = Date.now();
    console.log('Time taken is: ',end - start,' and results are: ',result)
}

functionTimer(addOne);
functionTimer(sumArr);
functionTimer(pairArray);