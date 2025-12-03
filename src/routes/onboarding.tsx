import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Sparkles,
  Clock,
  Mail,
} from 'lucide-react'

export const Route = createFileRoute('/onboarding')({
  component: OnboardingPage,
  loader: async () => ({}),
})

type FormData = {
  // Step 1: About You
  name: string
  email: string
  company: string
  role: string
  // Step 2: Your Project
  projectType: string
  problemDescription: string
  targetUsers: string
  // Step 3: Timeline & Budget
  timeline: string
  budgetConfirm: string
  howDidYouHear: string
  additionalNotes: string
}

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  role: '',
  projectType: '',
  problemDescription: '',
  targetUsers: '',
  timeline: '',
  budgetConfirm: '',
  howDidYouHear: '',
  additionalNotes: '',
}

function OnboardingPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 3

  const updateField = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const canProceed = () => {
    if (step === 1) {
      return formData.name && formData.email && formData.role
    }
    if (step === 2) {
      return formData.projectType && formData.problemDescription
    }
    if (step === 3) {
      return formData.timeline && formData.budgetConfirm
    }
    return false
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Create mailto link with form data
    const subject = encodeURIComponent(`New MVP Inquiry from ${formData.name}`)
    const body = encodeURIComponent(`
NEW MVP SPRINT INQUIRY
======================

ABOUT THE CLIENT
----------------
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Role: ${formData.role}

PROJECT DETAILS
---------------
Project Type: ${formData.projectType}

Problem Description:
${formData.problemDescription}

Target Users:
${formData.targetUsers || 'Not specified'}

TIMELINE & BUDGET
-----------------
Preferred Timeline: ${formData.timeline}
Budget Confirmation: ${formData.budgetConfirm}
How they found us: ${formData.howDidYouHear || 'Not specified'}

Additional Notes:
${formData.additionalNotes || 'None'}
    `.trim())

    // Open email client
    window.location.href = `mailto:business@vixilabs.com?subject=${subject}&body=${body}`

    // Show success state after a brief delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 500)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="h-16" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">You're All Set!</h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Your email client should have opened with your project details. Send the email and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/"
                className="px-6 py-3 border border-border rounded-xl font-medium hover:bg-secondary transition-colors"
              >
                Back to Home
              </a>
              <a
                href={`mailto:business@vixilabs.com?subject=MVP%20Inquiry%20from%20${encodeURIComponent(formData.name)}`}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity"
              >
                Resend Email
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="h-16" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles size={14} />
            <span className="text-xs font-medium">AI MVP Sprint</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Start Your Project</h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Tell us about your idea. We'll get back to you within 24 hours.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-center justify-between mb-3">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex items-center gap-2 ${s <= step ? 'text-primary' : 'text-muted-foreground'}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    s < step
                      ? 'bg-primary text-primary-foreground'
                      : s === step
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  {s < step ? <CheckCircle size={16} /> : s}
                </div>
                <span className="hidden sm:inline text-sm font-medium">
                  {s === 1 ? 'About You' : s === 2 ? 'Your Project' : 'Timeline'}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* Form */}
        <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-5">
              <h2 className="text-lg font-semibold mb-4">About You</h2>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => updateField('company', e.target.value)}
                  placeholder="Acme Inc. (optional)"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Role <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => updateField('role', e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select your role</option>
                  <option value="founder">Founder / CEO</option>
                  <option value="product">Product Manager</option>
                  <option value="technical">Technical Lead / CTO</option>
                  <option value="business">Business / Operations</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <h2 className="text-lg font-semibold mb-4">Your Project</h2>

              <div>
                <label className="block text-sm font-medium mb-2">
                  What are you looking to build? <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => updateField('projectType', e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select project type</option>
                  <option value="ai-chatbot">AI Chatbot / Assistant</option>
                  <option value="ai-automation">AI Automation Tool</option>
                  <option value="ai-analysis">AI Data Analysis / Insights</option>
                  <option value="ai-content">AI Content Generation</option>
                  <option value="ai-other">Other AI Application</option>
                  <option value="web-app">Web Application (non-AI)</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Describe your problem or idea <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.problemDescription}
                  onChange={(e) => updateField('problemDescription', e.target.value)}
                  placeholder="What problem are you trying to solve? What would a successful MVP look like?"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Be specific. The more detail you provide, the better we can assess fit.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Who are the target users?</label>
                <input
                  type="text"
                  value={formData.targetUsers}
                  onChange={(e) => updateField('targetUsers', e.target.value)}
                  placeholder="e.g., Small business owners, Sales teams, Developers"
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <h2 className="text-lg font-semibold mb-4">Timeline & Budget</h2>

              <div>
                <label className="block text-sm font-medium mb-2">
                  When do you want to start? <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => updateField('timeline', e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP - Ready to start this week</option>
                  <option value="2-weeks">Within 2 weeks</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="exploring">Just exploring for now</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Budget confirmation <span className="text-red-500">*</span>
                </label>
                <p className="text-sm text-muted-foreground mb-3">
                  Our AI MVP Sprint is <span className="text-foreground font-medium">$2,000</span> (currently 20% off). Payment is split 50/50.
                </p>
                <select
                  value={formData.budgetConfirm}
                  onChange={(e) => updateField('budgetConfirm', e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select an option</option>
                  <option value="ready">Yes, this fits my budget</option>
                  <option value="discuss">I'd like to discuss scope/pricing</option>
                  <option value="higher">I have a larger budget for more scope</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">How did you hear about us?</label>
                <select
                  value={formData.howDidYouHear}
                  onChange={(e) => updateField('howDidYouHear', e.target.value)}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select an option</option>
                  <option value="search">Search engine</option>
                  <option value="social">Social media</option>
                  <option value="referral">Referral / Word of mouth</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Anything else we should know?</label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => updateField('additionalNotes', e.target.value)}
                  placeholder="Links to existing products, specific requirements, or questions you have..."
                  rows={3}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                />
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft size={16} />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < totalSteps ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canProceed() || isSubmitting}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            )}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Response within 24h</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>No spam, ever</span>
          </div>
        </div>
      </div>

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
