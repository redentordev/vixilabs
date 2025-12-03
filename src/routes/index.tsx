import { createFileRoute } from '@tanstack/react-router'
import {
  Zap,
  Clock,
  Code,
  Rocket,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Bot,
  Palette,
  Database,
  Mail,
  Flame,
  Heart,
  Search,
  Wrench,
  ArrowRightLeft,
  Cloud,
  Users,
  FileCode,
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => {
    // SSR - no data needed for static landing page
    return {}
  },
})

// Simple, cohesive animation - just fade up
function FadeIn({
  children,
  className = '',
  delay = 0
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Animated timeline for pain points
function AnimatedTimeline({ painPoints }: { painPoints: { time: string; task: string }[] }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Timing: circle pops, then line grows, then next circle, etc. (20% faster)
  const getCircleDelay = (index: number) => index * 0.48
  const getLineDelay = (index: number) => index * 0.48 + 0.16
  const getContentDelay = (index: number) => index * 0.48 + 0.08
  const totalAnimationTime = painPoints.length * 0.48

  return (
    <div ref={ref}>
      <div className="flex justify-center">
        <div className="relative">
          <div className="space-y-0">
            {painPoints.map((point, index) => (
              <div key={index} className="relative">
                {/* Line to next point */}
                <motion.div
                  className="absolute left-[11px] sm:left-[13px] top-6 sm:top-7 w-0.5 bg-amber-500 dark:bg-amber-700 origin-top"
                  initial={{ height: 0 }}
                  animate={isInView ? { height: '48px' } : { height: 0 }}
                  transition={{ duration: 0.3, delay: getLineDelay(index), ease: 'easeOut' }}
                />

                <div className="flex items-start gap-4 sm:gap-5 pb-6 sm:pb-7">
                  {/* Timeline dot - pops */}
                  <motion.div
                    className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-amber-500 dark:bg-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.25, delay: getCircleDelay(index), ease: 'backOut' }}
                  >
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white dark:bg-background" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="pb-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3, delay: getContentDelay(index), ease: 'easeOut' }}
                  >
                    <span className="text-lg sm:text-xl font-bold text-amber-600 dark:text-amber-600">{point.time}</span>
                    <p className="text-sm sm:text-base text-muted-foreground mt-0.5">{point.task}</p>
                  </motion.div>
                </div>
              </div>
            ))}

            {/* Final point - Total time wasted */}
            <div className="relative">
              <div className="flex items-center gap-4 sm:gap-5">
                {/* Big final dot - aligned with timeline */}
                <motion.div
                  className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500 dark:bg-amber-700 flex items-center justify-center flex-shrink-0 -ml-2 sm:-ml-2.5"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4, delay: totalAnimationTime + 0.2, ease: 'backOut' }}
                >
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white dark:bg-background" />
                </motion.div>

                {/* Final content - stacks on mobile, side by side on larger */}
                <motion.div
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, delay: totalAnimationTime + 0.3, ease: 'easeOut' }}
                >
                  <span className="text-3xl sm:text-4xl font-bold text-amber-600 dark:text-amber-600">3+ months</span>
                  <span className="text-xs sm:text-base text-muted-foreground">total time wasted</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* With VixiLabs section - appears after total time wasted */}
      <motion.div
        className="relative text-center py-8 sm:py-12 mt-6 sm:mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: totalAnimationTime + 0.8, ease: 'easeOut' }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-[120px] sm:text-[200px] font-bold text-primary/5 select-none">7</div>
        </div>
        <div className="relative">
          <p className="text-sm font-medium text-primary mb-2">With VixiLabs</p>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <WaveText
              text="7 days."
              className="text-primary"
              startDelay={totalAnimationTime + 1.8}
              isInView={isInView}
            />
            {' '}
            <WaveText
              text="That's it."
              startDelay={totalAnimationTime + 2.2}
              isInView={isInView}
            />
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base max-w-md mx-auto">
            Tell us your problem Monday. Have a working prototype by next Monday. No hiring, no scope creep, no excuses.
          </p>
        </div>
      </motion.div>
    </div>
  )
}

