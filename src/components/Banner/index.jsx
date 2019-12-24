import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { hideBannerAction } from '../../actions';

import { Notification } from "../../utils/notification";

const Banner = ({ bannerInfo, hideBanner }) => {

    if (bannerInfo) {

        Notification('error', `${bannerInfo.title}`, 'top-right');

        hideBanner();
    }

    return null;
};

Banner.propTypes = {
    bannerInfo: PropTypes.object,
    hideBanner: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
    hideBanner: () => dispatch(hideBannerAction()),
});

const mapStateToProps = (state) => ({
    bannerInfo: state.getIn(['app', 'bannerInfo']),
});

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
