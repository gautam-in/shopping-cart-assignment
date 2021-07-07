import {validate} from './validate';

describe('Validate', () => {
    it('should validate the form entries', () => {
        const wrapper = {
            firstName: 'asdasd', lastName:'asdasd', email:'asd@asd', password:'asdasd1', cnfPassword:'asdasd1'
        };
        expect(validate(wrapper)).toEqual({isValid: true, error:{}})
    })

    it('should validate the false entries', () => {
        const wrapper = {
            firstName: 'asd', lastName:'asdasd', email:'asd@asd', password:'asdasd1', cnfPassword:'asdasd1'
        };
        expect(validate(wrapper)).toEqual({isValid: false, error:{firstName:'Length should be atleast 6'}})
    })

    it('should validate the form entries', () => {
        const wrapper = {
            firstName: 'asdasd', lastName:'asdasd', email:'asd@asd', password:'asdasd', cnfPassword:'asdasd'
        };
        expect(validate(wrapper)).toEqual({isValid: false, error:{password: 'Password should be alphanumeric'}})
    })
})