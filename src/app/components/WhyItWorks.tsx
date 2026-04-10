import { SectionLabel } from './SectionLabel'

export function WhyItWorks() {
  return (
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
  )
}
