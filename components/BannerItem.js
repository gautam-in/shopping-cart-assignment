export default function BannerItem({bannerItem}) {
    return(
        <div style={{width:"100%"}}>
            <img  style={{width:"100%"}} src={bannerItem?.bannerImageUrl} />
        </div>
    )
    
}