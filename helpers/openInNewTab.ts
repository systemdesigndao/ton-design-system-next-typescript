export const openInNewTab = (url: string) => {
  if (window !== undefined) window.open(url, '_blank')
  else {
    throw Error('Window is not initialised yet')
  }
}
