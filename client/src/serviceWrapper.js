export default function serviceCallGet(url,setFunction){
    var axios = require("axios");
    var config = {
      method: "get",
      url: url,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setFunction(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}