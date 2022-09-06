//utils.js - All utility functions are here

//Global objects
window.dom = {};
window.ajax = {};

//Dom methods to get an element
dom.getElById = function (id) {
  return dom._get(id, document, "els", "#" + id, "getElementById");
};

dom.getElsByClass = function (className, root) {
  return dom._get(
    className,
    root,
    "lists",
    "." + className,
    "getElementsByClassName"
  );
};

dom.getElsByTag = function (tag, root) {
  return dom._get(tag, root, "lists", tag, "getElementsByTagName");
};

dom.getEl = function (selector, root) {
  return dom._get(selector, root, "els", selector, "querySelector");
};

dom.getEls = function (selector, root) {
  return dom._get(selector, root, "lists", selector, "querySelectorAll");
};

dom._get = function (selector, root, type, key, fn) {
  var el;
  root = root || document;
  el = root[fn](selector);
  return el;
};

//Ajax methods
ajax.get = function (url) {
  var req = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          resolve(xhr);
        } else {
          reject(xhr);
        }
      }
    };
    xhr.send();
  });
  return req;
};

ajax.post = function (url, data) {
  var req = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.send(data);
    resolve(xhr);
  });
  return req;
};
