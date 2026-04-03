# Just One Thing — Color Scheme

`v1.0 — Internal Reference`

---

## Palette

| Name | Hex | RGB | Role |
|------|-----|-----|------|
| **Void** | `#0D0D0D` | 13, 13, 13 | Primary background — set task & done screens |
| **Electric Lime** | `#C8FF00` | 200, 255, 0 | Primary accent — CTAs, active state, streak, DONE. |
| **Fog White** | `#F5F5F5` | 245, 245, 245 | Body text, labels |
| **Alarm Red** | `#FF3A2D` | 255, 58, 45 | Locked screen accent — CTAs, headlines, timer |
| **Locked Background** | `#2A0A0A` | 42, 10, 10 | Locked screen background |

---

## Screen-by-Screen Usage

### Set Task Screen

- **Background:** Void `#0D0D0D`
- **App title:** Electric Lime `#C8FF00`
- **Task card:** `.secondary` (system)
- **Body text / labels:** Fog White `#F5F5F5`
- **CTA (LOCK IN):** Electric Lime fill `#C8FF00`, Void text `#0D0D0D`

### Locked / Active Session Screen

- **Background:** Locked Background `#2A0A0A`
- **App title:** Alarm Red `#FF3A2D`
- **APPS LOCKED headline:** Alarm Red `#FF3A2D`
- **Timer / primary stat:** Alarm Red `#FF3A2D`
- **Body text / labels:** Fog White `#F5F5F5`
- **CTA (MARK AS DONE):** Alarm Red fill `#FF3A2D`, white text
- **Quit button:** Muted — `.secondary` fill or low-opacity Alarm Red

### Done Screen

- **Background:** Void `#0D0D0D`
- **DONE. hero word:** Electric Lime `#C8FF00`
- **Streak number:** Electric Lime `#C8FF00`
- **Body text / stats:** Fog White `#F5F5F5`
- **CTA (SET NEXT THING):** Electric Lime fill `#C8FF00`, Void text `#0D0D0D`

---

## Usage Rules

**Electric Lime is rationed.** It appears only where the system is active or confirming success — the LOCK IN button, the DONE. hero word, streak number, and app title on the set task screen. One or two lime elements per screen maximum. Never decorative.

**Alarm Red is state-specific.** It does not appear on the set task or done screens at all. It exists only within the locked session — this is what makes it read as a genuine mode change rather than a color choice.

**Fog White uses opacity for hierarchy.** Primary labels at 100% opacity. Secondary copy (sub-labels, placeholders, stat descriptions) at 35–40% opacity. No separate gray values — opacity on white stays warm against both backgrounds.

---

## Transition

The circle mask transition from set task → locked is designed to read as a hard mode change:

```
Set Task          Locked             Done
#0D0D0D  ──●──►  #2A0A0A  ──●──►  #0D0D0D
Lime accent       Red accent         Lime accent
```

The ground color shift (black → deep maroon → black) does the emotional work. The accent flip (lime → red → lime) reinforces it. Both channels signal the same state change simultaneously.

---

## Xcode Asset Names

| Asset Name | Hex | Screen |
|------------|-----|--------|
| `Void` | `#0D0D0D` | Set task, Done |
| `ElectricLime` | `#C8FF00` | Set task, Done |
| `FogWhite` | `#F5F5F5` | All screens |
| `AlarmRed` | `#FF3A2D` | Locked |
| `LockedBackground` | `#2A0A0A` | Locked |
