import { useRouter } from "next/dist/client/router";
export default function CategoryItem({categoryItem,index}) {
    const router = useRouter()
    return(
        <div style={{display:'flex',flexDirection: index % 2 === 0 ?"row" :'row-reverse'}}>
            <img style={{width:"30%"}} src={categoryItem?.imageUrl} />
            <div style={{display:"flex", flex:1, flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
                <p style={{fontSize:24,fontWeight:'bold'}}>{categoryItem?.name}</p>
                <p>{categoryItem?.description}</p>
                <button onClick={()=>{
                        router.push({
                            pathname:"/products",
                            query:{
                                id:categoryItem.id
                            }
                        })
                }} style={{background:"rgb(204, 0, 82)",padding:"0px 8px",minWidth:100,height:40,border:"none",color:"#fff"}}>{`exlpore ${categoryItem.key}`}</button>
            </div>
        </div>
    )
    
}