import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import { connect } from 'react-redux'
import { Form as FinalForm } from 'react-final-form'
import { actionCreators } from '../../redux/root-actions'
import { ContainerCreate, ContainerForm } from './CreateContact.styles'
import Fields from '../../components/Forms/Fields/Fields'
import { fieldsDataConfig } from './CreateContact.utils'
import Button from '@mui/material/Button'
import { useSelector } from '../../hooks/useTypedSelector'
import {
  selectContactData,
  selectErrorOfUpdateCreate,
  selectInProgressUpdateCreate,
  selectIsCompletedUpdateCreate
} from '../../redux/root-selectors'
import Swal from 'sweetalert2'

const {
  getListOfContactsStart,
  createContactStart,
  getContactInfoStart,
  cleanContact,
  updateContactStart
} = actionCreators

interface CreateContactForm {
  id: string
  firstName: string
  lastName: string
  email: string
  phone: string
}
interface CreateUpdateContactProps {
  getListOfContactsStart: (info: { currentPage: number }) => void
  createContactStart: (data: CreateContactForm) => void
  updateContactStart: (data: CreateContactForm) => void
  getContactInfoStart: (info: { id: string }) => void
  cleanContact: () => void
}

const CreateUpdateContact: React.FC<CreateUpdateContactProps> = ({
  createContactStart,
  getContactInfoStart,
  cleanContact,
  updateContactStart
}) => {
  const [fieldsData] = useState(fieldsDataConfig)
  const navigate = useNavigate()
  const { id } = useParams()
  const contactData: any = useSelector(selectContactData)
  const error = useSelector(selectErrorOfUpdateCreate(id))
  const isFetching = useSelector(selectInProgressUpdateCreate(id))
  const wasCompleted = useSelector(selectIsCompletedUpdateCreate(id))

  useEffect(() => {
    cleanContact()
    if (id) getContactInfoStart({ id })
  }, [id, getContactInfoStart, cleanContact])

  useEffect(() => {
    if (!isFetching && wasCompleted && error) {
      Swal.fire({
        timer: 2000,
        showConfirmButton: false,
        icon: 'error',
        title: 'Oops...',
        text: `Error al ${id ? 'actualizar' : 'crear'}  el contacto!`
      })
      cleanContact()
      navigate('/contacts')
    } else if (!isFetching && wasCompleted && !error) {
      Swal.fire({
        timer: 2000,
        icon: 'success',
        title: `Contacto ${id ? 'actualizado' : 'creado'}  correctamente! `,
        showConfirmButton: false
      })
      cleanContact()
      navigate('/contacts')
    }
  }, [cleanContact, navigate, error, isFetching, id, wasCompleted])

  return (
    <ContainerCreate>
      <Typography variant='h3' component='h3' paddingLeft={'10px'}>
        {id ? 'Actualizar' : 'Crear'} Contacto
      </Typography>
      <br></br>
      <ContainerForm>
        <FinalForm
          keepDirtyOnReinitialize={true}
          onSubmit={(values: CreateContactForm) => {
            if (id) updateContactStart({ ...values })
            else createContactStart({ ...values })
          }}
          initialValues={{
            id: contactData.id,
            firstName: contactData.firstName,
            lastName: contactData.lastName,
            email: contactData.email,
            phone: contactData.phone
          }}
          render={({ handleSubmit, invalid }: any) => {
            return (
              <form onSubmit={handleSubmit}>
                <div style={{ width: '100%' }}>
                  <Fields fieldsData={fieldsData} />
                </div>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                  <Button
                    variant='contained'
                    type='submit'
                    disabled={invalid}
                    sx={{ marginLeft: 'auto', width: '150px', height: '40px' }}
                  >
                    {id ? 'Actualizar' : 'Crear'}
                  </Button>
                </div>
              </form>
            )
          }}
        />
      </ContainerForm>

      <br />
    </ContainerCreate>
  )
}

export default connect(null, {
  getListOfContactsStart,
  createContactStart,
  getContactInfoStart,
  updateContactStart,
  cleanContact
})(CreateUpdateContact)
