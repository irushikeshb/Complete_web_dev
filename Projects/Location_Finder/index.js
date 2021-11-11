const getBtn = document.querySelector(".btn");
const api_key = "ce03ff73ba114bb19ea0b0cddaef0656";

getBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
  }
});

async function showPosition(position) {
  let { latitude, longitude } = position.coords;

  let response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api_key}`
  );
  
  let data = await response.json();
  document.write(`Your Address Is :- ${data.results[0].formatted}`);
  console.log(data);
} 