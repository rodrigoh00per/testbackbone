const validateEmail = (email: any) => {
  if (!email) {
    return 'El email es requerido'
  } else if (checkFormatEmail(email)) {
    return 'El formato del email es incorrecto'
  } else return null
}

const checkFormatEmail = (email: string) =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]/i.test(email) ? true : false

const genericValidate = (value: any) =>
  !value ? 'El valor es requerido' : null

export const getValidateFunction = (key: string) => {
  const typeValidation: any = {
    email: validateEmail
  }
  return typeValidation[key] ?? genericValidate
}
