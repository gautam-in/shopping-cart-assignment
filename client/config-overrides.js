/* config-overrides.js */
const { useBabelRc, override } = require("customize-cra");

module.exports = override(
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc()
);