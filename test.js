const redis = require('redis');

const REDIS_PORT = 6379;

const client = redis.createClient(REDIS_PORT);

client.get('zhj', function(err, data){
		if(err){
			console.log(err);
		}
		console.log(data);
});
