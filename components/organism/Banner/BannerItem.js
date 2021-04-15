import styles from './banner.module.scss'
export default function BannerItem({bannerItem}) {
    return(
        <div className={styles.banner}>
            <img className={styles.bannerimage} src={bannerItem?.bannerImageUrl} alt={bannerItem?.name} />
        </div>
    )
    
}