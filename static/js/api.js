/**
 * API services to make ajax request
 */
 var apiService = {
    getRequest: async function (requestObj) {
        return fetch(requestObj.url).then(res => res.json());
    },
    postRequest: async function (url, data) {
        return fetch(url,{method: 'POST', body: data}).then(res => res);
    },
    getBanner: function(obj){
        return this.getRequest(obj);
    },
    getCategories: function(obj){
        return this.getRequest(obj);
    },
    getProductList: function(obj){
        console.log("hello",obj)
        return this.getRequest(obj);
    }
};