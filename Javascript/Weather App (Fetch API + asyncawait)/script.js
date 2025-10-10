async function getweather() {
  try {
    let city = document.getElementById("city").value;

    console.log("fetching...");
    let res = await fetch(`https://api.weatherapi.com/v1/current.json?key=4b3995ed2fc943eb87623413251010&q=${city}`);
    
    console.log("response received");
    let data = await res.json();
    console.log("json is parsed");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getweather();
