let count=0;
let display = document.getElementById("display");
display.innerHTML = count;

let increase =document.getElementById("plus");
increase.addEventListener("click",(e)=>{
    // document.getElementById("plus").disabled = count === 0;
    ++count;
    display.innerHTML=count;
   checker()
});

let decrease =document.getElementById("minus");
decrease.addEventListener("click",(e)=>{
    if (count > 0) {    
        --count;
    }

   display.innerHTML=count;
   

   checker();
});

document.getElementById("reset").addEventListener("click",Reset);
function Reset(){
    count=0;
    display.innerHTML=count;
    checker();
}
document.getElementById("hike").addEventListener("click",Hike);
function Hike(){
    count+=5;
    display.innerHTML=count;
    checker();
};

function checker(){
    if (count===0) {
        document.getElementById("reset").style.textDecoration ="Line-through";
    } else {
       document.getElementById("reset").style.textDecoration ="none"; 
    }
};
checker();