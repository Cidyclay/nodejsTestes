var num = 10
var cont = 2

while(cont < num){
    if(num % cont == 0){
        console.log("Não é primo")
        return
    }else if(cont == num-1)
        console.log("É primo")
    
    cont++
}