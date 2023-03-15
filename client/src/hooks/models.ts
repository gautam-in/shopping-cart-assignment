export enum METHODS {
	GET = 'get',
	POST = 'post',
	PATCH = 'patch',
	DELETE = 'delete',
}

export interface UseAxiosType {
	url: string
	method: METHODS
	body?: any
	headers?: any
}
