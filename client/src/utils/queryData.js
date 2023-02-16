import base from "./axios/base";

const queryData = async ({queryKey}) => {
    const url = `/${queryKey[0]}`;
    try {
        const res = await base.get(url);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

export default queryData;