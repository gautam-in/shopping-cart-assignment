var PubSub = (function(){
	var subscribers={};
	return {
		publish:function(event, data) {
		    if (!subscribers[event]) return;
		    subscribers[event].forEach(subscriberCallback =>
		    subscriberCallback(data));
		},
	    subscribe:function(event, callback) {
		    if (!subscribers[event]) {
		        subscribers[event] = [];
		    }
		    subscribers[event].push(callback);
		}
	}
})();

export default PubSub;