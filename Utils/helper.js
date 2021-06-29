const baseUrl = 'http://localhost:5000/'

export const GET = async (getUrl) => {
    const url = `${baseUrl.concat(getUrl)}`
    const data = await fetch(url)
      .then((response) => {
         
        return response.json()
      })
      .catch((err) => {
        console.log(err)
      })
      return data
  }

  export const POST = async (posturl, data) => {
    const url = `${baseUrl.concat(posturl)}`
    const Data = JSON.stringify(data)
    const ResponseData = await fetch(url, {
      method: 'POST',
      body: Data
    })
      .then((response) => response.json())
      .catch((error) => console.log(error))
      return ResponseData
  }