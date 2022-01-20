import Head from 'next/head';
import PropTypes from 'prop-types';

const SEO = (props) => {
    const { title, desc, image } = props
    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={desc} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image} />
        </Head>
    );
}

SEO.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string,

}

SEO.defaultProps = {
    title: "Sabka Bazaar",
    desc: "Online Shopping India - Buy grocery, cakes, dairy, beverages, beauty and health care products",
    image: '/images/logo_2x.png'
}

export default SEO;
