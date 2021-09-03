export const getDeviceType = (userAgent) => {
  const isMobile = userAgent?.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i
  );
  return isMobile ? "MOBILE" : "DESKTOP";
};

export const formatSize = (size) => size.replace("px", "");

export default {};
