import { endpoint } from "../config"

const resJson = async (res)=>(await res.json())

const callGetMethod = async (api) =>{
    const res =  await fetch(api)
    return resJson(res)
} 

const FetchCategory = async () => (callGetMethod(`${endpoint}/categories`))

const FetchProducts = async () => (callGetMethod(`${endpoint}/products`))

const FetchUser = async () => (callGetMethod(`${endpoint}/user`))

export {FetchCategory,FetchProducts,FetchUser}