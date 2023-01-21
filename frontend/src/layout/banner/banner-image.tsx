type Props = {
  bannerImageUrl: string
  bannerImageAlt: string
}

const BannerImage = ({ bannerImageAlt, bannerImageUrl }: Props) => {
  return (
    <img src={bannerImageUrl} alt={bannerImageAlt} className="banner-img" />
  )
}

export default BannerImage
