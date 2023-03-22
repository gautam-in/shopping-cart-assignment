import { expect, it } from "vitest"
import { render } from "@testing-library/react"

import { Register } from "../"
import { WrappedComponent } from "../../../../utils"

it("should match Homepage snapshot", () => {
  const wrapper = render(
    <WrappedComponent>
      <Register />
    </WrappedComponent>
  )

  expect(wrapper).toMatchSnapshot()
})
