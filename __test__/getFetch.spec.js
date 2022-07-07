import { getFetch } from "./../src/customHooks/getFetch"
import  axios from "axios";
jest.mock("axios")

describe("get server data",  () => {
    test("should return server data", async() => {
        axios.get.mockResolvedValue({data: [{product: "oils", description: "Vegetable oils"}]})
        expect.assertions(1);
        const serverData = await getFetch("http://localhost:4000/productsJSON")
        expect(serverData).toEqual([{product: "oils", description: "Vegetable oils"}])
    })
})