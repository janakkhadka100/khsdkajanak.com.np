import { EmailCaptureBar } from "@/components/common/EmailCaptureBar";
import { MembershipCtaLink } from "@/components/membership/MembershipCtaLink";

export default function MembershipPage() {
  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <section className="section-shell border-b border-white/10 pb-10 pt-4">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
          Membership & premium access
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
          Support the ecosystem.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300">
          This is not a typical subscription. It is a way to sustain a public
          platform—film, media, AI tools, and thoughtful guidance—so it stays
          useful and independent. Membership and premium access help keep the
          work going and expand what we can offer.
        </p>
      </section>

      <section className="section-shell">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Premium AI tools
        </h2>
        <p className="mt-3 max-w-xl text-sm text-zinc-200">
          Deeper or extended use of AI writing and idea tools, tailored to
          teams or projects. Express interest and we will share what is
          available.
        </p>
        <MembershipCtaLink href="/contact?inquiry=consultation" cta="express_interest" className="mt-4">
          Express interest
        </MembershipCtaLink>
      </section>

      <section className="section-shell">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Private astrology & guidance
        </h2>
        <p className="mt-3 max-w-xl text-sm text-zinc-200">
          One-on-one or small-group guidance, deeper reports, and
          consultation-style sessions. For those who want to go beyond the
          free reflective experience.
        </p>
        <MembershipCtaLink href="/contact?inquiry=consultation" cta="contact_consultation" className="mt-4">
          Contact for private consultation
        </MembershipCtaLink>
      </section>

      <section className="section-shell">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Strategic storytelling & media support
        </h2>
        <p className="mt-3 max-w-xl text-sm text-zinc-200">
          Speech writing, campaign narratives, and media messaging support for
          organizations and public figures. Discuss scope and timelines.
        </p>
        <MembershipCtaLink href="/contact?inquiry=collaboration" cta="discuss_support" className="mt-4">
          Discuss support
        </MembershipCtaLink>
      </section>

      <section className="section-shell">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
          Supporter circle & membership vision
        </h2>
        <p className="mt-3 max-w-xl text-sm text-zinc-200">
          Future tiers—Supporter, Creative Circle, Advisory—are being shaped.
          If you want early access, exclusive updates, or a say in how this
          platform grows, join the waitlist or start a conversation.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <MembershipCtaLink href="/contact?inquiry=general" cta="join_waitlist">
            Join waitlist
          </MembershipCtaLink>
          <MembershipCtaLink href="/contact?inquiry=investor" cta="support_platform" variant="primary">
            Support the platform
          </MembershipCtaLink>
        </div>
      </section>

      <section className="section-shell border-b-0">
        <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 md:p-8">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
            Next step
          </p>
          <p className="mt-3 text-sm text-zinc-200">
            All membership and premium paths start with a conversation. Tell us
            what you are interested in—we will respond with options and next
            steps.
          </p>
          <MembershipCtaLink href="/contact" cta="open_contact" variant="neutral" className="mt-4 py-2.5">
            Open contact channel
          </MembershipCtaLink>
        </div>
        <div className="mt-10 max-w-xl">
          <EmailCaptureBar
            variant="block"
            title="Dispatches from the Office of Janak Khadka"
            subtitle="Monthly essays, frameworks, and platform updates. No spam."
          />
        </div>
      </section>
    </div>
  );
}
