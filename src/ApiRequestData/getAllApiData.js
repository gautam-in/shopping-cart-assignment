export async function getBannerData(){
  try{
    const data = await fetch("http://localhost:3000/banners")
    const response = await data.json()
    return response
  }catch(err){
    return err
  }
}

export async function getCategoryData(){
  try{
    const data = await fetch("http://localhost:3000/categories")
    const response = await data.json()
    return response
  }catch(err){
    return err
  }
}

export async function getProductData(){
  try{
    const data = await fetch("http://localhost:3000/products")
    const response = await data.json()
    return response
  }catch(err){
    return err
  }
}

export async function addToCart(id){
  try{
    const data = await fetch("http://localhost:3000/addToCart",{
      method: 'POST',
      body: JSON.stringify({
        id: id
      })
    })
    const response = await data.json()
    return response
  }catch(err){
    return err
  }
}
