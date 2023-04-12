import { expect, it } from "vitest"
import { render } from "@testing-library/react"

import { HomePage } from "../"
import { WrappedComponent } from "../../../utils"

it("should match Homepage snapshot", () => {
  const wrapper = render(
    <WrappedComponent>
      <HomePage />
    </WrappedComponent>
  )

  expect(wrapper).toMatchSnapshot()
})
