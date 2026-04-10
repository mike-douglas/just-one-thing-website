import { AppStoreButton } from './components/AppStoreButton'
import { Divider } from './components/Divider'
import { Footer } from './components/Footer'
import { HowItWorks } from './components/HowItWorks'
import { WhyItWorks } from './components/WhyItWorks'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="w-full max-w-[420px] mx-auto px-6">

        {/* Hero */}
        <section className="pt-16 pb-14">
          <div className="mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logotype.svg"
              alt="Just One Thing"
              className="w-80 h-auto sm:w-full"
            />
          </div>

          <h1 className="text-[27px] font-extrabold text-white leading-tight mb-4">
            One task. Apps blocked until it&apos;s done.
          </h1>
          <p className="text-neutral-500 text-base leading-relaxed mb-8">
            No AI cameras. No judgment. Just a commitment device that works.
          </p>
          <AppStoreButton />
        </section>

        {/* Main screen screenshot */}
        <div className="pb-14">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/main-screen.png"
            alt="Just One Thing app main screen"
            className="w-full h-auto"
          />
        </div>

        <Divider />
        <HowItWorks />
        <Divider />
        <WhyItWorks />
        <Footer />

      </div>
    </div>
  )
}
