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
        var z = document.getElementById("OutResult").value = angka1 + angka2;
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
        var z = document.getElementById("OutResult").value = angka1 - angka2;
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
        var z = document.getElementById("OutResult").value = angka1 * angka2;
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
        var z = document.getElementById("OutResult").value = angka1 / angka2;
    }

}
function resetInput(){
    document.getElementById("myForm").reset();

}


