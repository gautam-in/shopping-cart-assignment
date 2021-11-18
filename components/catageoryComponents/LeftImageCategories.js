import { useRouter } from "next/dist/client/router";
import HomeCatageroiesStyles from "../styles/HomeCategoriesStyles";

export default function LeftImageCategories({item}) {
  
const router = useRouter()

  const {description,id,imageUrl,key,name}= item
  return (
    <main>
      <HomeCatageroiesStyles>
        <section className="categories shadow">
          <div>
            <img
              className="categories-image"
              src={imageUrl}
              alt={name}
            />
          </div>
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
        </section>
      </HomeCatageroiesStyles>
    </main>
  );
}
