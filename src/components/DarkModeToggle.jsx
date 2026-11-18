import React, { useState, useEffect } from 'react'

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode)
    return () => document.body.classList.remove('dark')
  }, [isDarkMode])

  return (
    <button onClick={() => setIsDarkMode((prev) => !prev)}>
      Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle