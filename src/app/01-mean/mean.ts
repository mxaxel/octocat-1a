   export function mean(numbers: Array<number>, ){
        let mean=numbers, summation=0;

        for(let i=0; i < numbers.length; i++ ) {
            summation = summation + mean[i];
          }
          summation = Math.round((summation/ mean.length)* 100) /100;
          return summation;
    }