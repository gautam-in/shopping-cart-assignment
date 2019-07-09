var ajax = function(url,cb){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
	    	console.log(this.responseText);
	    }
	};
  xhttp.open("GET", url, true);
  xhttp.send();
}
export default ajax;