
import { validateLoginForm } from './validateLoginForm';
describe("test login form", () => {
    test("should success on valid form data", () => {
        const formData = {email:"ram@gmail.com", password:"one123"}
        const result = validateLoginForm(formData)
        expect(result).toEqual({})
    })
    test("should return error on both failed", () => {
        const formData = { email: "ram@g.c", password: "123"}
        const result = validateLoginForm(formData)
        const expectedResult = {email:"Please enter a valid email", pwd: "Password must have at least six characters"}
        expect(result).toEqual(expectedResult)
    })
    test("should return error on email failed", () => {
        const formData = { email: "ram@g.c", password: "one123"}
        const result = validateLoginForm(formData)
        const expectedResult = {email:"Please enter a valid email"}
        expect(result).toEqual(expectedResult)
    })
    test("should return error on pwd failed", () => {
        const formData = { email: "ram@gmail.com", password: "one12"}
        const result = validateLoginForm(formData)
        const expectedResult = {pwd: "Password must have at least six characters"}
        expect(result).toEqual(expectedResult)
    })
})