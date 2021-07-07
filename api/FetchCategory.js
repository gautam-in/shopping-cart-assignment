import { endpoint } from "../config"
import {arrayChunk} from "../lib/lib"

const resJson = async (res)=>(await res.json())

const callGetMethod = async (api) =>{
    console.log('calling',api)
    const res =  await fetch(api)
    return resJson(res)
} 

const FetchCategory = async () => (callGetMethod(`${endpoint}/categories`))

const FetchProducts = async (chunked=true,category) => {

    let api = `${endpoint}/products/`

    console.log("cat is",category)
    if(category){
        api = `${endpoint}/products/${category}/`
    }

    const data =  await callGetMethod(api)
    if(chunked){
        return arrayChunk(data,4)
    }else{
        return data
    }
}

const FetchUser = async () => (callGetMethod(`${endpoint}/user`))

export {FetchCategory,FetchProducts,FetchUser}