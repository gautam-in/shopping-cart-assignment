import { useEffect, useState } from "react";
import { getData } from "../../../services";

const useCustGetData = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        (async () => {
            try {
                const response = await getData(url);
                setData(response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
          })();
    }, []);

    return { loading, data };
}

export default useCustGetData;