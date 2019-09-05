import {
  elements
} from './base'

export const renderFakeLoader = (show, time, pageToView) => {
  time = time * 1000
  if (show) {
    console.log(elements.loader)
    elements.loader.style.display = 'block'
    setTimeout(function () {
      elements.loader.style.display = 'none'
      pageToView()
    }, time)
  }
}

export const XHRLoader = (show) => {
  if (show) {
    elements.loader.style.display = 'block'
  } else {
    elements.loader.style.display = 'none'
  }
}
