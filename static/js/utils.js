//utils.js - All utility functions are here

//Global objects
window.dom = {};
window.ajax = {};
window.utils = {};

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

dom._create = function (el, parent, opts) {
  if (opts) {
    var prop;

    for (prop in opts) {
      if (opts[prop] && typeof opts[prop] !== "object") {
        if (~prop.indexOf("-") || prop === "role") {
          el.setAttribute(prop, opts[prop]);
        } else {
          el[prop] = opts[prop];
        }
      } else if (typeof opts[prop] === "object") {
        if (prop === "style") {
          dom._setStyles(el, opts[prop]);
        } else if (opts[prop].ns && opts[prop].attr && opts[prop].value) {
          el.setAttributeNS(opts[prop].ns, opts[prop].attr, opts[prop].value);
        }
      }
    }
  }

  if (parent) dom.append(parent, el);
  return el;
};

dom.createEl = function (type, parent, opts) {
  return dom._create(document.createElement(type), parent, opts);
};

dom.append = function (parent, child) {
  if (parent) parent.appendChild(child);
};

dom.findElInTree = function (el, ancestor, selector, ceiling) {
  if (!selector) return null;

  ancestor = ancestor || ceiling || document;

  var matches = Array.from(dom.getEls(selector, ancestor)).filter(function (
      res
    ) {
      return dom.isElInTree(el, res, ancestor);
    }),
    matchArr,
    match,
    parent;

  if (matches.length) {
    if (matches.length === 1) return matches[0];

    parent = el.parentNode;
    while (!match && parent !== document.body) {
      matchArr = matches.filter(function (elem) {
        return elem === parent;
      });

      if (matchArr.length) {
        match = matchArr[0];
      } else {
        parent = parent.parentNode;
      }
    }

    return match;
  }

  return null;
};
dom.isElInTree = function (el, ancestor, ceiling) {
  ceiling = ceiling || document;

  while (el && el !== ceiling) {
    if (el === ancestor) return true;
    el = el.parentNode;
  }

  return false;
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
          if (status === 0) alert("Something went wrong, server not available");
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
    xhr.open("POST", url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const status = xhr.status;
        if (status === 0 || (status >= 200 && status < 400)) {
          resolve(xhr);
          if (status === 0) alert("Something went wrong, server not available");
        } else {
          reject(xhr);
        }
      }
    };
    xhr.send();
  });
  return req;
};

//To load the script programitically
ajax.loadScript = function (opts) {
  if (typeof opts !== "object") opts = { url: opts };
  var _opts = {
    type: "text/javascript",
  };

  if (opts.async) _opts.async = "async";
  if (opts.defer) _opts.defer = "defer";

  return new Promise(function (resolve, reject) {
    var loadedScript = dom.getEl('[src="' + opts.url + '"]');

    if (loadedScript) {
      resolve(this);
    } else {
      var script = dom.createEl("script", null, _opts);

      script.onload = function () {
        resolve(this);
      };

      script.src = opts.url;
      dom.append(document.body, script);
    }
  });
};

dom.createForm = function (o) {
  if (!o) return;
  let _form = dom.createEl("form", null, {
    className: "-flex -top-to-bottom -nowrap " + (o.formclass || ""),
  });
  if (o && o.fields) {
    o.fields.forEach((el) => {
      let _field_container = dom.createEl("div", _form, {
        className: "-flex-column -flex -top-to-bottom -field-container",
      });
      let _field = dom.createEl("input", _field_container, {
        className: "-flex-column -field",
        type: el.type,
        required: el.required,
      });
      let _field_label = dom.createEl("label", _field_container, {
        className: "-flex-column -label ",
        innerText: el.label,
      });
    });
    let _button_container = dom.createEl("button", _form, {
      className: "-flex-column primary-button",
      innerText: o.buttonlabel,
    });
    return _form;
  }
};

dom.previousSiblingEl = function (el) {
  var prev = el.previousSibling;

  while (prev && prev.nodeType !== 1) {
    prev = prev.previousSibling;
  }

  return prev;
};

dom.nextSiblingEl = function (el) {
  var next = el.nextSibling;

  while (next && next.nodeType !== 1) {
    next = next.nextSibling;
  }

  return next;
};
