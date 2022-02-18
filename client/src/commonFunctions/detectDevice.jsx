export const detectDevice = (value) => {
  const mobile = window.matchMedia("(max-width: 480px)"),
    tablet = window.matchMedia("(min-width:481px) and (max-width: 1024px)");

  if (value === "mobile") {
    return mobile.matches;
  }

  if (value === "tablet") {
    return tablet.matches;
  }

  return true;
};
