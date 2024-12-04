function parameter(num) {
    for(let i=2; i<=num-1; i++){
        if(num%i ==0){
            return false
        }
    }return true
}
console.log(parameter(12));

function evenOdd(num){
    for(let i=0; i<=num; i++){
        if(i%2 == 0){
            return true
        }else{
            return false
        }
    }
}
console.log(evenOdd(12))