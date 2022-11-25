import { Field as FieldFinalForm } from 'react-final-form'
import _ from 'lodash'
import Field from '../Field/Field'
import { getValidateFunction } from '../Validations/Validations'
import { getFormat, getParse } from './Fields.utils'

interface FieldsProps {
  fieldsData: any
}

const Fields: React.FC<FieldsProps> = ({ fieldsData }): any => {
  return Object.keys(fieldsData).map((key: any) => {
    const { required, name, ...rest } = _.get(fieldsData, key)

    const validate = required ? getValidateFunction(key) : undefined
    return (
      <FieldFinalForm
        key={key}
        name={name}
        validate={validate}
        parse={value => getParse(value, rest.type)}
        format={value => getFormat(value, rest.type)}
        render={(props: any) => (
          <Field {...props} name={name} required={required} {...rest} />
        )}
      />
    )
  })
}
export default Fields
