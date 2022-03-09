let string1 = 'Uwielbiam JavaScript';
let string2 = 'Jestem świetnym programistą - dobre sobie';

function lstring(str1, str2){
    if (str1.length>str2.length){
        console.log('String 1 jest dłuższy');
    }else if(str1.length<str2.length){
        console.log('String 2 jest dłuższy');
    }else if(str1.length=str2.length){
        console.log('Stringi mają taką samą długość')
    }
}

lstring(string1, string2);