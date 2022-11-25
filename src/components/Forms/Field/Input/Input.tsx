import React from 'react'
import TextField from '@mui/material/TextField'

interface InputProps {
  input?: any
  label?: string
  type?: string
  meta?: any
  placeholder?: string
  disabled?: boolean | undefined
}
const Input: React.FC<InputProps> = ({
  input: { value, ...restValuesInput },
  label,
  meta,
  placeholder
}) => {
  return (
    <TextField
      placeholder={placeholder}
      error={meta.error && meta.touched}
      label={label}
      {...restValuesInput}
      value={value === undefined ? '' : value}
      helperText={meta.error && meta.touched ? meta.error : ''}
      variant='filled'
    />
  )
}

export default React.memo(Input)
