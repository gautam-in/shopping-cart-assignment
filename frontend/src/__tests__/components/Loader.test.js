import { render, screen } from "@testing-library/react"
import { Loader } from "../../components/Loader"

it("should first", () => {
  render(<Loader />)
  expect(screen.getByText(/loading/i)).toBeInTheDocument()
})
