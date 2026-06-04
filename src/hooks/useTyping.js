import { useState, useEffect } from 'react'

export function useTyping(phrases, typingSpeed = 110, deletingSpeed = 60, pauseMs = 2200) {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[phraseIndex]
    let timeout

    if (!deleting) {
      if (charIndex < phrase.length) {
        timeout = setTimeout(() => setCharIndex(i => i + 1), typingSpeed)
      } else {
        timeout = setTimeout(() => setDeleting(true), pauseMs)
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => setCharIndex(i => i - 1), deletingSpeed)
      } else {
        setDeleting(false)
        setPhraseIndex(i => (i + 1) % phrases.length)
      }
    }

    setText(phrase.substring(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseMs])

  return text
}
