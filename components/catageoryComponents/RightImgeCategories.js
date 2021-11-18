import { useRouter } from "next/dist/client/router";
import HomeCatageroiesStyles from "../styles/HomeCategoriesStyles";
export default function RightImgeCategories({item}) {
  const {description,id,imageUrl,key,name}= item
  const router = useRouter()
  return (
    <main>
    <HomeCatageroiesStyles>
      <section className="categories shadow">
        <div className="categories-content">
          <h2 className="categories-heading">
            {name}
          </h2>
          <p className="categories-title">
           {description}
          </p>
          <button
            className="categories-button"
            type="button"
            onClick= {()=>{
              console.log(id)
              router.push(`/products/${id}`)
            }}
          >
            
            Explore {name}
          </button>
        </div>
        <div>
          <img
            className="categories-image"
            src={imageUrl}
            alt={name}
          />
        </div>
      </section>
    </HomeCatageroiesStyles>
  </main>
  );
}
