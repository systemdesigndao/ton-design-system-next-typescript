import { forwardRef, useCallback, useImperativeHandle } from 'react'
import { useSpring, animated } from 'react-spring'

export interface AlertHandle {
  showAndHide(): void
}

export const Alert = forwardRef<
  AlertHandle,
  { title: string; defaultValue: number; hideAfter?: number }
>(({ title, defaultValue, hideAfter }, ref) => {
  const [springProps, setSpring] = useSpring(() => ({
    top: defaultValue,
    config: { tension: 170, friction: 26 },
  }))

  const scrollToTop = useCallback(() => {
    setSpring({ top: 0 })
  }, [setSpring])

  const scrollToDefault = useCallback(() => {
    setSpring({ top: defaultValue })
  }, [defaultValue, setSpring])

  useImperativeHandle(ref, () => ({
    showAndHide() {
      scrollToTop()
      setTimeout(() => {
        scrollToDefault()
      }, (hideAfter ?? 3) * 1e3)
    },
  }))

  return (
    <animated.div
      style={{
        ...springProps,
        right: 0,
        position: 'absolute',
      }}
      className="p-4 mb-4 text-sm rounded-lg bg-black-1 flex justify-center items-center"
    >
      <span className="ml-1">{title}</span>
    </animated.div>
  )
})

Alert.displayName = 'Alert'
