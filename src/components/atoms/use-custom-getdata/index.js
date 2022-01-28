import { useEffect, useState } from "react";

import { getData, getDataById } from "../../../services";

const useCustGetData = (url, id = null) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                let response = [];
                if (id) {
                    response = await getDataById(url, id);
                }
                else {
                    response = await getData(url);
                }
                setData(response);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    return { loading, data };
}

export default useCustGetData;