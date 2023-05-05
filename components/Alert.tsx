'use client'
import { motion, useSpring } from 'framer-motion'
import { forwardRef, useCallback, useImperativeHandle } from 'react'

export interface AlertHandle {
  showAndHide(): void
}

export const Alert = forwardRef<
  AlertHandle,
  { title: string; defaultValue: number; hideAfter?: number }
>(({ title, defaultValue, hideAfter }, ref) => {
  const top = useSpring(defaultValue)

  const scrollToTop = useCallback(
    (value: number) => {
      top.set(value)
    },
    [top]
  )

  const scrollToDefault = useCallback(() => {
    top.set(defaultValue)
  }, [defaultValue, top])

  useImperativeHandle(ref, () => ({
    showAndHide() {
      scrollToTop(0)
      setTimeout(() => {
        scrollToDefault()
      }, (hideAfter ?? 3) * 1e3)
    },
  }))

  return (
    <motion.div
      style={{ top, right: 0 }}
      className="p-4 mb-4 text-sm rounded-lg bg-black-1 absolute flex justify-center items-center"
    >
      <span className="ml-1">{title}</span>
    </motion.div>
  )
})

Alert.displayName = 'Alert'
