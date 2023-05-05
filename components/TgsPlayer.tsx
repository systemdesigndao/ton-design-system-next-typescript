'use client'
import React, { useRef } from 'react'
import { CSSProperties } from 'react'

export const TgsPlayer = ({
  path,
  style,
}: {
  path: string
  style: CSSProperties
}) => {
  const ref = useRef(null)

  React.useEffect(() => {
    import('@lottiefiles/lottie-player/dist/tgs-player')
  }, [])

  return (
    <tgs-player
      ref={ref}
      autoplay
      loop
      mode="normal"
      src={path}
      style={style}
    ></tgs-player>
  )
}
