// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Fascinate&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 37.5%;\n  font-family: \"Dosis\", sans-serif;\n  box-sizing: border-box;\n  /* Mobile Landscape */\n  /* Tablet */\n  /* Desktop Base */\n  /* Desktop Large */\n  /* Larger breakpoints */\n  /*\n    Responsive breakpoints\n    1920px: styles applied to screens 1920px wide and above\n    1440px: styles applied to screens 1440px wide and above\n    1280px: styles applied to screens 1280px wide and above\n    Desktop (base): styles apply to all devices unless overridden at other device breakpoints\n    Tablet: styles applied to screens 991px wide and below\n    Mobile landscape: styles applied to screens 767px wide and below\n    Mobile portrait: styles applied to screens 478px wide and below\n  */\n}\n@media only screen and (min-width: 478px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 56.25%;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 62.5%;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  html {\n    font-size: 68.75%;\n  }\n}\n\n.nav {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n.nav > div {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  padding: 0 2rem;\n  width: 100%;\n}\n@media only screen and (min-width: 478px) {\n  .nav > div {\n    width: 100%;\n    padding: 0 2.5rem;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .nav > div {\n    width: 100%;\n    padding: 0 4rem;\n  }\n}\n.nav .nav--left,\n.nav .nav--right {\n  font-weight: 600;\n}\n.nav .nav--left > a,\n.nav .nav--right > a {\n  transition: all 0.2s;\n  text-decoration: none;\n}\n.nav .nav--left > a:hover,\n.nav .nav--right > a:hover {\n  cursor: pointer;\n  color: #b3005c;\n}\n.nav .nav--cart > button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1.8rem;\n  background-color: #fff;\n  color: #8d8d8d;\n  border: none;\n  text-decoration: none;\n  height: 7rem;\n  transition: all 0.2s;\n  padding: 0 1.8rem;\n}\n.nav .nav--cart > button:hover {\n  cursor: pointer;\n  background-color: #b3005c;\n  color: #fff;\n}\n.nav .cart-icon {\n  margin: 0rem 1rem 0 0;\n  font-size: 1.5em;\n}\n\n.activeLink {\n  color: #b3005c;\n}\n\n.inactiveLink {\n  color: #8d8d8d;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}