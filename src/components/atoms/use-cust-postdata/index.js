import { useEffect, useState } from "react";

import { postData } from "../../../services";

const useCustPostData = (url, payload) => {
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        (async () => {
            try {
                let response = await postData(url, payload);
                setResponse(response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
          })();
    }, []);

    return { loading, response };
}

export default useCustPostData;