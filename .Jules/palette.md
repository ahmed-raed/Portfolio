## 2024-05-22 - [Icon-Only Buttons & A11y]
**Learning:** The codebase uses icon-only buttons (like copy email) without ARIA labels or semantic fallbacks, relying solely on tooltips which are insufficient for screen readers.
**Action:** When encountering icon-only interactive elements, always ensure `aria-label` or `sr-only` text is present to describe the action, not just the state.
