try{
	const redis = require("redis");
	var client = redis.createClient(6379);

	client.on("ready", function(){
			function zadd(key, score, member){
			client.zadd(key, score, member, function(){
					client.publish("chat", member);
					});
			}

			for(var i = 0; i < 10; i++){
			zadd("z", i, "" + i);
			console.log("第" + i + "次");
			}
});
}catch(err){
	console.log(err);
}



