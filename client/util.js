function sortArray(arr, key){
    let sortArr = arr;
    if(arr && arr.length >0){
        sortArr = arr.sort(function(a,b){
            return a[key] - b[key];
        })
    }
    return sortArr;
}
