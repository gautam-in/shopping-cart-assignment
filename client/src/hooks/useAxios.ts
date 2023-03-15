import React from 'react'

import { client } from '../utils/axios'

import { UseAxiosType } from './models'

export const useAxios = ({ url, method, body, headers }: UseAxiosType) => {
	const [data, setData] = React.useState<any>()
	const [loading, setLoading] = React.useState(true)
	const [error, setError] = React.useState<unknown>()

	const makeRequest = async () => {
		try {
			const response = await client[method](`${url}`, body, headers)

			if (response.status === 200) {
				setData(response.data)
			}
		} catch (error) {
			setError(error)
		} finally {
			setLoading(false)
		}
	}

	React.useEffect(() => {
		makeRequest()
	}, [])

	return { data, loading, error }
}
