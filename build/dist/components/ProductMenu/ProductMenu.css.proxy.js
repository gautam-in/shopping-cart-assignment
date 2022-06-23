// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/css2?family=Dosis:wght@400;600;700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Fascinate&display=swap\");\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 37.5%;\n  font-family: \"Dosis\", sans-serif;\n  box-sizing: border-box;\n  /* Mobile Landscape */\n  /* Tablet */\n  /* Desktop Base */\n  /* Desktop Large */\n  /* Larger breakpoints */\n  /*\n    Responsive breakpoints\n    1920px: styles applied to screens 1920px wide and above\n    1440px: styles applied to screens 1440px wide and above\n    1280px: styles applied to screens 1280px wide and above\n    Desktop (base): styles apply to all devices unless overridden at other device breakpoints\n    Tablet: styles applied to screens 991px wide and below\n    Mobile landscape: styles applied to screens 767px wide and below\n    Mobile portrait: styles applied to screens 478px wide and below\n  */\n}\n@media only screen and (min-width: 478px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 768px) {\n  html {\n    font-size: 50%;\n  }\n}\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 56.25%;\n  }\n}\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 62.5%;\n  }\n}\n@media only screen and (min-width: 1440px) {\n  html {\n    font-size: 68.75%;\n  }\n}\n\n.product-menu {\n  margin: 7rem 0 0rem 0;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: flex-start;\n  align-items: center;\n  width: 20%;\n  min-width: 25rem;\n  background-color: rgb(236, 236, 236);\n}\n.product-menu > a {\n  font-size: 2rem;\n  text-decoration: none;\n  padding: 2rem;\n  text-align: left;\n  transition: all 0.2s;\n}\n.product-menu > a:hover {\n  cursor: pointer;\n  color: #b3005c;\n  border-bottom: 0.5px solid currentColor;\n  width: 80%;\n}\n\n.active-menu-link {\n  color: #b3005c;\n  border-bottom: 0.5px solid currentColor;\n  width: 80%;\n}\n\n.inactive-menu-link {\n  color: #666666;\n  border-bottom: 0.5px solid #bfbfbf;\n  width: 85%;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}