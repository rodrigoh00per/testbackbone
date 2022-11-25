export const getMask = (info: any) => {
  if ('isNumeric' in info && info?.isNumeric === true)
    return (value: any) => {
      if (!value) return value
      const onlyNums = value.replace(/[^\d]/g, '')
      return onlyNums
    }
  else return (value: any) => value
}
