import Link from "next/link";
import { EmailCaptureBar } from "@/components/common/EmailCaptureBar";
import { MembershipCtaLink } from "@/components/membership/MembershipCtaLink";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export default function MembershipPage() {
  return (
    <div className="page-shell space-y-16 pb-24 pt-10 md:space-y-20 md:pt-16">
      <section className="section-shell border-b border-gray-200 pb-10 pt-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Membership" },
          ]}
          className="mb-4"
        />
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
          Membership & premium access
        </p>
        <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
          Support the ecosystem.
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-700">
          This is not a typical subscription. It is a way to sustain a public
          platform—film, media, AI tools, and thoughtful guidance—so it stays
          useful and independent.
        </p>
        <p className="mt-3 text-[0.7rem] text-gray-600 max-w-xl">
          For institutions, supporters, and individuals who want deeper access or a formal role in how this platform grows.
        </p>
      </section>

      <section className="section-shell">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600 mb-6">
          Ways to engage
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-600">
              Premium AI tools
            </h2>
            <p className="mt-3 text-sm text-gray-700">
              Deeper or extended use of AI writing and idea tools, tailored to teams or projects.
            </p>
            <MembershipCtaLink href="/contact?inquiry=consultation" cta="express_interest" className="mt-4">
              Express interest
            </MembershipCtaLink>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-5">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-600">
              Private astrology & guidance
            </h2>
            <p className="mt-3 text-sm text-gray-700">
              One-on-one or small-group guidance, deeper reports, and consultation-style sessions.
            </p>
            <MembershipCtaLink href="/contact?inquiry=consultation" cta="contact_consultation" className="mt-4">
              Contact for consultation
            </MembershipCtaLink>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-5 sm:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-600">
              Strategic storytelling & media support
            </h2>
            <p className="mt-3 text-sm text-gray-700">
              Speech writing, campaign narratives, and media messaging support for organizations and public figures. Discuss scope and timelines.
            </p>
            <MembershipCtaLink href="/contact?inquiry=collaboration" cta="discuss_support" className="mt-4">
              Discuss support
            </MembershipCtaLink>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="rounded-xl border border-royal-accent/30 bg-white shadow-sm p-6 md:p-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-600">
            Supporter circle & membership vision
          </h2>
          <p className="mt-3 max-w-xl text-sm text-gray-700">
            Future tiers—Supporter, Creative Circle, Advisory—are being shaped. Early access, exclusive updates, or a say in how this platform grows.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <MembershipCtaLink href="/contact?inquiry=general" cta="join_waitlist">
              Join waitlist
            </MembershipCtaLink>
            <MembershipCtaLink href="/contact?inquiry=investor" cta="support_platform" variant="primary">
              Support the platform
            </MembershipCtaLink>
          </div>
        </div>
      </section>

      <section className="section-shell border-b-0">
        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gray-600">
            Next step
          </p>
          <p className="mt-3 text-sm text-gray-700">
            All membership and premium paths start with a conversation. Tell us what you are interested in—we will respond with options and next steps.
          </p>
          <MembershipCtaLink href="/contact" cta="open_contact" variant="neutral" className="mt-4 py-2.5">
            Open contact channel
          </MembershipCtaLink>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-[0.7rem] font-medium uppercase tracking-[0.16em]">
          <Link href="/about" className="text-gray-600 underline-offset-4 hover:text-royal-primary hover:underline">
            About the platform →
          </Link>
          <Link href="/contact" className="text-gray-600 underline-offset-4 hover:text-royal-primary hover:underline">
            Contact & collaborate →
          </Link>
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
