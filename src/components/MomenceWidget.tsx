/**
 * MomenceWidget
 *
 * HOW TO ACTIVATE:
 * ─────────────────────────────────────────────────────────────────────
 * 1. Log in to your Momence Dashboard → Studio Setup → Add to Website
 * 2. Choose the "Schedule" plugin and copy the embed code snippet.
 *
 * Option A — Script embed (simplest):
 *   Paste the <script> snippet from Momence directly inside the
 *   `embedCode` constant below, replacing the placeholder.
 *
 * Option B — iFrame embed (recommended for custom-styled sites):
 *   a. Copy the plugin script from Momence.
 *   b. Paste it into your browser URL bar so it collapses to one line.
 *   c. Set NEXT_PUBLIC_MOMENCE_SCHEDULE_URL to that URL, OR
 *      set NEXT_PUBLIC_MOMENCE_STUDIO_SLUG to your studio slug
 *      (the part after momence.com/t/ in your Momence URL).
 *
 * Option C — Direct iFrame URL:
 *   Set NEXT_PUBLIC_MOMENCE_STUDIO_SLUG=your-studio-slug in .env.local
 *   The widget will render automatically.
 * ─────────────────────────────────────────────────────────────────────
 */

const STUDIO_SLUG   = process.env.NEXT_PUBLIC_MOMENCE_STUDIO_SLUG ?? "";
const SCHEDULE_URL  = process.env.NEXT_PUBLIC_MOMENCE_SCHEDULE_URL ?? "";

export function MomenceScheduleWidget() {
  // If a direct iFrame URL is configured
  if (SCHEDULE_URL) {
    return (
      <iframe
        src={SCHEDULE_URL}
        width="100%"
        height="760"
        frameBorder="0"
        allow="payment"
        title="Class schedule — The Common"
        className="w-full border-0"
      />
    );
  }

  // If a studio slug is configured, use the standard Momence embed URL
  if (STUDIO_SLUG) {
    const src = `https://momence.com/embedded/studio/${STUDIO_SLUG}/schedule`;
    return (
      <iframe
        src={src}
        width="100%"
        height="760"
        frameBorder="0"
        allow="payment"
        title="Class schedule — The Common"
        className="w-full border-0"
      />
    );
  }

  // ── Placeholder (shown until Momence is connected) ──────────────
  return (
    <div className="w-full min-h-[640px] bg-[#F2EDE5] flex flex-col items-center justify-center gap-6 text-center px-8 py-20">
      <div className="w-8 h-px bg-[#B89A78] mx-auto" />
      <p
        className="text-xl font-light text-[#181512]/30"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Live schedule coming soon
      </p>
      <p className="text-[13px] text-[#181512]/25 max-w-xs leading-relaxed font-light">
        Connect your Momence account by setting{" "}
        <code className="bg-[#E2D9CE] px-1.5 py-0.5 text-[11px] text-[#7A6248]">
          NEXT_PUBLIC_MOMENCE_STUDIO_SLUG
        </code>{" "}
        in <code className="bg-[#E2D9CE] px-1.5 py-0.5 text-[11px] text-[#7A6248]">.env.local</code>
      </p>
      <a
        href="https://help.momence.com/en/articles/12029975-plugins-widgets-faq-s"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[10px] tracking-[0.25em] uppercase text-[#B89A78] hover:text-[#7A6248] transition-colors mt-2"
      >
        Momence setup guide →
      </a>
    </div>
  );
}

export function MomencePurchaseWidget({ type = "passes" }: { type?: "passes" | "memberships" }) {
  if (!STUDIO_SLUG) return null;

  const src =
    type === "memberships"
      ? `https://momence.com/embedded/studio/${STUDIO_SLUG}/memberships`
      : `https://momence.com/embedded/studio/${STUDIO_SLUG}/passes`;

  return (
    <iframe
      src={src}
      width="100%"
      height="560"
      frameBorder="0"
      allow="payment"
      title={`${type} — The Common`}
      className="w-full border-0"
    />
  );
}
