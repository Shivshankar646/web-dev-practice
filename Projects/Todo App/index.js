let arr = [];
document.getElementById("add").addEventListener("click",(e)=>{
    const userinput =document.getElementById("todo");
    arr.push({id: Date.now(),text:userinput.value,done:false});
    userinput.value= "";
    render()
   
});

function render() {
  const display = document.getElementById("display");
  display.innerHTML = "";

  arr.forEach((item, index) => {
    const li = document.createElement("li");
    const done = document.createElement("button");
    const btn = document.createElement("button")

    done.innerText = "Done";
    btn.innerText = "Delete"
    btn.dataset.id=item.id;

    // ✅ restore color
    if (item.done) {
      done.classList.add("done");
    }

    // ✅ toggle color + data
    done.addEventListener("click", () => {
      arr[index].done = !arr[index].done;
      render();
    });
    btn.addEventListener("click",(e) =>{
       
        const id  =Number(e.target.dataset.id)
     arr = arr.filter(item => item.id !== id);
        render();
    })

    li.innerText = item.text + " ";
    li.appendChild(btn);
    li.appendChild(document.createTextNode(""));
    li.appendChild(done);
    display.appendChild(li);
  });
}
