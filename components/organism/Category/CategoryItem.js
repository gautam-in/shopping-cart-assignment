import { useRouter } from "next/dist/client/router";
import styles from './category.module.scss'
export default function CategoryItem({categoryItem,index}) {
    const router = useRouter()
    return(
        <div className={styles.item} style={{flexDirection: index % 2 === 0 ?"row" :'row-reverse'}}>
            <img className={styles.image} src={categoryItem?.imageUrl} alt={categoryItem.name} />
            <div className={styles.details}>
                <p className={styles.name}>{categoryItem?.name}</p>
                <p className={styles.description} >{categoryItem?.description}</p>
                <button onClick={()=>{
                    // navigating to products page based on category
                        router.push({
                            pathname:"/products",
                            query:{
                                id:categoryItem.id
                            }
                        })
                }} className={styles.button}>{`exlpore ${categoryItem.key}`}</button>
            </div>
        </div>
    )
    
}