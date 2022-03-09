
function dzialania(num1, num2){
    let dodawanie = num1 + num2;
    if(dodawanie>0){
        console.log ('Wynik dodawania wynosi '+dodawanie)
    }
    else if(dodawanie<0){
        console.log('Wynik dodawania jest nieprawidłowy!');
    }
    let odejmowanie = num1 - num2;
    if(odejmowanie>0){
        console.log('Wynik odejmowania wynosi '+odejmowanie);
    }
    else if(odejmowanie<0){
        console.log('Wynik odejmowania jest nieprawidłowy!');
    }
    let mnożenie = num1 * num2;
    if(mnożenie>0){
        console.log('Wynik mnożenia wynosi ' + mnożenie);
    }
    else if(mnożenie<0){
        console.log('Wynik mnożenia jest nieprawidłowy!');
    }
   
}

console.log(dzialania(55,3))