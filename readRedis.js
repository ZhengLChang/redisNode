var redis = require("redis");
var client = redis.createClient(6379, "127.0.0.1");

function getRedisData(){
	client.on("ready", function(){
			client.subscribe("chat");
			console.log("订阅成功。。。");
			});
	client.on("error", function(error){
			console.log("Redis Error " + error);
			});
	client.on("subscribe", function(channel, count){
			console.log("client subscribed to " + channel + "," + count + "total subscriptions");
			});
	client.on("message", function (channel, message) {
			console.log("我接收到信息了" + message);
			//dealWithMsg(message);
			});
	client.on("unsubscribe", function (channel, count) {
			console.log("client unsubscribed from" + channel + ", " + count + " total subscriptions")
			});
}
getRedisData();
