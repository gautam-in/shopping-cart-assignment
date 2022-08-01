import axios from "axios"

export const getFetch = async (url) => {
        try {
            const response = await axios.get(url)
            return response.data
        }
        catch(err) {
            console.log(err)
        }

}
