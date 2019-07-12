var ajaxRequests = (function(){
	return {
		ajax:function(url,cb){
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200) {
			    	cb(this.responseText);
			    }
			};
		  xhttp.open("GET", url, true);
		  xhttp.send();
		},
		ajaxPost:function(url, cb, data){
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function(){
				if (this.readyState == 4 && this.status == 200) {
			    	cb(this.responseText);
			    }
			};
			xhttp.open("POST", url, true);
			xhttp.setRequestHeader("Content-Type", "application/json");
		  	xhttp.send(JSON.stringify(data));
		}
	}	
}());
export default ajaxRequests;