// let name = 'Hans';

// name= 'Monika';

// let number = 111;

// let boolean = false;

// let array = [1, 2, 3, 108];

// let objectH1 = document.querySelector('h1');

// objectH1.innerText = 'Kurs JS';

// if (number === 108){
//     console.log('Warunek został spełniony');
// } else if (number === 110){
//     console.log('Warunek numer 110');
// }else {
//     console.log('Zaden z powyższych warunków nie został sepłniony');
// }

// let result = number * 2;

// let numberTxt = '111';

// if(number !== numberTxt){
//     // console.log('Sa Warunek spełniony');
// }else{   
// }


// function multiply(num1, num2){
//     let result = num1 * num2;

//     return result;
// }

// let wynikmnozenia = multiply(number, 2);

// console.log(wynikmnozenia);

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Nowa treść nowa - click'

myHeading.onclick = function()  {
    alert('Właśnie klikąłes tekst na stronie')
}

console.log(myHeading);
