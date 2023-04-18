import axios from "axios"
import { useMutation } from "react-query"

export const useAddToCart = () => {
    return useMutation(async (data) => {
        let res = await axios.post('/addToCart',data)
        return res.data
    })
}