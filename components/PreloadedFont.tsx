import localFont from '@next/font/local'
import { createElement, ReactElement, ReactHTML } from 'react'

const mulishFont = localFont({ src: '../public/fonts/Mulish-Regular.ttf' })

type IPreloadedFont = {
  children: ReactElement | string
  variant: keyof ReactHTML
  className: string
}

export const PreloadedFont = ({
  children,
  variant,
  className,
}: IPreloadedFont) => {
  return createElement(
    variant,
    {
      className: `${mulishFont.className} ${className}`,
    },
    children
  )
}
