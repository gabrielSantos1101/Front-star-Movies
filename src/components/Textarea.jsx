import React, { useState } from 'react'

export function Textarea({ placeholder, value = '', ...rest }) {
  const [text, setText] = useState('')

  function autoresize(e) {
    e.target.style.height = 'auto'
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  return (
    <textarea
      className="p-5 mt-4 bg-BG-900 border text-white border-mirage-950 border-solid resize-none w-full overflow-y-auto min-h-36  min-h-36 max-h-96 rounded-xl"
      onInput={(e) => autoresize(e)}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={placeholder}
      {...rest}
    />
  )
}
