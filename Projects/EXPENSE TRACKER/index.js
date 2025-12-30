let arr = [];

let add =document.getElementById("add");
add.addEventListener("click",()=>{
let title = document.getElementById("title");
let amount = document.getElementById("amount");
let incexp = document.getElementById("incexp");
arr.push({id:Date.now(),title:title.value,amount:amount.value,type:incexp.value});
title.value= "";
amount.value="";
incexp.value="";

render();
totalcalculator();
});

function render(){
    let display = document.getElementById("display");
    display.innerHTML= "";

    arr.forEach((item,index)=>{
const li = document.createElement("li");
const btn = document.createElement("button");
btn.innerText = "delete";

btn.dataset.id =item.id;

btn.addEventListener("click",(e) =>{
    const id = Number(e.target.dataset.id);
    arr =arr.filter(item => item.id !== id);
    totalcalculator()
    render();
})
li.innerText =`${item.title}-${item.amount}Rs.-${item.type} `;
li.appendChild(btn);
display.appendChild(li)
    });
};

function totalcalculator() {
  let Total = document.getElementById("Total");

  let balance = arr.reduce((sum, item) => {
    if (item.type === "income") {
      return sum + Number(item.amount);
    } else {
      return sum - Number(item.amount);
    }
  }, 0);

  Total.innerText = `Total balance: ${balance} Rs`;
}
