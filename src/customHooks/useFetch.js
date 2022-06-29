import axios from "axios"

export const getFetch = (url, stateSetter) => {
    (async () => {
        try {
            const response = await axios.get(url)
            stateSetter(() => response.data)
        }
        catch(err) {
            console.log(err)
        }
    })()
}