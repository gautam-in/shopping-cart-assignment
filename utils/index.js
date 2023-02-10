let handlebarsHelpers = require('handlebars-helpers')([
    'array',
    'string',
    'comparison',
])

handlebarsHelpers.renderSection = require('./hbs.helpers/renderSection')

module.exports = handlebarsHelpers
