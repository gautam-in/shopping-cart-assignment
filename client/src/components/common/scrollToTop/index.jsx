import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import "./styles.scss";

const ScrollToTop = ({href}) => {
  return (
    <a
      className='scroll-to-top-link'
      href={href}>
     Scroll to top <UpIcon />
    </a>
  );
};

export default ScrollToTop;