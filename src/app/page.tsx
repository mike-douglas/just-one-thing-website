import { ScreenshotThumbnail } from './components/ScreenshotThumbnail'

function AppStoreButton() {
  return (
    <a
      href="https://apps.apple.com/us/app/just-one-thing-get-it-done/id6761066689"
      className="inline-flex items-center gap-3 bg-white text-black rounded-[14px] px-5 py-3 hover:bg-neutral-100 transition-colors"
    >
      <svg
        width="20"
        height="25"
        viewBox="0 0 20 25"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.462 13.25c-.028-3.124 2.549-4.628 2.665-4.703-1.454-2.127-3.714-2.418-4.516-2.449-1.92-.196-3.753 1.14-4.727 1.14-.978 0-2.476-1.114-4.077-1.083-2.082.032-4.012 1.223-5.082 3.086C-1.39 13.007.218 18.534 2.31 21.567c1.033 1.496 2.254 3.169 3.86 3.11 1.557-.062 2.141-1.003 4.024-1.003 1.866 0 2.406 1.003 4.041.966 1.674-.028 2.726-1.513 3.742-3.018 1.194-1.725 1.679-3.421 1.701-3.506-.037-.015-3.247-1.25-3.216-4.866zM13.31 4.23C14.148 3.21 14.72 1.81 14.56.39c-1.214.05-2.702.812-3.577 1.815-.784.898-1.475 2.346-1.292 3.72 1.36.105 2.759-.692 3.618-1.694z" />
      </svg>
      <div className="text-left">
        <div className="text-[10px] font-medium leading-tight opacity-75">
          Download on the
        </div>
        <div className="text-[17px] font-semibold leading-tight">App Store</div>
      </div>
    </a>
  )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-neon text-[10px] font-bold uppercase tracking-[0.18em]">
      {children}
    </p>
  )
}

function Divider() {
  return <hr className="border-neutral-900" />
}


export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="w-full max-w-[420px] mx-auto px-6">

        {/* Hero */}
        <section className="pt-16 pb-14">
          {/* Logotype — replace logotype.svg with the final file when ready */}
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

        {/* How it works */}
        <section className="py-14">
          <SectionLabel>How it works</SectionLabel>
          <div className="space-y-10 mt-7">

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="text-neon text-[10px] font-bold mb-2">01</div>
                <h3 className="text-white text-lg font-bold mb-1.5">
                  Set your task.
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Free-form text. No curated lists, no categories. Just type what
                  needs doing.
                </p>
              </div>
              <ScreenshotThumbnail src="/main-screen.png" alt="Task input screen" />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="text-neon text-[10px] font-bold mb-2">02</div>
                <h3 className="text-white text-lg font-bold mb-1.5">
                  Block your apps.
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Choose which apps to lock — individual apps or whole categories.
                  Your selection is saved for next time.
                </p>
              </div>
              <ScreenshotThumbnail src="/app-selection.png" alt="App selection screen" />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="text-neon text-[10px] font-bold mb-2">03</div>
                <h3 className="text-white text-lg font-bold mb-1.5">Start.</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Blocking activates via iOS Screen Time. A lock screen widget
                  shows your active task. Your apps unlock the moment you mark it
                  done.
                </p>
              </div>
              <div className="flex gap-2 shrink-0">
                <ScreenshotThumbnail src="/in-session-screen.png" alt="Active session screen" />
                <ScreenshotThumbnail src="/apps-blocked-sheet.png" alt="Blocked apps detail" />
              </div>
            </div>

          </div>
        </section>

        <Divider />

        {/* Why it works */}
        <section className="py-14">
          <SectionLabel>Why it works</SectionLabel>
          <div className="space-y-7 mt-7">

            <div>
              <h3 className="text-white font-semibold mb-1">
                System-level blocking.
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Uses iOS Screen Time API. Not a custom overlay — apps actually go
                dark.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-1">
                No verification theater.
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                No AI photo check. No judgment. Trust-based completion.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-1">
                Track what matters.
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Streak and total focus time. Two numbers. Always visible.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-1">Widgets.</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Lock screen and home screen. Your task is always visible. Mark
                done in one tap.
              </p>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-neutral-900">
          <div className="flex justify-between items-center">
            <a
              href="/privacy"
              className="text-neutral-600 text-xs hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-neutral-700 text-xs">
              © 2026 Just One Thing
            </span>
          </div>
        </footer>

      </div>
    </div>
  )
}
