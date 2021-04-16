import { OrderPipe } from "./order.pipe"


describe('Order Pipe', () => {
    let orderPipe: OrderPipe;
    beforeEach(() => {
        orderPipe = new OrderPipe();
    })
    it('pipe should order the items based on id', () => {
        let students = [
            { id: 100, name: "Athul" },
            { id: 1, name: "Anjay" }
        ]
        students = orderPipe.transform(students, 'id');
        expect(students[0].id).toBeLessThan(students[1].id, 'Ordering working properly');
    })
})