class Cart {
    constructor() {
    	this.items =[];
        this.item_counter = 0;
    }
    getItems(){
    	return this.items;
    }

    addItem(item) {
    	this.items.push(item);
    }
}

