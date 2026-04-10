'use client'

import { ScreenshotThumbnail } from './ScreenshotThumbnail'
import { SectionLabel } from './SectionLabel'

export function HowItWorks() {
  return (
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
  )
}
