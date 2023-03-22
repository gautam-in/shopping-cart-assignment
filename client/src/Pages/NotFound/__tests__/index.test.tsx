import { expect, it } from "vitest"
import { render } from "@testing-library/react"

import { NotFoundPage } from "../"
import { WrappedComponent } from "../../../utils"

it("should match Homepage snapshot", () => {
  const wrapper = render(
    <WrappedComponent>
      <NotFoundPage />
    </WrappedComponent>
  )

  expect(wrapper).toMatchSnapshot()
})
