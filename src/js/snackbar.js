/**
 * Creates a new Snackbar.
 * @class Snackbar
 * @classdesc handles view form the snackbar whis is used for displaying messages to the user
 */

class Snackbar {
  /**
   * @constructs Snackbar
   */
  constructor() {
    this.snackbar = document.getElementById('snackbar')
  }

  /**
   * @function updateSnackBar
   * @param {string} message - messages supplied by the controller
   * @param {boolean} flag - controls is used to change the message color
   */

  updateSnackBar(message, flag) {
    const color = flag ? '#6eff3a' : '#fb0016'
    this.snackbar.innerHTML = message
    this.snackbar.style.color = color
    this.snackbar.classList.add('show')
    setTimeout(() => {
      this.snackbar.classList.replace('show', 'snackbar')
      this.snackbar.innerHTML = 'No Products added'
    }, 2000)
  }
}

export default Snackbar
