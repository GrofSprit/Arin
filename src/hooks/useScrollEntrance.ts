import { useEffect } from 'react'

export function useScrollEntrance(threshold = 0.15) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold }
    )

    const elements = document.querySelectorAll('.entrance, .entrance-headline')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [threshold])
}
