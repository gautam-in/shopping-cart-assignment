import React from 'react';
import Enzyme,{shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
Enzyme.configure({adapter: new Adapter()});
const map = {};
const props = {};
window.addEventListener = jest.fn((event, cb) => {
  map[event] = cb;
});
// const elementMock = { addEventListener: jest.fn() };
// jest.spyOn(document, 'getElementById').mockImplementation(() => elementMock);
const app = shallow(<App {...props} />);
// const mountApp = mount(<App {...props} />);
const instance = app.dive().instance();
// console.warn(instance);
const spyoffline = jest.spyOn(instance,'offline');
const spyonline = jest.spyOn(instance,'online');
it('Renders App Correctly',()=>{
    expect(app).toMatchSnapshot()
});
describe('When Componene mounted',()=>{
    // console.warn(app.props());
    it('defauilt state',()=>{
        expect(app.state()).toEqual({});
    });
    it('trigger browser online event',()=>{
        // simulate event
        map.online({ key: 'online' });
        instance.online();
        expect(spyonline).toHaveBeenCalled();
        spyonline.mockRestore();
    })
    it('trigger browser offline event',()=>{
        // simulate event
        map.offline({ key: 'offline' });

        instance.offline();
        expect(spyoffline).toHaveBeenCalled();
        spyoffline.mockRestore();

        // expect(instance.offline).toHaveBeenCalled();
        // expect(mountApp.online()).toBe(true);
        // expect(elementMock.addEventListener).toBeCalledWith('online', expect.any(Function), false);
    });
});