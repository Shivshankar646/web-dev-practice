let promise = new Promise((resolve, reject) => {
    let success=false;
    if(success){
        resolve("task done")
    } else {
        reject("task not done")
    }
});
promise
     .then((message) =>{
        console.log(message)
     })
     .catch((error) =>{
        console.log(error)
     })
     .finally(() =>{
        console.log("task completed (success or fail)")
     });

     let promises = new Promise((resolve, reject) => {
        let available = false;
        if (available) {
            resolve("pizza delivered")
        } else {
            reject("shop is closed")
        }
     });
     promises
       .then((msg) =>{
        console.log(msg)
       })
       .catch((err) =>{
        console.log(err)
       })
       .finally(() =>{
        console.log("order process is ended")
       });

       let download =new Promise((resolve, reject) => {
        console.log("Downloading file...");
        setTimeout(() => {
            resolve("Download completed");
            reject("download error");
        }, 2000);
       });
       download
          .then((msg) =>{
            console.log(msg);
          })
          .catch((err) =>{
            console.log(err)
          })
          .finally(()=>{
            console.log("process finished")
          });

          new Promise((resolve) => {
         setTimeout(() => {
                console.log("step 1");
                resolve()
            }, 1000);
          })
          .then(() =>{
         return new Promise((resolve) => {
            setTimeout(() => {
                console.log("step 2")
                resolve()
            }, 1000);
         })
          })
          .then(() =>{
            console.log("step 3");
          })
          .catch((err) =>{
            console.log(err);
          })
           .finally(() =>{
            console.log("All steps done");
           });


        // ⚡ Task 1 – Basic Promise

           let promise1 =new Promise((resolve) => {
            setTimeout(() => {
                resolve("Data loaded");
            }, 2000);
           });
           promise1
             .then((msg) => {
                console.log(msg)
             });

  //  ⚡ Task 2 – Promise with Rejection
  let promise2 =new Promise((resolve, reject) => {
    let math =Math.random();
    console.log(math)
   if (math < 0.5) {
    resolve("success")
   } else {
    reject("failed")
   }

  });
  promise2
    .then((msg) =>{
console.log(msg)
    })
    .catch((err) =>{
        console.log(err)
    });

    // ⚡ Task 3 – Promise Chain
    new Promise((resolve) => {
        console.log("order received");
        resolve()
    })
    .then(()=>{
        return new Promise((resolve) => {
            console.log("cooking...");
            resolve()
        })
    })
    .then(() =>{
        console.log("pizza is ready")
    });

    // ⚡ Task 4 – Promise + finally()
    let promise3 =new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Task done");
            resolve("success");
            reject("error")
        }, 1000);
    });
    promise3
    .then((msg) =>{
        console.log(msg);
    })
    .catch((err) =>{
        console.log(err)
    })
    .finally(() =>{
        console.log("Process finished 🕓")
    });

    // ⚡ Task 5 – Challenge
    function fetchdata(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let math1=Math.random();
                console.log(math1)
                if(math1 > 0.50){
                    resolve("Data received ✅")
                } else {
                    reject("Network Error ❌")
                }
            }, 2000);
        })
      
        
    }
    // fetchdata()
    // .then((msg) =>{
    //     console.log(msg)
    // })
    // .catch((err) =>{
    //     console.log(err)
    // })
    // .finally(() =>{
    //     console.log("all steps are done")
    // })
fetchdata()
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log("All steps done"));
