import { useEffect, useState } from 'react'

const useImageLoad = (filepath) => {
    const [error, setError] = useState(false)
    const [image, setImage] = useState(null)
    const fetchImage = async (filepath) => {
        if(filepath && filepath.length>0){
            if(!Array.isArray(filepath))
            {
                try {
                const response = await import(`../../src${filepath}`)
                setImage(response.default)
                } catch (err) {
                    setError(err)
                    }
            }
            else{
                let promises=[]
                filepath.forEach((url)=>{
                    url && promises.push(import(`../../src${url}`))
                })

                Promise.allSettled(promises).then((dta)=>{
                    let ImageURLs= [];
                    dta.forEach((item)=>{
                        ImageURLs.push(item.value.default)
                    })
                    setImage(ImageURLs)
                }).catch((err)=>{
                    setError(err)
                })
            }
        }
    }

    useEffect(() => {
        fetchImage(filepath)
    }, [filepath])

    return [
        error,
        image
    ]
}

export default useImageLoad