import { useEffect, useState } from "react"
import { FaAngleUp } from "react-icons/fa"

import { Button } from "../Common"

export const ScrollToTop = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="scroll-to-top">
      {show && (
        <Button type="button" variant="dark" handleClick={goToTop}>
          <FaAngleUp className="icon" />
          &nbsp;Go to top
        </Button>
      )}
    </div>
  )
}
