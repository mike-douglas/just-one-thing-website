# Just One Thing — v1 Product Spec

> "The only todo app that locks your phone until you finish."

One single task. Your apps are blocked until it's done. No AI cameras. No judgment. Just a commitment device that actually works.

---

## The Problem

Every todo app asks you to manage a list. One Thing asks you to commit to one. The difference: when you set your one thing, your distracting apps lock — and they don't come back until you're done.

This isn't a new category. "One Thing: Earn Your Scroll" exists and is ranked #1 for the keyword. But their execution has critical flaws: AI photo verification that insults users, unreliable blocking, no custom tasks, and a subscription model. v1 is the better-built version of this idea.

---

## Target Audience

**Primary:** ADHD users who struggle to start or finish one important task
**Secondary:** Procrastinators who doom-scroll instead of doing the thing
**Tertiary:** Students and solopreneurs who want a daily commitment device

---

## Pricing

- **$4.99/week** — 3-day free trial, then converts to weekly subscription
- **$24.99/year** — No trial

Competitor ("One Thing: Earn Your Scroll") charges $7.99/week or $39.99/year with **no trial at all**. The 3-day free trial on the weekly plan is a direct differentiator — let users experience the value before committing.

---

## v1 Features

### Core Loop

1. **Define the task** — Free-form text, no categories or curated lists.
2. **Set a start time** — Now, or a future time (e.g. tomorrow at 9am).
3. **Choose apps to block** — Pick from installed apps or categories. Saved as a default set.
4. **At start time, blocking activates** — Via Screen Time API. A persistent lock screen widget shows the active task.
5. **Mark it done or cancel** — Done removes the block immediately (+ optional win share). Cancel also removes the block, no questions asked.

### Blocking

- Uses iOS Screen Time / Family Controls API for system-level blocking
- Blocking activates automatically at the scheduled start time
- Persists until the task is marked complete or explicitly cancelled in the app
- **No AI photo verification** — trust-based completion

### Completion & Celebration

- Satisfying completion animation on mark-done
- Optional share card — generated image of the task + streak for posting to social (TikTok, Instagram Stories, X)

### Stats

Two numbers, always visible on the home screen:

- **Streak** — consecutive tasks completed without a cancel. Resets to 0 on cancel.
- **Total focus time** — cumulative time the user has had blocking active across all completed sessions. Cancelled sessions don't count.

### Widgets

- Lock screen widget: current task name + a "done" button
- Home screen widget: current task name + streak count

---

## What v1 Does NOT Include

These are intentional exclusions to keep scope tight:

- ~~Multiple simultaneous tasks~~ — That's a different app
- ~~AI photo verification~~ — The competitor proved this is a liability
- ~~Curated activity categories~~ — Free-form is more flexible and personal
- ~~Reminders / nudges~~ — No passive nagging; the scheduled block is the commitment device
- ~~Analytics dashboard / weekly breakdowns~~ — Future version
- ~~Social feed / leaderboards~~ — Future version
- ~~Recurring tasks~~ — Future version
- ~~Integrations (Notion, Todoist, etc.)~~ — Future version

---

## Competitive Edge vs. "One Thing: Earn Your Scroll"

| Feature | One Thing: Earn Your Scroll | This App |
|---|---|---|
| Task input | Curated list only | Free-form, anything |
| Verification | AI photo (buggy, insulting) | Trust-based / timer |
| Reliability | Blocking frequently fails | Core quality bar |
| Pricing | $7.99/week or $39.99/year, no trial | $4.99/week (3-day trial) or $24.99/year |
| ADHD positioning | Generic "habit building" | Explicit |
| Social sharing | None | Share-your-win card |
| Tone | Can be rude/judgmental | Celebratory |

---

## ASO Keywords

| Keyword | Popularity | Difficulty |
|---|---|---|
| one thing | 44 | 9 ✅ |
| no scroll | 43 | 42 ✅ |
| one click | 33 | 17 ✅ |
| auto scroll | 32 | 38 ✅ |
| focusmate | 21 | 42 ✅ |

---

## Data Model (SwiftData)

### `FocusSession`

The only persistent entity. One row per task the user has set.

```swift
@Model
final class FocusSession {
    var taskTitle: String          // free-form text entered by user
    var startedAt: Date            // when blocking activates (now, or a future time)
    var finishedAt: Date?          // when the session ended (nil = in progress or pending)
    var status: SessionStatus?     // nil = pending/active, set on completion or cancel
    var blockedAppsData: Data      // encoded FamilyActivitySelection (apps + categories)
}

enum SessionStatus: String, Codable {
    case completed
    case cancelled
}
```

**Computed properties (not stored):**

```swift
var isActive: Bool { startedAt <= .now && status == nil }

var focusDuration: TimeInterval? {
    guard status == .completed, let end = finishedAt else { return nil }
    return end.timeIntervalSince(startedAt)
}
```

