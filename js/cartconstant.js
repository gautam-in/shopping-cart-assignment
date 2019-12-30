class CreateConstant {
    constructor() {
    	this.items =[];
        this.item_counter = 0;
    }
    addItem(item){
    	this.items.push(item);
    }
}

module.exports = new CreateConstant();