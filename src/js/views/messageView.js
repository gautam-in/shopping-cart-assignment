import {
  elements
} from './base';
import {
  messages
} from '../models/Messages';

export const renderMessage = (type, message, element) => {

  let markup = `
    <div id="message-box" class="%%message-box-class%%">
    <span class="closebtn" onclick="this.parentElement.style.display='none';">x</span>
  <strong> %%message%% </strong>
  </div>
    `;
  markup = markup.replace('%%message%%', message);
  switch (type) {
    case messages.success.selector:
      markup = markup.replace('%%message-box-class%%', messages.success.cssSelector)
      break;

    case messages.failure.selector:
      markup = markup.replace('%%message-box-class%%', messages.failure.cssSelector)
      break;
    case messages.warning.selector:
      markup = markup.replace('%%message-box-class%%', messages.warning.cssSelector)
      break;
    case messages.info.selector:
      markup = markup.replace('%%message-box-class%%', messages.info.cssSelector)
      break;

  };

  let messageElement = document.querySelector('#message-box')

  if (messageElement) {
    messageElement.parentNode.removeChild(messageElement);
    element.insertAdjacentHTML('beforebegin', markup);
  } else {
    element.insertAdjacentHTML('beforebegin', markup);
  }

};
