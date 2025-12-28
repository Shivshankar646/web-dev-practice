let arr = [];
let add = document.getElementById("add");
add.addEventListener("click",(e)=>{
let userinput = document.getElementById("userinput");
if (!userinput.value.trim()) return;

arr.push({id:Date.now(),text:userinput.value,done:false});
userinput.value = "";
render();
});

function render(){
    let display = document.getElementById("display");
    display.innerHTML = "";
    arr.forEach((item,index)=>{
          let li = document.createElement("li");
    let done = document.createElement("button");
    let deletebtn = document.createElement("button");
      li.innerText = item.text + "";
      done.innerText = "Done";
      deletebtn.innerText = "Delete";

        deletebtn.dataset.id =item.id;

      if (item.done) {
    done.classList.add("done");
}
done.addEventListener("click",()=>{
arr[index].done =!arr[index].done;
render();
});

deletebtn.addEventListener("click",(e) =>{
    const id =Number(e.target.dataset.id);
    arr = arr.filter(item => item.id !== id);
    render();
})

      li.appendChild(done);
      li.appendChild(document.createTextNode(""));
      li.appendChild(deletebtn);
      display.appendChild(li);
    });
}
