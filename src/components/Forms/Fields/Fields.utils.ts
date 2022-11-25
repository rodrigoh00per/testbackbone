export const getFormat = (value: any, type: string) => {
  if (!value) return value
  if (type === 'phone') {
    const onlyNums = value.replace(/[^\d]/g, '')
    if (onlyNums.length <= 3) return onlyNums
    if (onlyNums.length <= 7)
      return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 7)}`
    return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(
      6,
      10
    )}`
  } else return value
}

export const removeMask = (value: any, type: string) => {
  switch (type) {
    case 'phone':
      if (!value) return value
      else return value.replace(/[^\d]/g, '').substring(0, 10)
    default:
      return value
  }
}

export const getParse = (value: any, type: string) => {
  if (type === 'phone') {
    if (value === undefined) return ''
    return removeMask(value, type)
  } else return value
}
