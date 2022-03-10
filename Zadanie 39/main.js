let string1 = 'Uwielbiam JavaScript';
let string2 = 'Jestem świetnym programistą - dobre sobie';

function lstring(str1, str2){
    if (str1.length > str2.length) {
        return `String "${str1}" 1 jest dłuższy`;
    }else if(str1.length<str2.length){
        return `String "${str2}" jest dłuższy`;
    }else if(str1.length=str2.length){
        return 'Stringi mają taką samą długość';
    }
}

console.log(lstring(string1, string2));