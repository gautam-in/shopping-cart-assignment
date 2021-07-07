import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBanners } from '../../../store/actions';
import BannersComponents from '../../components/Banners';

const Banner = ({ banners, fetchBanners }) => {
  useEffect(() => {
    fetchBanners()
  }, []);

  if (banners) {
    return <BannersComponents banners={banners} />;
  }
  else{
      return<div>loading..</div>
  }
};
Banner.propTypes = {
  banners: PropTypes.array,
  fetchBanners: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    banners: state.categories.banners,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBanners: bindActionCreators(fetchBanners, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
