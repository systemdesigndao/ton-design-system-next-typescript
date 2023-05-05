import Head from 'next/head'
import Image from 'next/image'
import { PreloadedFont } from '../components/PreloadedFont'
import { useRouter } from 'next/router'
import ky from 'ky'

import { useCallback, useEffect, useRef } from 'react'
import { openInNewTab } from '../helpers/openInNewTab'
import { Alert, AlertHandle } from '../components/Alert'

const dynamicallyImportWebApp = async () => {
  const WebApp = (await import('@twa-dev/sdk')).default

  return WebApp
}

export default function Home() {
  const refAlert = useRef<AlertHandle>(null)

  const {
    query: {
      state: perhapsTwitterState,
      code: perhapsTwitterCode,
      requestTwitterUrl,
    },
  } = useRouter()

  const perhapsConnectTwitter = useCallback(async () => {
    if (typeof perhapsTwitterState === 'string') {
      try {
        const [domain, tgData] = perhapsTwitterState.split('+')

        await ky.post(`${domain}/validate`, {
          json: {
            _auth: tgData,
            twitterCode: perhapsTwitterCode,
          },
        })

        refAlert.current?.showAndHide()
      } catch (err) {
        console.error(err)
      }
    }
  }, [perhapsTwitterState, perhapsTwitterCode])

  useEffect(() => {
    const run = async () => {
      const WebApp = await dynamicallyImportWebApp()

      WebApp.ready()

      const locationHrefWithoutHash = location.hash.substring(1)

      if (locationHrefWithoutHash.length !== 0) {
        localStorage.setItem('initData', WebApp.initData)
      }

      const currentUrl = new URL(window.location.href)
      const requestTwitterUrl = currentUrl.searchParams.get('requestTwitterUrl')
      if (requestTwitterUrl) {
        const updatedUrl = new URL(requestTwitterUrl)
        let currentState = updatedUrl.searchParams.get('state')
        currentState += `+${WebApp.initData}`
        updatedUrl.searchParams.set('state', currentState!)
        currentUrl.searchParams.set('requestTwitterUrl', updatedUrl.href)
        window.history.pushState({}, '', currentUrl.href)
      }
    }

    run()
  }, [])

  return (
    <div>
      <Head>
        <title>🎨 TDS Next Typescript</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Alert
        ref={refAlert}
        title="🔥 You can use bot now"
        defaultValue={-100}
        hideAfter={2}
      />

      <main>
        {(requestTwitterUrl || perhapsTwitterCode) && (
          <button
            className="p-4 m-2 rounded-full bg-main-light-4"
            onClick={
              requestTwitterUrl
                ? async () => {
                    if (typeof requestTwitterUrl === 'string') {
                      const currentUrl = new URL(window.location.href)
                      const requestTwitterUrl =
                        currentUrl.searchParams.get('requestTwitterUrl')
                      if (requestTwitterUrl) openInNewTab(requestTwitterUrl)
                    }
                  }
                : () => {
                    perhapsConnectTwitter()
                  }
            }
          >
            <PreloadedFont variant="p" className="text-title1 text-white-1">
              {requestTwitterUrl ? 'Open OAuth2 Link in Browser' : 'Connect'}
            </PreloadedFont>
          </button>
        )}
        <PreloadedFont
          variant="h1"
          className="text-title1 text-white-1 p-2 text-center bg-main-dark-5"
        >
          Dark theme
        </PreloadedFont>
        <div className="flex flex-col h-screen bg-gray-dark-5 p-2">
          <PreloadedFont variant="h1" className="text-title1 text-main-dark-4">
            Typography
          </PreloadedFont>
          <PreloadedFont variant="h1" className="text-title1 text-white-1">
            Title1/2rem/Medium - 2rem/2.35rem
          </PreloadedFont>
          <PreloadedFont variant="h2" className="text-title2 text-white-1">
            Title2/1.42rem/Medium - 1.42rem/1.64rem
          </PreloadedFont>
          <PreloadedFont variant="h3" className="text-title3 text-white-1">
            Title3/1.21rem/Medium - 1.21rem/1.42rem
          </PreloadedFont>
          <PreloadedFont variant="h4" className="text-headline1 text-white-1">
            Headline1/1.14rem/Regular - 1.14rem/1.35rem
          </PreloadedFont>
          <PreloadedFont variant="h5" className="text-headline2 text-white-1">
            Headline2/1.14rem/Medium - 1.14rem/1.35rem
          </PreloadedFont>
          <PreloadedFont variant="h6" className="text-headline3 text-white-1">
            Headline3/1.07rem/Medium - 1.07rem/1.28rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-regular1 text-white-1">
            Regular1/1.14rem/Regular - 1.14rem/1.35rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-regular2 text-white-1">
            Regular2/1.07rem/Regular - 1.07rem/1.28rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-subtitle1 text-white-1">
            Subtitle1/1rem/Regular - 1rem/1.14rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-subtitle2 text-white-1">
            Subtitle2/1rem/Medium - 1rem/1.14rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-subtitle3 text-white-1">
            Subtitle3/0.92rem/Regular - 0.92rem/1.07rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-caption1 text-white-1">
            Caption1/0.92rem/Meduim - 0.92rem/1.07rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-caption2 text-white-1">
            Caption2/0.85rem/Regular - 0.85rem/0.92rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-caption3 text-white-1">
            Caption3/0.78rem/Regular - 0.78rem/0.92rem
          </PreloadedFont>
          <PreloadedFont variant="h1" className="text-title1 text-main-dark-4">
            Cards
          </PreloadedFont>
          <div className="bg-gray-dark-6 rounded-[1.7rem] p-4 flex justify-center w-fit">
            <Image
              alt="TON Logo Dark"
              src="/icons/ton-logo-dark.svg"
              width={148}
              height={56}
            />
          </div>
        </div>
        <PreloadedFont
          variant="h1"
          className="text-title1 text-white-1 p-2 text-center bg-main-light-5"
        >
          Light theme
        </PreloadedFont>
        <div className="flex flex-col h-screen bg-white-1 p-2">
          <PreloadedFont variant="h1" className="text-title1 text-main-light-4">
            Typography
          </PreloadedFont>
          <PreloadedFont variant="h1" className="text-title1 text-black-5">
            Title1/2rem/Medium - 2rem/2.35rem
          </PreloadedFont>
          <PreloadedFont variant="h2" className="text-title2 text-black-5">
            Title2/1.42rem/Medium - 1.42rem/1.64rem
          </PreloadedFont>
          <PreloadedFont variant="h3" className="text-title3 text-black-5">
            Title3/1.21rem/Medium - 1.21rem/1.42rem
          </PreloadedFont>
          <PreloadedFont variant="h4" className="text-headline1 text-black-5">
            Headline1/1.14rem/Regular - 1.14rem/1.35rem
          </PreloadedFont>
          <PreloadedFont variant="h5" className="text-headline2 text-black-5">
            Headline2/1.14rem/Medium - 1.14rem/1.35rem
          </PreloadedFont>
          <PreloadedFont variant="h6" className="text-headline3 text-black-5">
            Headline3/1.07rem/Medium - 1.07rem/1.28rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-regular1 text-black-5">
            Regular1/1.14rem/Regular - 1.14rem/1.35rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-regular2 text-black-5">
            Regular2/1.07rem/Regular - 1.07rem/1.28rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-subtitle1 text-black-5">
            Subtitle1/1rem/Regular - 1rem/1.14rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-subtitle2 text-black-5">
            Subtitle2/1rem/Medium - 1rem/1.14rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-subtitle3 text-black-5">
            Subtitle3/0.92rem/Regular - 0.92rem/1.07rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-caption1 text-black-5">
            Caption1/0.92rem/Meduim - 0.92rem/1.07rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-caption2 text-black-5">
            Caption2/0.85rem/Regular - 0.85rem/0.92rem
          </PreloadedFont>
          <PreloadedFont variant="p" className="text-caption3 text-black-5">
            Caption3/0.78rem/Regular - 0.78rem/0.92rem
          </PreloadedFont>
          <PreloadedFont variant="h1" className="text-title1 text-main-light-4">
            Cards
          </PreloadedFont>
          <div className="bg-gray-light-6/10 rounded-[1.7rem] p-4 flex justify-center w-fit">
            <Image
              alt="TON Logo Light"
              src="/icons/ton-logo-light.svg"
              width={148}
              height={56}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
