export const openInNewTab = (url: string, target?: string) => {
  if (window !== undefined) window.open(url, target)
  else {
    throw Error('Window is not initialised yet')
  }
}
