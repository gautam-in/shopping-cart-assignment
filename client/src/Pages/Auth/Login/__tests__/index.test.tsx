import { expect, it } from "vitest"
import { render } from "@testing-library/react"

import { Login } from "../"
import { WrappedComponent } from "../../../../utils"

it("should match Homepage snapshot", () => {
  const wrapper = render(
    <WrappedComponent>
      <Login />
    </WrappedComponent>
  )

  expect(wrapper).toMatchSnapshot()
})
