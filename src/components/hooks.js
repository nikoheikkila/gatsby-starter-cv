import { useRef, useEffect } from 'react'

export const useInterval = (callback, delay = 1000) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    const tick = () => savedCallback.current()
    const id = setInterval(tick, delay)

    return () => clearInterval(id)
  }, [delay])
}
