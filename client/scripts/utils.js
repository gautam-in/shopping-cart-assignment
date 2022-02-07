export const fetchData = async (url, method = 'GET') => {
    try{
    const response = await fetch(url);
    const data = await response.json();
    return data;
    }
    catch(err){
        return err;
    }
}