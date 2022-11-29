//Receber como parâmetro quatro números e retornar quantos números pares há entre eles
// Ta grande sim, usei o que o professor passou na sala de aula.
function par(a,b,c){
    if((a>b)&&(b>c)){
        let contador=0
        let i=c
        for(;i<=a;i++){
          if(i%2==0){
            contador++
            console.log(i)
          }
          if(contador<=1){
            return console.log("No total só tem "+ contador + " um numero par entre os valores " + (a),(c),(b))
        }
        }
        return console.log("No total são "+ contador + " numeros pares entre " + (a),(b),(c))
    } if((a>c)&&(c>b)){
        let contador=0
        let i=b
        for(;i<=a;i++){
          if(i%2==0){
            contador++
            console.log(i)
          }
          if(contador<=1){
            return console.log("No total só tem "+ contador + " um numero par entre os valores " + (a),(c),(b))
        }
        }
        return console.log("No total são "+ contador + " numeros pares entre " + (a),(c),(b))
    }if((b>a)&&(a>c)){
        let contador=0
        let i=c
        for(;i<=b;i++){
          if(i%2==0){
            contador++
            console.log(i)
          }
          if(contador<=1){
            return console.log("No total só tem "+ contador + " um numero par entre os valores " + (a),(c),(b))
        }
        }
        return console.log("No total são "+ contador + " numero pares entre " + (b),(a),(c))
    }if((b>c)&&(c>a)){
        let contador=0
        let i=a
        for(;i<=b;i++){
          if(i%2==0){
            contador++
            console.log(i)
          }
          if(contador<=1){
            return console.log("No total só tem "+ contador + " um numero par entre os valores " + (a),(c),(b))
        }
        }
        return console.log("No total são "+ contador + " numeros pares entre " + (b),(c),(a))
    }if((c>a)&&(a>b)){
        let contador=0
        let i=b
        for(;i<=c;i++){
          if(i%2==0){
            contador++
            console.log(i)
          }
          if(contador<=1){
            return console.log("No total só tem "+ contador + " um numero par entre os valores " + (a),(c),(b))
        }
        }
        return console.log("No total são "+ contador + " numeros pares entre " + (c),(a),(b))
    }if((c>b)&&(b>a)){
        let contador=0
        let i=a
        for(;i<=c;i++){
          if(i%2==0){
            contador++
            console.log(i)
          }
          if(contador<=1){
            return console.log("No total só tem "+ contador + " um numero par entre os valores " + (a),(c),(b))
        }
        }
        return console.log("No total são "+ contador + " numeros pares entre " + (c),(b),(a))
    }
    if((c==b)&&(b==a)){
        let contador=0
        let i=a
        for(;i<=c;i++){
          if(i%2==0){
            contador++
            console.log(i)
          }else {
            return console.log("Todos são impares")
          }
          if(contador<=1){
            return console.log("No total só tem "+ contador + " um numero par entre os valores " + (a),(c),(b))
        }
        }
        return console.log("Os números são os mesmos e são pares")
    }if((a==b)&&(a>c)){
        let contador=0
        let i=c
        for(;i<=a;i++){
          if(i%2==0){
            contador++
            console.log(i)
          }
          if(contador<=1){
            return console.log("No total só tem "+ contador + " um numero par entre os valores " + (a),(c),(b))
        }
        }
        return console.log("No total são "+ contador + " numeros pares entre " + (a),(b),(c))
    }if((a==c)&&(c>b)){
        let contador=0
        let i=c
        for(;i<=a;i++){
          if(i%2==0){
            contador++
            console.log(i)
          }
          if(contador<=1){
            return console.log("No total só tem "+ contador + " um numero par entre os valores " + (a),(c),(b))
        }
        }
        return console.log("No total são "+ contador + " numeros pares entre " + (a),(c),(b))
    }if((b==c)&&(a>b)){
        let contador=0
        let i=c
        for(;i<=a;i++){
          if(i%2==0){
            contador++
            console.log(i)
          }
          if(contador<=1){
            return console.log("No total só tem "+ contador + " um numero par entre os valores " + (a),(c),(b))
        }
        }
        return console.log("No total são "+ contador + " numeros pares entre os valores " + (a),(b),(c))
    }if((a==c)&&(b>a)){
        let contador=0
        let i=c
        for(;i<=a;i++){
          if(i%2==0){
            contador++
            console.log(i)
          }
        }
        if(contador<=1){
            return console.log("No total só tem "+ contador + " um numero par entre os valores " + (a),(c),(b))
        }
        return console.log("No total são "+ contador + " numeros pares entre os valores " + (a),(c),(b))
    }
 
    
}
par(10,11,10)
//a>b>c imrpimir a b c ok
//a>c>b imprimir a c b  ok
//b>a>c imprimir b a c ok
//b>c>a imprimir b c a ok
//c>a>b imprimir c a b ok
//c>b>a imprimir c b a 
//Todos são iguais sendo par ou impar ok
//1-1-0 A==B
//0-1-1 B==C
//1-0-1 A==C 


