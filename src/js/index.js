// Models Imports
import {
  messages
} from './models/Messages'
import {
  servicesData
} from './models/Services'

// Routes Imports
import {
  routes
} from './routes/base'

// Common Functionalities Imports
import {
  validateEmail,
  validateBlank,
  passwordCriteria,
  spaceCheck
} from './models/Common'

// Views Imports
import {
  elements
} from './views/base'
import {
  renderMainPage
} from './views/mainPageView'
import {
  renderLogin
} from './views/loginView'
import {
  renderSignup
} from './views/signupView'
import {
  renderProducts
} from './views/ProductsView'
import {
  renderMessage
} from './views/messageView'
import {
  renderFakeLoader,
  XHRLoader
} from './views/loaderView'
import {
  renderCarousel
} from './views/carouselView'
import {
  renderCart
} from './views/cartView'

// API section
import {
  GETBanners,
  GETCategories,
  GETProducts
} from './services/appServices'
/** Global state of the app
  =>Message
  =>Routes
 */
const state = {}

/**
 * Routes Registration
 */
const registerRoutes = () => {
  if (!state.routes) {
    state.routes = routes
  }
  routes.mainPage.addEventListener('click', e => {
    renderCarousel(true)
    renderMainPage()
  })
  routes.login.addEventListener('click', e => {
    // Load Login View
    renderCarousel(false)
    renderLogin()
    loginController()
  })

  routes.signup.addEventListener('click', e => {
    // Load Register View
    renderCarousel(false)
    renderSignup()
    signUpController()
  })

  routes.products.addEventListener('click', e => {
    // Load Products View
    XHRLoader(true)
    if (!servicesData.products) {
      productsController()
    } else {
      elements.registerdEvents.productsPage.handleButtonsEventStatus = false
      renderCarousel(false)
      renderProducts(false)
      XHRLoader(false)
    }
    // console.log("Via Ptroducts");
  })
  routes.cart.addEventListener('click', e => {
    // Load Products View
    if (!servicesData.cartStatus.cartDetails.onScreen) {
      renderCart(true)
    }
    // renderCart(true);
    cartController()
  })
}

/**
 * Message Registration
 */
const registerMessages = () => {
  if (!state.notify) {
    state.notify = messages
  }
}

const loginController = () => {
  if (!state.loginPage) {
    state.loginPage = {}
  }
  elements.loginPage.submitButton.addEventListener('click', e => {
    // Validate Inputs
    if (!validateEmail(elements.loginPage.userNameInput.value)) {
      // Show Email Message
      renderMessage(state.notify.failure.selector, state.notify.failure.login.invalidEmail, elements.loginPage.userNameInput)
    } else if (!validateBlank(elements.loginPage.passwordInput.value)) {
      // Show Password Message
      renderMessage(state.notify.failure.selector, state.notify.failure.login.passwordBlank, elements.loginPage.userForm)
    } else {
      // console.log(validateEmail(elements.loginPage.userNameInput.value) && validateBlank(elements.loginPage.passwordInput.value));
      renderFakeLoader(true, 3, renderMainPage)
    }
  })
}

const signUpController = () => {
  if (!state.signUpPage) {
    state.signUpPage = {}
  }

  elements.signUpPage.submitButton.addEventListener('click', e => {
    // Validate Inputs
    if (!validateEmail(elements.signUpPage.email.value)) {
      // Show Email Message
      renderMessage(state.notify.failure.selector, state.notify.failure.signUp.invalidEmail, elements.signUpPage.userForm)
    } else if (!validateBlank(elements.signUpPage.firstNameInput.value) || !validateBlank(elements.signUpPage.lastNameInput.value)) {
      // Show Password Message
      renderMessage(state.notify.failure.selector, state.notify.failure.signUp.formMandatory, elements.signUpPage.userForm)
    } else if (!validateBlank(elements.signUpPage.password.value) || !validateBlank(elements.signUpPage.confirmPassword.value)) {
      renderMessage(state.notify.failure.selector, state.notify.failure.signUp.passwordBlank, elements.signUpPage.userForm)
    } else if (!passwordCriteria(elements.signUpPage.password.value) || spaceCheck(elements.signUpPage.password.value)) {
      renderMessage(state.notify.failure.selector, state.notify.failure.signUp.passwordCriteria, elements.signUpPage.userForm)
    } else if (elements.signUpPage.password.value !== elements.signUpPage.confirmPassword.value) {
      renderMessage(state.notify.failure.selector, state.notify.failure.signUp.passwordMismatch, elements.signUpPage.userForm)
    } else {
      renderMessage(state.notify.success.selector, state.notify.success.signUp, elements.signUpPage.userForm)
      renderFakeLoader(true, 3, renderMainPage)
    }
  })
}

const productsController = () => {
  elements.registerdEvents.productsPage.handleButtonsEventStatus = false
  if (!state.productsPage) {
    state.productsPage = {}
  }
  GETCategories().subscribe(
    (data) => {
      if (data.response.statusCode === 200) {
        if (!servicesData.categories) {
          servicesData.categories = JSON.parse(data.body)
        }
      }
    },
    (err) => {
      console.error(err)
    }
  )

  GETProducts().subscribe(
    (data) => {
      if (data.response.statusCode === 200) {
        if (!servicesData.products) {
          servicesData.products = JSON.parse(data.body)
          renderCarousel(false)
          renderProducts(false)
          XHRLoader(false)
        }
      }
    },
    (err) => {
      console.error(err)
    }
  )
}

const cartController = () => {
  if (!state.cartView) {
    state.cartView = {}
  }

  elements.cartView.closeButtonIcon.addEventListener('click', e => {
    renderCart(false)
  })
}
// Initialize Application
const initApp = () => {
  XHRLoader(true)
  registerRoutes()
  registerMessages()
  GETBanners().subscribe(
    (data) => {
      if (data.response.statusCode === 200) {
        if (!servicesData.banners) {
          servicesData.banners = JSON.parse(data.body)
          renderCarousel(true)
          XHRLoader(false)
        }
      }
    },
    (err) => console.error(err)
  )
  renderMainPage()
}
initApp()
