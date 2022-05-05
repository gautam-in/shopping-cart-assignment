export function isMobile() {
  return window.matchMedia('screen and (max-width: 767px)').matches;
}
export function isTablet() {
  return (
    window.matchMedia('screen and (min-width: 768px)').matches &&
    window.matchMedia('screen and (max-width: 1024px)').matches
  );
}
export function isDesktop() {
  return window.matchMedia('screen and (min-width: 1024px)').matches;
}

export function shorten(str, maxLen, separator = ' ') {
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen));
}

export const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
