import AllCategories from "../components/AllCategories";
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const data = await res.json();
  return {
    props: {
      categories:data,

    },
  };
};

export default function index({categories}) {
  return (
      <AllCategories categories ={categories}/>
  )
}
