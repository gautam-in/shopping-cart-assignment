import {
  elements
} from '../views/base'

export const validateEmail = (inputString) => {
  const emailPattern = new RegExp(elements.validators.emailPattern)
  if (emailPattern.test(inputString)) {
    return true
  } else {
    return false
  }
}

export const validateBlank = (inputString) => {
  if (inputString !== elements.validators.blankPattern) {
    return true
  } else {
    return false
  }
}

export const passwordCriteria = (inputString) => {
  const passwordPattern = new RegExp(elements.validators.passwordCriteriaPattern)
  if (passwordPattern.test(inputString)) {
    return true
  } else {
    return false
  }
}

export const spaceCheck = (inputString) => {
  const spacePattern = new RegExp(elements.validators.spacePattern)
  if (spacePattern.test(inputString)) {
    return true
  } else {
    return false
  }
}
