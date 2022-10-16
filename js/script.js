let printEs1 = function(){
    console.log('Snack 1:');
    let newParola = parseInt(document.getElementById("palindroma-form").value);
    // if(isNaN(newNumber)){
    //     document.getElementById("text-es1").innerHTML = "inserire dei numeri!";
    //     btnEs1.classList.remove('btn-primary');
    //     btnEs1.classList.add('btn-danger');
    // }
    // else{
    //     btnEs1.classList.add('btn-primary');
    //     btnEs1.classList.remove('btn-danger');
    //     numeriEs1.push(newNumber);
    // }
    console.log(palindroma(newParola))
}
let btnEs1 = document.getElementById("btn-parola");
btnEs1.addEventListener("click", printEs1);

let printEs2 = function(){
    console.log('Snack 1:');
    let newNumero = parseInt(document.getElementById("numero-form").value);
    // if(isNaN(newNumber)){
    //     document.getElementById("text-es1").innerHTML = "inserire dei numeri!";
    //     btnEs1.classList.remove('btn-primary');
    //     btnEs1.classList.add('btn-danger');
    // }
    // else{
    //     btnEs1.classList.add('btn-primary');
    //     btnEs1.classList.remove('btn-danger');
    //     numeriEs1.push(newNumber);
    // }
    console.log(pariDispari(newNumero))
}
let btnEs2 = document.getElementById("btn-numero");
btnEs2.addEventListener("click", printEs2);