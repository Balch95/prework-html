let num1 = 2;
let num2 = 5;


function porownanie(n1,n2){
    let a = n1;
    let b = n2;
    
    if(n1>n2){
        return n1;
    }else if (n1<n2){
        return n2;
    }else {
        return false;
    }
}

console.log(porownanie(num1,num2));

