import { getFetch } from "./getFetch"
import * as axios from "axios";
jest.mock("axios")

describe("get server data",  () => {
    test("should return server data", async() => {
        axios.get.mockResolvedValue({data: {product: "oils", description: "Vegetable oils"}})
        const serverData = await getFetch()
        expect(serverData).toEqual({product: "oils", description: "Vegetable oils"})
    })
})