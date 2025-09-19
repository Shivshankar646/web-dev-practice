
function shownumber(num){
document.getElementById("display").value += num;
console.log(num);
}

function showsine(sine){
    document.getElementById("display").value +=sine;
    console.log(sine);
}
function cleardisplay(){
   
   document.getElementById("display").value="";
    
}

function showequal(){
    let exp = document.getElementById("display").value;
 document.getElementById("display").value =eval(exp)
}