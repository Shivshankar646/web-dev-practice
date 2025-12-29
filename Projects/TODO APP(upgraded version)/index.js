let arr = JSON.parse(localStorage.getItem("userdata")) || [];

let add = document.getElementById("add");
add.disabled=true;
let userinput = document.getElementById("userinput");
userinput.addEventListener("input",() =>{
add.disabled =userinput.value.trim() === "";
})

add.addEventListener("click",(e) =>{
   
    arr.push({id:Date.now(),text:userinput.value,done:false});
    userinput.value = "";//clear input
    render();
    add.disabled = true;
});

function render(){
     let string = JSON.stringify(arr);
    localStorage.setItem("userdata",string);
    let display = document.getElementById("display");
    display.innerHTML = "";
    arr.forEach((item,index) =>{
        const li = document.createElement("li");
        const done = document.createElement("button");
        const deletebtn = document.createElement("button");
        done.innerText = "❌";

        deletebtn.dataset.id =item.id;
        deletebtn.innerText = "Delete";
         if (item.done) {
            done.classList.add("done");
            done.innerText = "✔️"
         }
        done.addEventListener("click",(e) =>{
            arr[index].done =!arr[index].done;
            render();
        });

        deletebtn.addEventListener("click",(e) =>{
          const id =Number(e.target.dataset.id);
          arr = arr.filter(item => item.id !== id);
          render();
        })

        li.innerText = item.text + "";
        li.appendChild(done);
        li.appendChild(document.createTextNode(""));
        li.appendChild(deletebtn);
        display.appendChild(li);
    })
}

render();