import "./icons.scss";

const iconAdd = () => {
  return `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
};

const iconRemove = () => {
  return `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
};

const iconClear = ({ size = 18 }) => {
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
};

const iconLoading = ({ size = 18 }) => {
  return `<svg focusable="false" width="${size}" height="${size}" class='spin'  aria-hidden="true" viewBox="0 0 24 24" data-testid="LoopIcon">
            <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z">
          </path>
        </svg>`;
};

const iconCart = () => {
  return `<svg
         focusable="false"
         aria-hidden="true"
         viewBox="0 0 26 26"
         tabindex="-1"
         title="ShoppingCart"
          width="30" 
          height="30"
        >
          <path
            d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
          ></path>
        </svg>`;
};

const iconForward = () => {
  return `
  <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      tabindex="-1"
      title="ArrowForwardIos"
       width="22" 
          height="22"
  >
    <path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"></path>
  </svg>
  `;
};

export { iconAdd, iconForward, iconCart, iconRemove, iconClear, iconLoading };