// Wave animation for text - scales each character one by one
function WaveText({
  text,
  className = '',
  startDelay = 0,
  isInView
}: {
  text: string
  className?: string
  startDelay?: number
  isInView: boolean
}) {
  const characters = text.split('')

  return (
    <span className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
          animate={isInView ? {
            scale: [1, 1, 1.15, 1],
          } : { scale: 1 }}
          transition={{
            duration: 0.4,
            delay: startDelay + index * 0.05,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 4,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

// Dot pattern divider
function DotDivider() {
  return (
    <div className="flex justify-center py-8 sm:py-12">
      <div className="flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-primary/30"
            initial={{ scale: 0.8, opacity: 0.3 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="h-16" />
      <HeroSection />
      <PainPointsSection />
      <HowItWorksSection />
      <DotDivider />
      <ServicesSection />
      <OtherServicesSection />
      <WeGetItSection />
      <PricingSection />
      <DotDivider />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary mb-6 sm:mb-8"
        >
          <Sparkles size={14} className="sm:w-4 sm:h-4 flex-shrink-0" />
          <span className="text-xs sm:text-sm font-medium whitespace-nowrap">Early Bird Seats</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6"
        >
          Stop waiting months.{' '}
          <span className="text-primary block sm:inline">Ship your AI MVP in 7 days.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2"
        >
          You have the idea. We have the speed. Tell us your problem, we'll build a working prototype—and you keep the code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0"
        >
          <a
            href="/onboarding"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity text-center"
          >
            Get Your MVP Built
          </a>
          <a
            href="#pain-points"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-border rounded-xl font-semibold hover:bg-secondary transition-colors text-center"
          >
            Why VixiLabs?
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-sm text-muted-foreground">
            {[
              '50/50 payment split',
              'Full source code',
              '1 week support',
            ].map((text, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PainPointsSection() {
  const painPoints = [
    { time: '2+ months', task: 'Waiting for your dev team to free up' },
    { time: '4+ weeks', task: 'Hiring and onboarding a freelancer' },
    { time: '3+ weeks', task: 'Scoping and planning with an agency' },
    { time: '2+ weeks', task: 'Building the wrong thing first' },
  ]

  return (
    <section id="pain-points" className="py-20 sm:py-28 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">The Traditional Way Is Broken</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Here's what building an AI MVP usually looks like:
          </p>
        </FadeIn>

        <AnimatedTimeline painPoints={painPoints} />
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Apply & Qualify',
      description: 'Fill out our quick onboarding form. We ask the right questions to understand your problem and ensure we\'re the right fit.',
    },
    {
      number: '02',
      icon: <Clock className="w-6 h-6" />,
      title: 'Discovery Call',
      description: 'If you qualify, we schedule a 30-minute call to dive deeper. We\'ll scope exactly what we\'re building together.',
    },
    {
      number: '03',
      icon: <Code className="w-6 h-6" />,
      title: 'We Build',
      description: 'Pay 50% to kick off. Our team gets to work immediately. You\'ll see progress updates throughout the week.',
    },
    {
      number: '04',
      icon: <Rocket className="w-6 h-6" />,
      title: 'Handoff & Launch',
      description: 'After 7 days, you get a working prototype, full source code, and documentation. Pay the remaining 50% and launch.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Our process is designed to move fast while ensuring we build exactly what you need.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="relative p-5 sm:p-6 bg-card rounded-xl sm:rounded-2xl border border-border hover:border-primary/50 transition-colors h-full">
                <div className="text-4xl sm:text-5xl font-bold text-primary/20 absolute top-3 sm:top-4 right-3 sm:right-4">
                  {step.number}
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 sm:mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          {/* Mobile: centered, no icon */}
          <div className="sm:hidden text-center max-w-sm mx-auto p-4 bg-secondary/50 rounded-xl">
            <p className="text-xs text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">Why we qualify first:</span> We're a small team, and every day counts in a 1-week sprint. Our onboarding ensures you come with a concrete idea so we can hit the ground running.
            </p>
          </div>
          {/* Tablet & Desktop: better design */}
          <div className="hidden sm:block max-w-2xl mx-auto">
            <div className="relative p-5 bg-gradient-to-r from-primary/5 to-transparent border-l-2 border-primary rounded-r-xl">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-foreground font-semibold">Why we qualify first:</span> We're a small team, and every day counts in a 1-week sprint. Our onboarding ensures you come with a concrete idea so we can hit the ground running—quality over quantity.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: 'AI Prototypes',
      description: 'Custom AI-powered applications, chatbots, automation tools, and intelligent workflows built with the latest models.',
      primary: true,
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Applications',
      description: 'Modern, fast web apps built with React, Next.js, or your preferred stack. From landing pages to full SaaS platforms.',
      primary: false,
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend & APIs',
      description: 'Robust backend systems, REST/GraphQL APIs, database design, and cloud infrastructure setup.',
      primary: false,
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Clean, intuitive interfaces that users love. We design with conversion and usability in mind.',
      primary: false,
    },
  ]

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">What We Build</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            AI prototyping is our specialty, but we're full-stack developers at heart.
            We can help with whatever you need.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div
                className={`p-5 sm:p-8 rounded-2xl border transition-colors h-full ${
                  service.primary
                    ? 'bg-primary/5 border-primary/30 hover:border-primary'
                    : 'bg-card border-border hover:border-primary/50'
                }`}
              >
                {service.primary && (
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-4">
                    Our Specialty
                  </span>
                )}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                  service.primary ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function OtherServicesSection() {
  const services = [
    {
      icon: <Search className="w-5 h-5" />,
      title: 'Technical SEO',
      description: 'Core Web Vitals, crawlability, structured data, and performance optimization.',
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      title: 'Maintenance',
      description: 'Ongoing updates, bug fixes, security patches, and dependency management.',
    },
    {
      icon: <ArrowRightLeft className="w-5 h-5" />,
      title: 'Migration',
      description: 'Platform migrations, database transfers, and legacy system modernization.',
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: 'DevOps',
      description: 'CI/CD pipelines, cloud infrastructure, monitoring, and deployment automation.',
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: 'Consultancy',
      description: 'Technical audits, architecture reviews, and strategic technology guidance.',
    },
    {
      icon: <FileCode className="w-5 h-5" />,
      title: 'Custom Development',
      description: 'Bespoke solutions for complex requirements beyond our sprint model.',
    },
  ]

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-10 sm:mb-12">
          <p className="text-sm font-medium text-primary mb-2">Not looking for an AI prototype?</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">We Do More</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Beyond our 1-week sprints, we offer ongoing services to help you build, scale, and maintain your products.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors h-full">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="text-center mt-8">
          <a
            href="mailto:business@vixilabs.com"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Get in touch for custom work
            <ArrowRight size={16} />
          </a>
        </FadeIn>
      </div>
    </section>
  )
}

function WeGetItSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-10 sm:mb-12">
          <p className="text-sm font-medium text-primary mb-2">A message from us</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">We Get It</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <FadeIn delay={0.1}>
            <div className="p-6 sm:p-8 bg-card border border-border rounded-2xl h-full">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Your situation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your team is talented. The problem isn't skill—it's <span className="text-foreground font-medium">bandwidth</span>. Between roadmaps, tech debt, and the day-to-day, that AI idea keeps getting pushed to "someday."
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative h-full rounded-2xl p-[2px] animated-border">
              <div className="relative p-6 sm:p-8 bg-card rounded-2xl h-full">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3">Our offer</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Let us take it off your plate. We'll turn your concept into a working prototype you can actually show—and if you love it, we're here to help you take it all the way to production.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="mt-8 sm:mt-10">
          <div className="text-center">
            <p className="text-base sm:text-lg text-muted-foreground italic">
              "Think of us as the spark. We build the foundation, you take it from there."
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function PricingSection() {
  const features = [
    '30-minute discovery call',
    '7-day development sprint',
    'Working AI prototype',
    'Full source code ownership',
    'Deployment assistance',
    '1 week post-launch support',
    'Documentation included',
    'Unlimited revisions during sprint',
  ]

  return (
    <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            One problem. One week. One price. No hidden fees, no scope creep.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-2 bg-green-500 text-white text-[10px] sm:text-sm font-semibold rounded-full shadow-lg whitespace-nowrap">
                <Zap size={12} className="sm:w-4 sm:h-4 flex-shrink-0" />
                20% Off
              </span>
            </div>

            <div className="bg-card border border-border rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">AI MVP Sprint</h3>
                <p className="text-muted-foreground text-sm sm:text-base">Perfect for validating your AI idea fast</p>
              </div>

              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <span className="text-lg sm:text-2xl text-muted-foreground line-through">$2,500</span>
                <span className="text-4xl sm:text-5xl md:text-6xl font-bold">$2,000</span>
              </div>

              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>$1,000 to start</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>$1,000 on delivery</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 sm:gap-x-10 sm:gap-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-500 flex-shrink-0 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <a
                  href="/onboarding"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
                >
                  Claim Your Spot
                </a>
                <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                  Only 3 spots available this month
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} className="mt-6 sm:mt-8">
          <div className="p-4 sm:p-6 bg-card border border-border rounded-xl sm:rounded-2xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="text-center sm:text-left">
                <h4 className="font-semibold mb-1 text-sm sm:text-base">Ready to go to production?</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  After your MVP, we can help scale it properly with custom pricing and ongoing support.
                </p>
              </div>
              <a
                href="mailto:business@vixilabs.com"
                className="text-xs sm:text-sm font-medium text-primary hover:underline whitespace-nowrap mx-auto sm:mx-0"
              >
                Contact us →
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "We had an idea for an AI writing assistant but no technical team. VixiLabs delivered a working prototype in exactly 7 days. We used it to raise our seed round.",
      author: "Sarah Chen",
      role: "Founder",
      avatar: "SC",
    },
    {
      quote: "I was skeptical about the 1-week timeline, but they actually pulled it off. The onboarding process alone showed me they knew what they were doing.",
      author: "Marcus Rodriguez",
      role: "CEO",
      avatar: "MR",
    },
    {
      quote: "Fast, professional, and they actually understand AI. Not just wrapper APIs—real, thoughtful engineering. Will definitely work with them again for v2.",
      author: "Emily Park",
      role: "Product Lead",
      avatar: "EP",
    },
  ]

  return (
    <section id="testimonials" className="py-20 sm:py-28 px-4 sm:px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Don't just take our word for it. Here's what founders who've worked with us have to say.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="p-5 sm:p-6 bg-card border border-border rounded-xl sm:rounded-2xl hover:border-primary/50 transition-colors h-full">
                <p className="text-muted-foreground mb-5 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-xs sm:text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-sm">{testimonial.author}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6">
      <FadeIn className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Your AI MVP?
        </h2>
        <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
          Tell us about your problem. If we're a good fit, we'll schedule a call within 24 hours.
        </p>
        <a
          href="/onboarding"
          className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
        >
          Start Your Project
        </a>
      </FadeIn>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img
              src="/vixilabs-logo.png"
              alt="VixiLabs"
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-semibold">VixiLabs</span>
          </div>

          {/* Nav Links */}
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#how-it-works" className="hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#services" className="hover:text-foreground transition-colors">
              Services
            </a>
            <a href="#pricing" className="hover:text-foreground transition-colors">
              Pricing
            </a>
          </div>

          {/* Email */}
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
