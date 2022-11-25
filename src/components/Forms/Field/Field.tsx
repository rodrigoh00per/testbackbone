import React from 'react'

import { ContainerField } from './Field.styles'
import InputComponent from './Input/Input'

interface FieldProps {
  input?: any
  label?: string

  type?: string
  meta?: any

  placeholder?: string
  disabled?: boolean | undefined
}

const Field: React.FC<FieldProps> = ({ type, ...restProps }) => {
  const renderTypeOfField = () => {
    switch (type) {
      case 'text':
        return <InputComponent {...restProps} type={type} />
      case 'phone':
        return <InputComponent {...restProps} type={"text"} />
      default:
        return <InputComponent {...restProps} type={type} />
    }
  }

  return <ContainerField>{renderTypeOfField()}</ContainerField>
}

export default React.memo(Field)
