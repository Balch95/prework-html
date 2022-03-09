

document.querySelector('button').onclick = function(){
    let fn = document.getElementById('fname').value;
    let sn = document.getElementById('sname').value;
    let tn = document.getElementById('tnumber').value;

    document.getElementById('name').innerHTML = fn;
    document.getElementById('surname').innerHTML = sn;
    document.getElementById('phone').innerHTML = tn;

}