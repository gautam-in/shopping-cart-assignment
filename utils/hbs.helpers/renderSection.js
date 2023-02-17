const cartCalc = require('../cartCalculation')

module.exports = {
    renderSection: function (name, block) {
        if (!this.renderSections) {
            this.renderSections = {}
        }
        this.renderSections[name] = block.fn(this)
        return null
    },
    ...cartCalc
}
