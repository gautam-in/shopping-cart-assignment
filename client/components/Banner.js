import classes from '../styles/banner.module.scss';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Banner = (props) => {
  const { title, desc, categoryId, image, imageAlt, reverse } = props;
  return (
    <section
      className={`${classes.container} ${reverse ? classes.reverse : ''}`}
    >
      <div className={classes.imageContainer}>
        <Image
          src={image}
          alt={imageAlt}
          width={200}
          height={100}
          layout='responsive'
        />
      </div>
      <span className={classes.content}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.description}>{desc}</p>
        <Link href={`/products?category=${categoryId}`}>
          <a className={classes.linkButton}>Explore {title}</a>
        </Link>
      </span>
    </section>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

Banner.defaultProps = {
  reverse: false,
};
export default Banner;
