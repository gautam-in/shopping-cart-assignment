import {
  messages
} from '../models/Messages'

export const renderMessage = (type, message, element) => {
  let markup = `
    <div id="message-box" class="%%message-box-class%%">
    <i class="fa fa-times closebtn" onclick="this.parentElement.style.display='none';"></i>
  <strong> %%message%% </strong>
  </div>
    `
  markup = markup.replace('%%message%%', message)
  switch (type) {
    case messages.success.selector:
      markup = markup.replace('%%message-box-class%%', messages.success.cssSelector)
      break

    case messages.failure.selector:
      markup = markup.replace('%%message-box-class%%', messages.failure.cssSelector)
      break
    case messages.warning.selector:
      markup = markup.replace('%%message-box-class%%', messages.warning.cssSelector)
      break
    case messages.info.selector:
      markup = markup.replace('%%message-box-class%%', messages.info.cssSelector)
      break
  }
  const messageElement = document.querySelector('#message-box')
  if (messageElement) {
    messageElement.parentNode.removeChild(messageElement)
    element.insertAdjacentHTML('beforebegin', markup)
  } else {
    element.insertAdjacentHTML('beforebegin', markup)
  }
}
