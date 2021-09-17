var promise = new Promise(function(){
	const x = 'india';
	const y = 'America';

	if(x === Y){
	resolve();
	}
    else{
    reject();
    }

});

promise.then(function(){
	console.log("promise is resolved, the contry is india");
}).catch(function(){
	console.log("promise rejected, due to some error!");
});