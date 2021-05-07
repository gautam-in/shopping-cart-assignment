import { BASE_URI } from "./apis";
import axios from "axios";

export const getData = endpoint => {
    const reqUrl = BASE_URI + endpoint;

    return new Promise((resolve, reject) => {
        console.log(reqUrl);
        axios.get(reqUrl)
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

