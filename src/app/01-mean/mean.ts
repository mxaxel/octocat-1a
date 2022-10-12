   export function mean(numbers: Array<number>, ){
        let mean=0, summation=0;
        numbers.forEach(function(item){
            summation+=item;
        })
        mean=summation/numbers.length
        return mean.toFixed(2);
    }