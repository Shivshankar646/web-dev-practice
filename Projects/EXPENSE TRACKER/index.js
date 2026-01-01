let arr =JSON.parse(localStorage.getItem('user')) || [];
let title =document.getElementById("title");
let add =document.getElementById("add");
let amount = document.getElementById("amount");
let incexp = document.getElementById("incexp");
add.disabled=true;
function validateInputs() {

  add.disabled =
    title.value.trim() === "" ||
    amount.value.trim() === "" ||
    incexp.value === "";
   

}

title.addEventListener("input", validateInputs);
amount.addEventListener("input", validateInputs);
incexp.addEventListener("change", validateInputs);

add.addEventListener("click",()=>{
  if (Number(amount.value) <= 0) return;

arr.push({id:Date.now(),title:title.value,amount:amount.value,type:incexp.value});
title.value= "";
amount.value="";
render();
totalcalculator();
add.disabled=true;
});

function render(){
  localStorage.setItem('user',JSON.stringify(arr));
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
});
li.classList.add(item.type); // income / expense

li.innerText =`${item.title}-${item.amount}Rs.-${item.type} `;
li.appendChild(btn);
display.appendChild(li)
    });
};

function totalcalculator() {
  let Total = document.getElementById("Total");
console.log(arr)
  let balance = arr.reduce((sum, item) => {
    if (item.type === "income") {
      return sum + Number(item.amount);
    } else {
      return sum - Number(item.amount);
    }
  }, 0);

  Total.innerText = `Total balance: ${balance} Rs`;
}
render();
totalcalculator();