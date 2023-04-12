import { expect, it } from "vitest"
import { render } from "@testing-library/react"

import { ProductListingPage } from "../"
import { WrappedComponent } from "../../../utils"

it("should match Homepage snapshot", () => {
  const wrapper = render(
    <WrappedComponent>
      <ProductListingPage />
    </WrappedComponent>
  )

  expect(wrapper).toMatchSnapshot()
})
