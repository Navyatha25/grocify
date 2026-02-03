import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollHandler = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // If URL has hash → scroll to section
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Normal route change → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [pathname, hash])

  return null
}

export default ScrollHandler
