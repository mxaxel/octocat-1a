export function standardDeviation(numbers: Array<number>){
    let summation=0, summation2=0, summation3=0, standardDeviation=0, mean=0;

    numbers.forEach(function(item, i){
        summation += item;
        if(numbers.length == i+1){
            mean=summation/numbers.length
            numbers.forEach(function(item){
                summation3=(item-mean)**2
                summation2+=summation3
            })
            standardDeviation=Math.sqrt(summation2/numbers.length)
        }
    })
    return standardDeviation;
}
