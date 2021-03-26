import { PRIMARY_SERVER } from "../Constants/ServerUrl";
import axios from "axios";

const getData = route => {
    const requestUrl = PRIMARY_SERVER + route;

    return new Promise((resolve, reject) => {
        axios.get(requestUrl)
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
};

export const appService = { getData };
