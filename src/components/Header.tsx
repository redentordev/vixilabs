import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/vixilabs-logo.png"
              alt="VixiLabs"
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-xl font-bold">VixiLabs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Theme */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#get-started"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity text-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#get-started"
                onClick={() => setIsOpen(false)}
                className="mx-4 mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-center hover:opacity-90 transition-opacity"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