### Stats (computed from `FocusSession` history, not stored)

**Streak** — walk sessions ordered by `finishedAt` descending, count consecutive `.completed` statuses until hitting a `.cancelled` or a gap of more than one calendar day.

**Total focus time** — `FocusSession.focusDuration` summed across all `.completed` sessions.

### App Settings (UserDefaults, not SwiftData)

- `defaultBlockedAppsData: Data` — the user's saved `FamilyActivitySelection`, pre-populated when creating a new session
- No other persistent settings needed for v1

### Notes

- No `User` model — single-user app, no accounts
- `FamilyActivitySelection` (from the Family Controls framework) is `Codable`, so store it as `Data`. It represents both individual apps and whole categories from Screen Time.
- `status == nil` means the session is pending or active — use `isActive` to distinguish
- Only one session can be active at a time — enforce this at the app layer, not the data layer

---

## Main Screen

The app is effectively a single screen with two states.

---

### State 1 — No active session

```
┌─────────────────────────────────┐
│                                 │
│   What's your one thing?        │
│   ┌─────────────────────────┐   │
│   │                         │   │
│   └─────────────────────────┘   │
│                                 │
│   [ Apps to block         › ]   │
│                                 │
│   [ Start Now ▾ ]               │
│                                 │
│   ── ── ── ── ── ── ── ── ──    │
│   Streak: 7    Focus: 14h 20m   │
│                                 │
└─────────────────────────────────┘
```

- **Task input** — plain text field, full keyboard, no character limit
- **Apps to block** — taps into the system `FamilyActivityPicker`. Shows a summary of the saved selection (e.g. "Instagram, TikTok, Safari"). Pre-populated from `defaultBlockedAppsData`.
- **Start button** — tapping opens a time picker sheet defaulting to "Now". Confirming with "Now" starts immediately; picking a future time schedules it. Button label updates to reflect a scheduled time once set (e.g. "Tomorrow, 9:00 AM ▾").
- **Stats bar** — streak count and total focus time, always visible at the bottom

---

### State 2 — Active session

```
┌─────────────────────────────────┐
│                                 │
│   Your apps are blocked.        │
│                                 │
│   ┌─────────────────────────┐   │
│   │   Write chapter 3       │   │
│   └─────────────────────────┘   │
│                                 │
│   Started 43 minutes ago        │
│                                 │
│                                 │
│       [ ✓  Done ]               │
│                                 │
│       [ Cancel ]                │
│                                 │
│   ── ── ── ── ── ── ── ── ──    │
│   Streak: 7    Focus: 14h 20m   │
│                                 │
└─────────────────────────────────┘
```

- **Task name** — read-only, prominent
- **Elapsed time** — how long blocking has been active
- **Done** — primary action, large. Marks session `.completed`, unblocks apps, triggers completion animation.
- **Cancel** — secondary, visually de-emphasised. Marks session `.cancelled`, unblocks apps, resets streak.
- **Stats bar** — same as state 1, visible throughout

## Blocked App Screen

When a user attempts to open a blocked app during an active session, iOS Screen Time displays a custom shield view in place of the app. Just One Thing provides the copy and a deep link back.

### Behaviour

- Triggered by Screen Time's built-in blocking mechanism — iOS handles interception natively via `ManagedSettings`. No custom overlay required.
- The shield renders the blocked app's icon and name automatically (iOS-owned chrome). Our copy appears below it.
- A single tappable button returns the user to Just One Thing.

### Copy

| Element | Copy | Notes |
|---|---|---|
| Primary message | Not yet. | Two words. Period. No elaboration. |
| Secondary line | Finish your task first. | Five words. Period. Nothing appended. |
| Button label | Open Just One Thing | System-style. Not "Go back" or "Return". |

### Deep Link Behaviour

Tapping "Open Just One Thing" launches directly to the **Locked — Active Session** screen. No splash, no interstitial. The user lands on their active task with `MARK AS DONE` immediately visible.

### What This Screen Never Shows

- The task name — the user knows what they're avoiding
- A timer or progress indicator — this is not a guilt device
- Any motivational or coaching copy

### iOS Implementation Notes

Screen Time's shield configuration (`ShieldConfiguration`) supports plain text only — no rich layout or custom views. The button is wired via `primaryButtonLabel` + `primaryButtonAction`, pointing to a URL scheme (e.g. `justonething://active`). This is the only interactive element iOS permits on the shield. Design should account for the fact that the app icon and name above the copy are rendered by the OS, not by us.

---

## Open Questions

- [ ] Does Screen Time API allow blocking without the user seeing a "parental control" prompt?
- [ ] What's the right trust model — pure honor system, or a 5-minute timer before unblocking?
- [ ] Should the share card be auto-generated or customizable?

---

## Related Notes

- [[One Thing Project Research]] — original idea note
- [[App Ideas - ASO Research & Recommendations]] — full ASO research
