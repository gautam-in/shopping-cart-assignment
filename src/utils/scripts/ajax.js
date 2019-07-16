var ajaxRequests = (function(){
	var ajax = function(url,cb, method,data,resolve,reject){
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function(){
			if (this.readyState == 4 && this.status == 200) {
		    	cb(this.responseText,resolve,reject);
		    }
		};
	  	xhttp.open(method, url, true);
	  	if(method==='POST'){
	  		xhttp.setRequestHeader("Content-Type", "application/json");
	  		xhttp.send(JSON.stringify(data));
	 	}
		 else{
		  	xhttp.send();	
		}
	}
	return {
		promiseFunc:function(url,cb,method,data){
			return new Promise(function(resolve, reject){
				ajax(url,cb,method,data,resolve,reject)
			});
		}
	}	
}());
export default ajaxRequests;