function Router() {
    this.currentRoutes = "";
    this.routeParams = "";
    let _this = this;
    extractUrlData(function (urlData) {
        _this.currentRoutes = urlData.currentRoutes;
        _this.routeParams = urlData.routeParams
    })

    return {
        get getRoutesParams() {
            return getExtractedParams(_this.routeParams, searchParam = "")
        },
        get activatedRoute() {
            return _this.currentRoutes;
        }
    }
}
export { Router };



function extractUrlData(getUrlData) {
    let currentUrl = window.location.href;
    let currentRoutes = "";
    let routeParams = "";

    let splitUrls = currentUrl.split('/')
    let extractData = splitUrls[splitUrls.length - 1];

    if (extractData.includes('?')) {
        let splitData = extractData.split('?');
        currentRoutes = splitData[0];
        routeParams = splitData[1];
    } else {
        currentRoutes = extractData;
    }

    getUrlData({
        currentRoutes,
        routeParams
    })

}

function getExtractedParams(routeParams, searchParam = "") {
    let splitParams = routeParams.split('&');
    console.log(splitParams)
    if (splitParams) {
        let params = splitParams.map((param) => {
            let splitParam = param.split('=');
            let obj = {}
            obj[splitParam[0]] = splitParam[1]
            return obj;
        });
        console.log(params)

        if (searchParam) {
            return params.find(param => searchParam in param ? true : false)
        }
        return params;
    } else {
        throw new Error('Unexpected Url Params')
    }

}

