/**
 * Created by matthewaltomare on 02/05/2017.
 */

for (var step =0; step <101; step++)
{
    if (step % 3 === 0 && step % 5 === 0){
        console.log("FizzBuzz");
    }
    else  if (step % 3 === 0) {
        console.log("Fizz");
    }
    else if (step % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(step);
    }
}