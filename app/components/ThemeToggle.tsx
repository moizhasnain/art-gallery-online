'use client'

import { useTheme } from './ThemeProvider'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 hover:bg-grey-lighter dark:hover:bg-grey-dark rounded-full transition-colors duration-200"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-black dark:text-white" />
      ) : (
        <Sun className="w-5 h-5 text-black dark:text-white" />
      )}
    </button>
  )
}
