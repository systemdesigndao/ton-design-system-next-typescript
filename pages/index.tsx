import Head from 'next/head'
import Image from 'next/image'
import { PlotSvg } from '../components/Plot'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TDS</title>
        <meta name="description" content="Non official TON based Design System. Inspired by TON Brand Assets and Telegram Community Design System." />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎨</text></svg>" />
      </Head>

      <main>
      <PlotSvg />
      <h1 className="text-title1 text-white-1 p-2 text-center bg-main-1-dark">
        Dark theme
      </h1>
      <div className="flex flex-col h-screen bg-gray-1-dark p-2">
        <h1 className="text-title1 text-main-1-dark">
          Typography
        </h1>
        <h1 className="text-title1 text-white-1">
          Title1/2rem/Medium - 2rem/2.35rem
        </h1>
          <h2 className="text-title2 text-white-1">
          Title2/1.42rem/Medium - 1.42rem/1.64rem
        </h2>
        <h3 className="text-title3 text-white-1">
          Title3/1.21rem/Medium - 1.21rem/1.42rem
        </h3>
        <h4 className="text-headline1 text-white-1">
          Headline1/1.14rem/Regular - 1.14rem/1.35rem
        </h4>
        <h5 className="text-headline2 text-white-1">
          Headline2/1.14rem/Medium - 1.14rem/1.35rem
        </h5>
        <h6 className="text-headline3 text-white-1">
          Headline3/1.07rem/Medium - 1.07rem/1.28rem
        </h6>
        <p className="text-regular1 text-white-1">Regular1/1.14rem/Regular - 1.14rem/1.35rem</p>
        <p className="text-regular2 text-white-1">Regular2/1.07rem/Regular - 1.07rem/1.28rem</p>
        <p className="text-subtitle1 text-white-1">Subtitle1/1rem/Regular - 1rem/1.14rem</p>
        <p className="text-subtitle2 text-white-1">Subtitle2/1rem/Medium - 1rem/1.14rem</p>
        <p className="text-subtitle3 text-white-1">Subtitle3/0.92rem/Regular - 0.92rem/1.07rem</p>
        <p className="text-caption1 text-white-1">Caption1/0.92rem/Meduim - 0.92rem/1.07rem</p>
        <p className="text-caption2 text-white-1">Caption2/0.85rem/Regular - 0.85rem/0.92rem</p>
        <p className="text-caption3 text-white-1">Caption3/0.78rem/Regular - 0.78rem/0.92rem</p>
        <h1 className="text-title1 text-main-1-dark">
          Cards
        </h1>
        <div className="bg-gray-2-dark rounded-[1.7rem] p-4 flex justify-center w-fit">
          <Image alt="TON Logo Dark" src="/icons/ton-logo-dark.svg" width={148} height={56} />
        </div>
        </div>
        <h1 className="text-title1 text-white-1 p-2 text-center bg-main-1-light">
          Light theme
        </h1>
        <div className="flex flex-col h-screen bg-gray-1-light p-2">
          <h1 className="text-title1 text-main-1-light">
            Typography
          </h1>
          <h1 className="text-title1 text-black-1">
            Title1/2rem/Medium - 2rem/2.35rem
          </h1>
            <h2 className="text-title2 text-black-1">
            Title2/1.42rem/Medium - 1.42rem/1.64rem
          </h2>
          <h3 className="text-title3 text-black-1">
            Title3/1.21rem/Medium - 1.21rem/1.42rem
          </h3>
          <h4 className="text-headline1 text-black-1">
            Headline1/1.14rem/Regular - 1.14rem/1.35rem
          </h4>
          <h5 className="text-headline2 text-black-1">
            Headline2/1.14rem/Medium - 1.14rem/1.35rem
          </h5>
          <h6 className="text-headline3 text-black-1">
            Headline3/1.07rem/Medium - 1.07rem/1.28rem
          </h6>
          <p className="text-regular1 text-black-1">Regular1/1.14rem/Regular - 1.14rem/1.35rem</p>
          <p className="text-regular2 text-black-1">Regular2/1.07rem/Regular - 1.07rem/1.28rem</p>
          <p className="text-subtitle1 text-black-1">Subtitle1/1rem/Regular - 1rem/1.14rem</p>
          <p className="text-subtitle2 text-black-1">Subtitle2/1rem/Medium - 1rem/1.14rem</p>
          <p className="text-subtitle3 text-black-1">Subtitle3/0.92rem/Regular - 0.92rem/1.07rem</p>
          <p className="text-caption1 text-black-1">Caption1/0.92rem/Meduim - 0.92rem/1.07rem</p>
          <p className="text-caption2 text-black-1">Caption2/0.85rem/Regular - 0.85rem/0.92rem</p>
          <p className="text-caption3 text-black-1">Caption3/0.78rem/Regular - 0.78rem/0.92rem</p>
          <h1 className="text-title1 text-main-1-light">
            Cards
          </h1>
          <div className="bg-gray-2-light rounded-[1.7rem] p-4 flex justify-center w-fit">
            <Image alt="TON Logo Light" src="/icons/ton-logo-light.svg" width={148} height={56} />
          </div>
        </div>
      </main>
    </div>
  )
}
