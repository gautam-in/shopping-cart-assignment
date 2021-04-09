import { EllipsisPipe } from "./ellipsis.pipe"


describe('Order Pipe', () => {
    let ellipsisPipe: EllipsisPipe;
    beforeEach(() => {
        ellipsisPipe = new EllipsisPipe();
    })
    it('pipe should ellipsize longer the text', () => {
        let text = "Publicis Sapient helps established organizations get to their future, digitally-enabled state, both in the way they work and serve their customers."
        let ellipsizedText = ellipsisPipe.transform(text, 10);
        expect(ellipsizedText.length).toBe(13);
    })

    it('pipe should not ellipsize shorter the text', () => {
        let text = "Publicis"
        let ellipsizedText = ellipsisPipe.transform(text, 10);
        expect(text.length).toBe(ellipsizedText.length);
    })
})