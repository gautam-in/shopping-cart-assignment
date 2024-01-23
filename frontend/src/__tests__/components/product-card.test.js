import { CartContext } from "../../context/cart"
const { render, screen, waitFor } = require("@testing-library/react")
const { ProductCard } = require("../../components/product-card")

jest.mock("../../context/cart")
jest.mock("../../components/product-image")

describe("Testing product card component", () => {
  it("should show add button when quantity is zero", async () => {
    render(
      <CartContext.Provider
        value={{
          cartItems: [
            {
              category: "category",
              description: "description",
              id: "id",
              imageURL: "imageURL",
              name: "name",
              sku: "sku",
              price: 10,
              stock: 11,
              quantity: 0,
            },
          ],
          addCartItem: () => {},
          loading: false,
          setLoading: () => {},
          isCartDisplayed: false,
          setIsCartDisplayed: () => {},
        }}
      >
        <ProductCard
          product={{
            category: "category",
            description: "description",
            id: "id",
            imageURL: "imageURL",
            name: "name",
            sku: "sku",
            price: 10,
            stock: 11,
          }}
        />
      </CartContext.Provider>,
    )
    await waitFor(async () => {
      expect(
        await screen.findByRole("button", { name: /Add/ }),
      ).toBeInTheDocument()
    })
    expect(screen.getByRole("heading", { name: /name/i })).toBeInTheDocument()
    expect(screen.getByText("description")).toBeInTheDocument()
  })
})
