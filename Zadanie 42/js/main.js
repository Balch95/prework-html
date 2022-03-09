
let dodajparagraf = document.getElementById('dodaj');
let usunparagraf = document.getElementById('usun');
var paragraf = document.getElementById('tekst').textContent;

document.getElementById('dodaj').onclick= function(){
    let tekst = paragraf;
    document.getElementById('tekst').textContent = tekst + 'To jest tekst dodany do STRONY PRZEZ JS PO PONAD GODZINIE WALKI :D';
}
    
document.getElementById('usun').onclick=function(){
    let tekst = paragraf
    document.getElementById('tekst').textContent = tekst;
}