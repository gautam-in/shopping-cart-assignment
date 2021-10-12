const URL="http://localhost:5000/";
const API=({path="",body=null})=>{
    let options={};
    if(body){
        options.method="POST";
        options.body=body;
    }
    return fetch(URL+path,options).then(res=>res.json()).catch(console.error);
}

export const getBanner=async ()=>{
    return await API({path:"banners"});
}

export const getCategories=async()=>{
    return await API({path:'categories'});
}

export const getProducts=async()=>{
    return await API({path:'products'});
}