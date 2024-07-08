// print all prime number between 0 and 100
let initial = 0
for( let i = 2; i<100; i++){
    let isPrime = true;
    for(let j = 2; j<i/2; j++ ){
        if(i%j == 0){
            isPrime = false;
            break;
        }
    }

    if (isPrime){
        console.log(i);
    }
}

//0,1,2,3,4,5,6,7,8,9,10,11,12,13,14
//6
//6%2 == 0 > isPrine = false
//6%3 == 0 > isPrime = false
//6%4 == 0 > isPrime = false
