import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = stored ? stored === 'dark' : prefersDark
    setIsDark(shouldBeDark)
    document.documentElement.classList.toggle('dark', shouldBeDark)
  }, [])

  const toggle = () => {
    const newValue = !isDark
    setIsDark(newValue)
    document.documentElement.classList.toggle('dark', newValue)
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}
