import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Just One Thing',
  description: 'Privacy policy for the Just One Thing app.',
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-10">
      <h2 className="text-white font-semibold text-base mb-3">{title}</h2>
      <div className="text-neutral-500 text-sm leading-relaxed space-y-3">
        {children}
      </div>
    </div>
  )
}

export default function Privacy() {
  return (
    <div className="min-h-screen bg-black">
      <div className="w-full max-w-[420px] mx-auto px-6">

        <div className="pt-12 pb-6">
          <Link
            href="/"
            className="text-neutral-600 text-xs hover:text-white transition-colors"
          >
            ← Just One Thing
          </Link>
        </div>

        <div className="pb-16">
          <p className="text-neon text-[10px] font-bold uppercase tracking-[0.18em] mb-4">
            Legal
          </p>
          <h1 className="text-white text-2xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-neutral-600 text-xs mb-12">
            Last updated: April 2, 2026
          </p>

          <Section title="Overview">
            <p>
              Just One Thing does not collect personal information. The app is a
              single-user, local-first tool. All data — your tasks, session
              history, and settings — stays on your device and is never
              transmitted to any server.
            </p>
          </Section>

          <Section title="Data we collect">
            <p>We collect nothing.</p>
            <p>
              Task names, session history, streak counts, and app settings are
              stored locally on your device using Apple&apos;s SwiftData and
              UserDefaults frameworks. This data never leaves your device.
            </p>
          </Section>

          <Section title="Screen Time and Family Controls">
            <p>
              Just One Thing uses Apple&apos;s Screen Time (Family Controls)
              framework to block selected apps during an active session. This is
              a system-level iOS feature. We do not receive data about which apps
              you use, your Screen Time history, or how you use your device.
            </p>
            <p>
              The blocking mechanism operates entirely within iOS and is
              controlled by you at all times.
            </p>
          </Section>

          <Section title="Optional social sharing">
            <p>
              When you complete a task, you may choose to share a completion card
              to social media. Sharing is optional and user-initiated. It is
              processed directly by your device&apos;s system share sheet. We do
              not receive, store, or process any data from shares.
            </p>
          </Section>

          <Section title="Analytics and crash reporting">
            <p>
              We collect anonymous usage analytics and crash reports to
              understand how the app is used and to fix bugs and performance
              issues.
            </p>
            <p>
              This data contains no personally identifiable information — we
              cannot connect it to you or your device. It is never sold to third
              parties and is used solely to improve the app.
            </p>
            <p>
              We do not use advertising networks or behavioral tracking of any
              kind.
            </p>
          </Section>

          <Section title="Children's privacy">
            <p>
              Just One Thing is not directed to children under 13. We do not
              knowingly collect information from children. If you believe a child
              has provided personal information, contact us and we will address
              it promptly.
            </p>
          </Section>

          <Section title="Changes to this policy">
            <p>
              We may update this policy from time to time. The current version is
              always available at this page. Continued use of the app after an
              update constitutes acceptance of the revised policy.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about this policy? Contact us at{' '}
              <a
                href="mailto:privacy@getjustonething.app"
                className="text-white hover:text-neon transition-colors underline underline-offset-2"
              >
                privacy@getjustonething.app
              </a>
            </p>
          </Section>
        </div>

        <footer className="py-8 border-t border-neutral-900">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="text-neutral-600 text-xs hover:text-white transition-colors"
            >
              ← Home
            </Link>
            <span className="text-neutral-700 text-xs">
              © 2026 Just One Thing
            </span>
          </div>
        </footer>

      </div>
    </div>
  )
}
