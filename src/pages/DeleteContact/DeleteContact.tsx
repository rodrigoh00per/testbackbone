import React, { useEffect } from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { connect } from 'react-redux'
import { actionCreators } from '../../redux/root-actions'
import { ContainerButtons, ContainerDelete } from './DeleteContact.styles'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from '../../hooks/useTypedSelector'
import Swal from 'sweetalert2'
import {
  selectContactData,
  selectDeleteError,
  selectIsDeleting,
  selectWasDeletedSuccesfull
} from '../../redux/root-selectors'

const { getContactInfoStart, deleteContactStart, cleanContact } = actionCreators

interface DeleteContactProps {
  getContactInfoStart: (info: { id: string }) => void
  deleteContactStart: (info: { id: string }) => void
  cleanContact: () => void
}

const DeleteContact: React.FC<DeleteContactProps> = ({
  getContactInfoStart,
  deleteContactStart,
  cleanContact,...rest
}) => {

  const { id } = useParams()
  const navigate = useNavigate()

  const contactData: any = useSelector(selectContactData)
  const isDeleting = useSelector(selectIsDeleting)
  const wasDeleted = useSelector(selectWasDeletedSuccesfull)
  const deleteError = useSelector(selectDeleteError)
  useEffect(() => {
    if (id) getContactInfoStart({ id })
  }, [id, getContactInfoStart])

  useEffect(() => {
    if (!isDeleting && wasDeleted && deleteError) {
      Swal.fire({
        timer: 2000,
        showConfirmButton: false,
        icon: 'error',
        title: 'Oops...',
        text: 'Error al eliminar el contacto!'
      })
      cleanContact()
      navigate('/contacts')
    } else if (!isDeleting && wasDeleted && !deleteError) {
      Swal.fire({
        timer: 2000,
        icon: 'success',
        title: 'Contacto eliminado correctamente',
        showConfirmButton: false
      })
      cleanContact()
      navigate('/contacts')
    }
  }, [isDeleting, wasDeleted, cleanContact, navigate, deleteError])

  return (
    <ContainerDelete>
      <Typography variant='h2' component='h2' paddingLeft={'10px'}>
        Delete Contact
      </Typography>
      <hr></hr>
      <Typography variant='h6' component='label' paddingLeft={'10px'}>
        Nombre: {contactData.firstName} {contactData.lastName}
      </Typography>
      <br />
      <Typography variant='h6' component='label' paddingLeft={'10px'}>
        Email: {contactData.email}
      </Typography>
      <br />
      <Typography variant='h6' component='label' paddingLeft={'10px'}>
        Telefono: {contactData.phone}
      </Typography>
      <br />
      <ContainerButtons>
        <Button
          onClick={() => {
            navigate('/contacts')
          }}
          variant='outlined'
        >
          Cancelar
        </Button>
        <Button
          onClick={() => {
            if (id) deleteContactStart({ id })
          }}
          variant='outlined'
          color='error'
        >
          Eliminar
        </Button>
      </ContainerButtons>
    </ContainerDelete>
  )
}

export default connect(null, {
  getContactInfoStart,
  deleteContactStart,
  cleanContact
})(DeleteContact)
