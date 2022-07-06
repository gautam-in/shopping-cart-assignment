import Footer from './footer';
import renderer from 'react-test-renderer';

describe('test footer snapshot', () => {
    it('test footer', () => {
        const component = renderer.create(<Footer />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})