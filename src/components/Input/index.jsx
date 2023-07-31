import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import { WrapInput } from './styles'
export function Input({ Type, icon: Icon, placeholder, onChange, ...rest }) {
  const inputId = uuidv4()

  return (
    <WrapInput $isicon={Icon && true.toString()}>
      <label htmlFor={inputId}>
        {Icon && <Icon size={20} />}
        {/* if you don't have an icon, use nothing */}
      </label>
      <input
        type={Type}
        placeholder={placeholder}
        {...rest}
        onChange={onChange}
        id={inputId}
      />
    </WrapInput>
  )
}
