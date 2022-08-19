class WebService {
    constructor(host, port, baseurl, secure) {
        this.Server = host;
        this.Port = port || 80;
        this.Path = baseurl || "";
        this.Secure = secure || false;
    }
    GetURL(sub) {
        let url = this.Server + "" + (this.Port != 80 ? ':'+this.Port : '') + (this.Path ? "/"+this.Path : "")
        url = typeof sub == "string" && sub.length > 0 ? url + "/" + sub : url + "/";
        return (this.Secure ? 'https' : 'http') + "://" + url;
    }
}
const WebServiceModule = (function () {
    let instance = null;
    class SimpleService extends WebService {
        constructor(host, port, baseurl, secure) {
            super(host, port, baseurl, secure);
        }
        FetchPath(name) {
            let url = this.GetURL(name);
            let promise;
            if (arguments.length > 1) {
                promise = fetch.apply(undefined, [url, ...arguments.slice(1)]);
            } else {
                promise = fetch(url);
            }
            return promise;
        }
    }
    function getInstance(host, port, path, secure) {
        if (!instance) {
            instance = new SimpleService(...arguments);
        }
        return instance;
    }
    return { getInstance: getInstance }
})();