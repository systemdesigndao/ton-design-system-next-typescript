export const openInNewTab = (
  url: string,
  target?: string,
  features?: string
) => {
  if (window !== undefined) window.open(url, target, features)
  else {
    throw Error('Window is not initialised yet')
  }
}
