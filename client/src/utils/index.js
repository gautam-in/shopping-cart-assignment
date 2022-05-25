export const validateFormAndGetErrorMsg = (form, formValues) => {
    let value = ''
    let pattern = ''
    let errors = {}
    form.map((field, i) => {
        if (field.required) {
            value = formValues[field.id]
            pattern = field.pattern
            if(field?.condition) {
                errors = validateCondtionGetErrors(field, formValues, errors)
            }else if (!(pattern.test(value))) {
                errors[field.id] = field.errorMsg
            } else {
                delete errors[field.id]
            }
        }
    })
    return { errors, length: Object.keys(errors).length }
}

export const validateCondtionGetErrors = (field,formValues,errors) => {
    let {key, type} = field.condition
    switch(type) {
        case 'match' : 
            if(formValues[key] !== formValues[field.id]) {
                return {...errors, [field.id]: field.errorMsg}
            }
    }
    return errors
}
export const setInitialValues = (form) => {
    let initialValues = {}
    form.map((item, i) => initialValues[item['id']] = item['value'])
    return initialValues
}

export const updateDocumentTitle = (location) => {
    let { pathname } = location
    let [root, route, id = undefined] = pathname.split("/")
    let brandName = 'Sabka Bazar'
    let title = (root == '' && route == '') ? `${brandName} - Home` : route ? `${brandName} - ${route}` : ''
    document.title = `${title}`;
    if(id) {
        scrollToTop()
    }
    return `/${route}`
}

export const  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

export const FocusToErrorField = (elementsRef, errors) => {
    if(Object.keys(errors).length > 0) {
        elementsRef.current.map((ele) => {
          if(ele.name == Object.keys(errors)[0]) {
            ele.focus()
          }
        })
      }
}
export const isEmpty = (val) => {
    if (val === undefined)
        return true;
    if (typeof (val) == 'function' || typeof (val) == 'number' || typeof (val) == 'boolean' || Object.prototype.toString.call(val) === '[object Date]')
        return false;
    if (val == null || val.length === 0)        // null or 0 length array
        return true;
    if (typeof (val) == "object") {
        // empty object
        var r = true;
        for (var f in val)
            r = false;
        return r;
    }
    return false;
}