let handlebarsHelpers = require('handlebars-helpers')([
    'array',
    'string',
    'comparison',
])
const extraHelpers = require('./hbs.helpers/renderSection')
Object.keys(extraHelpers).forEach((key) => {
    handlebarsHelpers[key] = extraHelpers[key]
})
module.exports = handlebarsHelpers
