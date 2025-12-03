import { createFileRoute } from '@tanstack/react-router'
import { Mail } from 'lucide-react'

export const Route = createFileRoute('/privacy')({
  component: PrivacyPage,
  loader: async () => ({}),
})

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="h-16" />
      <main className="flex-1">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Last updated: December 2025</p>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              VixiLabs ("we," "our," or "us") respects your privacy and is committed to protecting
              your personal data. This Privacy Policy explains how we collect, use, and safeguard
              your information when you visit our website or engage our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                <strong className="text-foreground">Information You Provide:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email address, company name)</li>
                <li>Project details submitted through our onboarding form</li>
                <li>Communications via email or other channels</li>
                <li>Payment information (processed securely by third-party providers)</li>
              </ul>
              <p>
                <strong className="text-foreground">Information Collected Automatically:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Browser type and version</li>
                <li>Device information</li>
                <li>IP address</li>
                <li>Pages visited and time spent on our website</li>
                <li>Referring website or source</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
            <div className="text-muted-foreground leading-relaxed">
              <p className="mb-4">We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to inquiries and provide customer support</li>
                <li>Process and manage project engagements</li>
                <li>Send project updates and relevant communications</li>
                <li>Process payments and send invoices</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">4. Information Sharing</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                We do not sell, trade, or rent your personal information to third parties.
                We may share information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Service Providers:</strong> With trusted
                  third-party services that help us operate our business (e.g., payment processors,
                  email providers), under strict confidentiality agreements.
                </li>
                <li>
                  <strong className="text-foreground">Legal Requirements:</strong> When required
                  by law, court order, or government request.
                </li>
                <li>
                  <strong className="text-foreground">Business Protection:</strong> To protect
                  our rights, privacy, safety, or property.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect
              your personal data against unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">6. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the
              purposes outlined in this policy, comply with legal obligations, resolve disputes,
              and enforce our agreements. Project-related data is typically retained for the
              duration of our business relationship plus a reasonable period thereafter for
              legal and accounting purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">7. Cookies & Tracking</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4">
              <p>
                Our website may use cookies and similar tracking technologies to enhance your
                experience. These may include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Essential Cookies:</strong> Required for
                  basic website functionality.
                </li>
                <li>
                  <strong className="text-foreground">Analytics Cookies:</strong> Help us
                  understand how visitors interact with our website.
                </li>
              </ul>
              <p>
                You can control cookies through your browser settings. Disabling cookies may
                affect some website functionality.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">8. Your Rights</h2>
            <div className="text-muted-foreground leading-relaxed">
              <p className="mb-4">Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:business@vixilabs.com" className="text-primary hover:underline">
                  business@vixilabs.com
                </a>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">9. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for
              the privacy practices or content of these external sites. We encourage you to
              review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">10. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not
              knowingly collect personal information from children. If we become aware that
              we have collected data from a child, we will take steps to delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">11. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and processed in countries other than your
              own. We ensure appropriate safeguards are in place to protect your data in
              accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">12. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be posted on
              this page with an updated revision date. We encourage you to review this policy
              periodically. Your continued use of our services after changes constitutes
              acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">13. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices,
              please contact us at{' '}
              <a href="mailto:business@vixilabs.com" className="text-primary hover:underline">
                business@vixilabs.com
              </a>.
            </p>
          </section>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img
              src="/vixilabs-logo.png"
              alt="VixiLabs"
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-semibold">VixiLabs</span>
          </div>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="/#how-it-works" className="hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="/#services" className="hover:text-foreground transition-colors">
              Services
            </a>
            <a href="/#pricing" className="hover:text-foreground transition-colors">
              Pricing
            </a>
          </div>

          <div className="flex justify-center md:justify-end">
            <a
              href="mailto:business@vixilabs.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={16} />
              business@vixilabs.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VixiLabs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/terms" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
