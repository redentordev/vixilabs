import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/terms')({
  component: TermsPage,
  loader: async () => ({}),
})

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="h-16" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Last updated: December 2024</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By engaging VixiLabs for any services, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our services. These terms apply to
              all services provided by VixiLabs, including but not limited to AI MVP development,
              web application development, consulting, and maintenance services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              VixiLabs provides software development and consulting services. Our primary offering
              is a 7-day AI MVP sprint, but we also offer custom development, maintenance, and
              consulting services. The specific scope, deliverables, and timeline for each project
              will be defined in a separate project agreement or statement of work.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              All deliverables are provided as prototypes or minimum viable products unless
              explicitly stated otherwise. They are intended for validation and testing purposes
              and may require additional development for production use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. Payment Terms</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong className="text-foreground">Sprint Projects:</strong> Payment is split 50/50.
                The first 50% is due before work begins, and the remaining 50% is due upon delivery
                of the completed project.
              </p>
              <p>
                <strong className="text-foreground">Custom Projects:</strong> Payment terms will be
                specified in the project agreement. Typically, larger projects require milestone-based
                payments.
              </p>
              <p>
                <strong className="text-foreground">Retainer Services:</strong> Monthly retainers are
                billed at the beginning of each month and are due within 7 days of invoice.
              </p>
              <p>
                Late payments may incur a fee of 1.5% per month on the outstanding balance. We reserve
                the right to pause work on any project with overdue payments.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Intellectual Property</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong className="text-foreground">Client Ownership:</strong> Upon full payment,
                clients receive complete ownership of all custom code, designs, and deliverables
                created specifically for their project.
              </p>
              <p>
                <strong className="text-foreground">VixiLabs Retention:</strong> We retain the right
                to use general knowledge, techniques, and non-proprietary tools developed during
                the project. We may also use anonymized project descriptions and screenshots in
                our portfolio, unless otherwise agreed.
              </p>
              <p>
                <strong className="text-foreground">Third-Party Components:</strong> Projects may
                include open-source libraries or third-party services, which remain subject to
                their respective licenses.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Revisions & Scope Changes</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong className="text-foreground">During Sprint:</strong> Unlimited revisions are
                included during the active sprint period, provided they fall within the agreed scope.
              </p>
              <p>
                <strong className="text-foreground">Scope Changes:</strong> Any changes to the
                original scope will require a new quote and may extend the timeline. Significant
                scope changes during an active sprint may require restarting with a new agreement.
              </p>
              <p>
                <strong className="text-foreground">Post-Delivery:</strong> Bug fixes related to
                the original scope are included for 1 week after delivery. Additional work after
                this period will be quoted separately.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Timeline & Delays</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                The 7-day sprint timeline begins after the kickoff call and receipt of the initial
                payment. "Days" refer to business days (Monday through Friday).
              </p>
              <p>
                Client-caused delays (such as slow feedback, delayed asset delivery, or unavailability
                for required decisions) may extend the timeline proportionally. We will communicate
                proactively if delays occur.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Warranties & Liability</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong className="text-foreground">As-Is Delivery:</strong> MVP and prototype
                deliverables are provided "as-is" for validation purposes. We do not guarantee
                they are production-ready without additional development.
              </p>
              <p>
                <strong className="text-foreground">No Uptime Guarantees:</strong> Unless explicitly
                included in a maintenance agreement, we do not provide uptime or availability
                guarantees for delivered projects.
              </p>
              <p>
                <strong className="text-foreground">Limitation of Liability:</strong> Our total
                liability for any project is limited to the amount paid for that project. We are
                not liable for indirect, incidental, or consequential damages.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Termination & Refunds</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong className="text-foreground">Client Cancellation:</strong> If you cancel a
                project after work has begun, the initial deposit is non-refundable. Any completed
                work up to the cancellation point remains your property.
              </p>
              <p>
                <strong className="text-foreground">VixiLabs Cancellation:</strong> If we are unable
                to complete a project, we will refund any payments for undelivered work.
              </p>
              <p>
                <strong className="text-foreground">Partial Completion:</strong> If a project is
                partially completed at termination, payment will be prorated based on work completed.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Confidentiality</h2>
            <p className="text-muted-foreground leading-relaxed">
              We treat all client information, business plans, and project details as confidential.
              We will not share your information with third parties without your consent, except
              as required by law. This confidentiality obligation survives the termination of any
              project agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">10. Communication</h2>
            <p className="text-muted-foreground leading-relaxed">
              Primary communication will be conducted via email. We aim to respond to all
              communications within 1 business day. During active sprints, we provide regular
              progress updates. For urgent matters, alternative communication channels may be
              established at the start of a project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to update these Terms of Service at any time. Changes will be
              posted on this page with an updated revision date. Continued use of our services
              after changes constitutes acceptance of the new terms. Existing project agreements
              will be governed by the terms in effect at the time of signing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">12. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:business@vixilabs.com" className="text-primary hover:underline">
                business@vixilabs.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
