fetch ('https://api.covid19api.com/summary')
.then( (apidata) =>{
    return apidata.json();
})
.then ( (actualdata) => {
    console.log(actualdata.Countries[76]);
    const mydata = actualdata.Countries[101].Country;
	document.getElementById('apiindia').innerHTML = `The name of the country is ${mydata.Country}`
})
.catch( (error) =>{
    console.log(`Error : ${error}`);
});