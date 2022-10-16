function palindroma(string) {
    var splitString = string.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("")
    let palindroma = "";
    if(joinArray == string){
        palindroma = "la parola è palindroma";
    }
    else{
        palindroma = "la parola non è palindroma";
    }
    return palindroma;
}

function pariDispari(numeroUtente){
    numeroComputer = Math.floor(Math.random() * 5) + 1;
    somma = (numeroUtente + numeroComputer) % 2;
    let pari = "";
    if(somma == 0){
        pari = "il numero è pari"+numeroUtente+" "+numeroComputer;
    }
    else{
        pari = "il numero è dispari "+numeroUtente+" "+numeroComputer;
    }
    return pari;
}