/**
 * API services to make ajax request
 */
const apiService = {
    request: async function (requestObj) {
        return fetch(requestObj.url).then(res => res.json());
    },
    getBanner: function(obj){
        return this.request(obj);
    },
    getCategories: function(obj){
        return this.request(obj);
    },
    getProductList: function(obj){
        return this.request(obj);
    }
};