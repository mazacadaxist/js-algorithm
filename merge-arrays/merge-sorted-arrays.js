export function mergeSortedArrays(){
    
    let arrs = [...arguments]
    let arrsIndex = new Array(arrs.length)
    arrsIndex.fill(0)
    let res = []
    
    while(getUnexostedArrayIndexes(arrs, arrsIndex).length > 1){
        
        let arrayIndexWithMinValue = getArrayIndexWithMinValue(arrs, arrsIndex)
        res.push(arrs[arrayIndexWithMinValue][arrsIndex[arrayIndexWithMinValue]])
        arrsIndex[arrayIndexWithMinValue]++;
    }
    
    let unexostedArrayIndex = getUnexostedArrayIndexes(arrs, arrsIndex)[0]
    res.push(...arrs[unexostedArrayIndex].slice(arrsIndex[unexostedArrayIndex])) 
    
    return res
    
}

function getUnexostedArrayIndexes(arrs, arrsIndex){
    
    let res = []
    
    for(let i = 0; i < arrs.length; i++){
        
        if(arrs[i].length > arrsIndex[i]){
            res.push(i)
        }
    }
    
    return res;
}

function getArrayIndexWithMinValue(arrs, arrsIndex){
    
    let minArrayIndex = 0
    
    for(let i = 0; i < arrs.length; i++){
    
        if(arrsIndex[minArrayIndex] >= arrs[minArrayIndex].length){
            minArrayIndex++
        }
        
        if(arrsIndex[i] >= arrs[i].length)
        {
            continue;
        }
        
        if(arrs[i][arrsIndex[i]] < arrs[minArrayIndex][arrsIndex[minArrayIndex]]){
            minArrayIndex = i
        }
    }
    
    return minArrayIndex
}

function generateSortedArray(n, x){
    const res = []
    for(let i = 1; i <= n; i++){
        res.push(i*x)
    }
    return res
}

const a1 = generateSortedArray(10, 4)
const a2 = generateSortedArray(5, 2)
const a3 = generateSortedArray(8, 3)
const merged = mergeSortedArrays(a1, a2, a3)

console.log('f',merged)