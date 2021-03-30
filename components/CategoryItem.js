import { useRouter } from "next/dist/client/router";
export default function CategoryItem({categoryItem,index,styles}) {
    const router = useRouter()
    return(
        <div className={styles.categoryitem} style={{flexDirection: index % 2 === 0 ?"row" :'row-reverse'}}>
            <img className={styles.bannerimage} src={categoryItem?.imageUrl} alt={categoryItem.name} />
            <div className={styles.catdetails}>
                <p className={styles.categoryname}>{categoryItem?.name}</p>
                <p className={styles.catdescription} >{categoryItem?.description}</p>
                <button onClick={()=>{
                        router.push({
                            pathname:"/products",
                            query:{
                                id:categoryItem.id
                            }
                        })
                }} className={styles.catbutton}>{`exlpore ${categoryItem.key}`}</button>
            </div>
        </div>
    )
    
}