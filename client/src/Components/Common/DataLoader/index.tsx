import { useQuery } from "react-query"

import { Loader } from "../Loader"

import { DataLoaderProps } from "./models"

export const DataLoader = <T extends unknown>({
  resource,
  children,
}: DataLoaderProps<T>) => {
  const { isLoading, error, data } = useQuery<T[]>(resource, async () => {
    const response = await fetch(`http://localhost:5000/${resource}`)
    const data = await response.json()
    return data
  })

  if (isLoading) return <Loader />

  if (error) return <h5>Unable to load {resource}. Please try again...</h5>

  return <>{data && children(data)}</>
}
