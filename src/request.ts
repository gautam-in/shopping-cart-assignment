import wretch from 'wretch';
import { ResponseChain } from 'wretch/dist/resolver';

type ApiResponse = unknown;

const callAPI = async (w: ResponseChain): Promise<ApiResponse> => {
    return w
        // .unauthorized((_error) => {
        //     sessionStorage.clear();
        //     return {
        //         success: false,
        //         message: 'Please login...',
        //     };
        // })
        .internalError((error) => {
            const { message } = JSON.parse(error.message);
            return {
                success: false,
                message: message,
            };
        })
        .json((response) => response)
        .catch((error) => {
            console.log(error);
            return {
                success: false,
                message: 'Error communicating with server',
            };
        });
};

export const request = {
    get: (url: string): Promise<ApiResponse> =>
        callAPI(
            wretch(url)
                // .auth(`Bearer ${sessionStorage.getItem('react-token')}`)
                .get(),
        ),

    post: (url: string, body: unknown): Promise<ApiResponse> =>
        callAPI(
            wretch(url)
                // .auth(`Bearer ${sessionStorage.getItem('react-token')}`)
                .post(body),
        ),

    delete: (url: string): Promise<ApiResponse> =>
        callAPI(
            wretch(url)
                // .auth(`Bearer ${sessionStorage.getItem('react-token')}`)
                .delete(),
        ),
};
