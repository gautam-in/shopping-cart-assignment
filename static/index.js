document.addEventListener('DOMContentLoaded', () => {
    //(alert,0,'Loaded');
    fetch('/products').then((resp)=>{
        resp.json().then(data=>{
            ShowBanners(data);
        })
    })
})

function ShowBanners(){
    let root = document.querySelector("#categories");
}