const sizes = {
    mobile: '480px',
    tablet: '768px',
    laptop: '1024px'
};

const devices = {
    mobile: `(max-width: ${sizes.mobile})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(max-width: ${sizes.laptop})`
};

export default devices;