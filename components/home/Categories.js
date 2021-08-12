import axios from "axios";
import LoadError from '../LoadError'
import { useQuery } from "react-query";
import Category from "./Category";

const baseUrl = "http://localhost:3000/api/categories";
const getCategories = async () => {
  const res = await axios.get(baseUrl);
  return res.data
}
export default function HomeCategories() {
  const {isLoading, isError, data} = useQuery('getCategories', getCategories);
  return (
    <>
      {
      isLoading && <p>Loading...</p>
      }

      {
        isError && <LoadError />
      }
      
      {
      data && data
        .sort((a, b) => a.order - b.order)
        .filter(function (elem) {
          return elem.order >= 0;
        })
        .map((category) => {
          return (
            <Category
              key={category.key}
              description={category.description}
              imageUrl={category.imageUrl}
              order={category.order}
              name={category.name}
              categoryKey={category.key}
              id={category.id}
            />
          );
        })}
    </>
  );
}
