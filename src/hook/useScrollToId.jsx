import { useCallback } from 'react'

function useSmoothScroll(offset = 0) {
  const scrollToId = useCallback(
    (id) => {
      const element = document.getElementById(id)
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY + offset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    },
    [offset]
  )
  return scrollToId
}

export default useSmoothScroll
