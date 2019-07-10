class CreateConstant {
    constructor() {
        this.item_counter = 0;
        this.content = require('../../server/content/index.get.json')
    }
}

module.exports = new CreateConstant();