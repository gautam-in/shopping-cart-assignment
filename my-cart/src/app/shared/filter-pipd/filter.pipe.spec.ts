import { FilterPipe } from "./filter.pipe";


describe('Order Pipe',()=>{
    let  filterPipe: FilterPipe;
    let groceries;
    let filteredGroceries;
    beforeEach(()=>{
        filterPipe = new FilterPipe();
    })
    it('pipe should filter Items',()=>{
        groceries = [
            {name:"Apple", category:"fruits"},
            {name:"Tomato", category:"Vegetables"},
        ]
        filteredGroceries = filterPipe.transform(groceries,'category','fruits');
        expect(groceries.filter(item=> item.category === 'fruits')).toEqual(filteredGroceries)
    })
})