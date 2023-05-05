'use client'
import React, { useRef } from 'react'
import { CSSProperties } from 'react'

export const LottiePlayer = ({
  path,
  style,
}: {
  path: string
  style: CSSProperties
}) => {
  const ref = useRef(null)

  React.useEffect(() => {
    import('@lottiefiles/lottie-player')
  }, [])

  return (
    <lottie-player
      ref={ref}
      autoplay
      loop
      mode="normal"
      src={path}
      style={style}
    ></lottie-player>
  )
}
