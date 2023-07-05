import { render } from "@testing-library/react";
import CartCheckoutButton from ".";

// Tests that the component renders a checkout button
it("Tests that the component renders a checkout button", () => {
  const { getByText } = render(<CartCheckoutButton />);
  const buttonElement = getByText("Proceed to checkout");
  expect(buttonElement).toBeInTheDocument();
  const promoTextElement = getByText(
    "Promo code can be applied on payment page"
  );
  expect(promoTextElement).toBeInTheDocument();
});
