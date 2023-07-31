import React, { useState } from 'react'
import { Area } from './styles'

export function Textarea({ placeholder, value = '', ...rest }) {
  const [text, setText] = useState('')

  function autoresize(e) {
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  return (
    <Area
      onInput={(e) => autoresize(e)}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={placeholder}
      {...rest}
    />
  )
}
