a = 12
if(a%4==0 && a%3==0){
    console.log("Este número e divisível por três e quatro")
    if(a%4==1 && a%3==0){
        console.log("Este número e divisível por três mas não por quatro")
        if(a%4==0 && a%3==1){
            console.log("Este número e divisível por quatro mas não por três")
            if(a%4==1 && a%3==1){
                console.log("Este número não é divisível por três e nem por quatro")
            }
        }
    }
}