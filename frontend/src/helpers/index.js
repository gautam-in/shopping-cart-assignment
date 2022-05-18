export const getEle = (id) => document.getElementById(id);

// 1000 elements...
// innerHTML (destroy only): 156ms
// innerHTML (create only): 15ms
// innerHTML (destroy & create): 172ms
// replaceHtml (destroy only): 0ms (faster)
// replaceHtml (create only): 15ms (~ same speed)
// replaceHtml (destroy & create): 15ms (11.5x faster)

// 15000 elements...
// innerHTML (destroy only): 14703ms
// innerHTML (create only): 250ms
// innerHTML (destroy & create): 14922ms
// replaceHtml (destroy only): 31ms (474.3x faster)
// replaceHtml (create only): 250ms (~ same speed)
// replaceHtml (destroy & create): 297ms (50.2x faster)

export const replaceHtml = (el, html) => {
  let oldEl = typeof el === "string" ? document.getElementById(el) : el;
  let newEl = oldEl.cloneNode(false);
  newEl.innerHTML = html;
  if (oldEl && oldEl.parentNode) oldEl.parentNode.replaceChild(newEl, oldEl);
  /* Since we just removed the old element from the DOM, return a reference
	to the new element, which can be used to restore variable references. */
  return newEl;
};
