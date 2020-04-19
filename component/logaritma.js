function kekata(n){
    var angka=new Array("","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas");
    var terbilang ;

    if(n<12){
        terbilang = " "+angka[n];
    }
    else if(n<20){
        terbilang = kekata(n-10)+" belas ";
    }
    else if(n<100){
        terbilang = kekata(Math.floor(n/10)) + " puluh "+ kekata(n%10);
    }
    else if(n<200){
        terbilang = " seratus " + kekata(n-100);
    }
    else if(n<1000){
        terbilang = kekata(Math.floor(n/100)) + " ratus "+ kekata(n%100);
    }
    else if(n<2000){
        terbilang = " seribu " + kekata(n-1000);
    }
    else if(n<1000000){
        terbilang = kekata(Math.floor(n/1000)) + " ribu "+ kekata(n%1000);
    }
    else if(n<1000000000){
        terbilang = kekata(Math.floor(n/1000000)) + " juta "+ kekata(n%1000000);
    }
    else if(n<1000000000000){
        terbilang = kekata(Math.floor(n/1000000000)) + " milyar "+ kekata(n%1000000000);
    }
    return terbilang;
}
function funcTambah(){
    var angka1 = parseInt(document.getElementById("InNumber1").value);
    var angka2 = parseInt(document.getElementById("InNumber2").value);
        
    if( isNaN(angka1) && isNaN(angka2) ){
        var z = document.getElementById("OutResult").value = "Please Input A Number";
    }
    else if(!(isNaN(angka1)) && isNaN(angka2)){
        var z = document.getElementById("OutResult").value = "Input A Number to ANGKA 2";
    }
    else if(!(isNaN(angka2)) && isNaN(angka1)){
        var z = document.getElementById("OutResult").value = "Input A Number to ANGKA 1";
    }
    else if(angka1 <0 || angka2 <0){
        var z = document.getElementById("OutResult").value = "A Number Can't Be Minus";
    }
    else{
        var z = angka1 + angka2;
        document.getElementById("OutResult").innerHTML=kekata(z);
    }
    
   
}
function funcKurang(){
    var angka1 = parseInt(document.getElementById("InNumber1").value);
    var angka2 = parseInt(document.getElementById("InNumber2").value);

    if( isNaN(angka1) && isNaN(angka2) ){
        var z = document.getElementById("OutResult").value = "Please Input A Number";
    }
    else if(!(isNaN(angka1)) && isNaN(angka2)){
        var z = document.getElementById("OutResult").value = "Input A Number to ANGKA 2";
    }
    else if(!(isNaN(angka2)) && isNaN(angka1)){
        var z = document.getElementById("OutResult").value = "Input A Number to ANGKA 1";
    }
    else if(angka1 <0 || angka2 <0){
        var z = document.getElementById("OutResult").value = "A Number Can't Be Minus";
    }
    else{
        var z = angka1 - angka2;
        document.getElementById("OutResult").innerHTML=kekata(z);
    }
    
}
function funcKali(){
    var angka1 = parseInt(document.getElementById("InNumber1").value);
    var angka2 = parseInt(document.getElementById("InNumber2").value);
    
    if( isNaN(angka1) && isNaN(angka2) ){
        var z = document.getElementById("OutResult").value = "Please Input A Number";
    }
    else if(!(isNaN(angka1)) && isNaN(angka2)){
        var z = document.getElementById("OutResult").value = "Input A Number to ANGKA 2";
    }
    else if(!(isNaN(angka2)) && isNaN(angka1)){
        var z = document.getElementById("OutResult").value = "Input A Number to ANGKA 1";
    }
    else if(angka1 <0 || angka2 <0){
        var z = document.getElementById("OutResult").value = "A Number Can't Be Minus";
    }
    else{
        var z = angka1 * angka2;
        document.getElementById("OutResult").innerHTML=kekata(z);
    }
    
}
function funcBagi(){
    var angka1 = parseInt(document.getElementById("InNumber1").value);
    var angka2 = parseInt(document.getElementById("InNumber2").value);

    if( isNaN(angka1) && isNaN(angka2) ){
        var z = document.getElementById("OutResult").value = "Please Input A Number";
    }
    else if(!(isNaN(angka1)) && isNaN(angka2)){
        var z = document.getElementById("OutResult").value = "Input A Number to ANGKA 2";
    }
    else if(!(isNaN(angka2)) && isNaN(angka1)){
        var z = document.getElementById("OutResult").value = "Input A Number to ANGKA 1";
    }
    else if(angka1 <0 || angka2 <0){
        var z = document.getElementById("OutResult").value = "A Number Can't Be Minus";
    }
    else{
        var z = angka1 / angka2;
        document.getElementById("OutResult").innerHTML=kekata(z);
    }

}
function resetInput(){
    document.getElementById("myForm").reset();

}


