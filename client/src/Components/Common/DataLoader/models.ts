export interface DataLoaderProps<T> {
  resource: string
  children: (item: T[]) => React.ReactNode
}
