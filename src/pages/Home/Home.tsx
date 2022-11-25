import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { connect } from 'react-redux'
import { useSelector } from '../../hooks/useTypedSelector'
import { actionCreators } from '../../redux/root-actions'
import { selectContactsListData } from '../../redux/root-selectors'
import { ContainerHome } from './Home.styles'
import ContactsList from '../../components/ContactsList/ContactsList'
const { getListOfContactsStart } = actionCreators

interface HomeProps {
  getListOfContactsStart: (info: { currentPage: number }) => void
}

const Home: React.FC<HomeProps> = ({ getListOfContactsStart }) => {
  const contactsData: any = useSelector(selectContactsListData)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getListOfContactsStart({ currentPage })
  }, [currentPage, getListOfContactsStart])

  return (
    <ContainerHome>
      <Typography variant='h2' component='h2' paddingLeft={'10px'}>
        Lista De Contactos
      </Typography>
      <ContactsList contacts={contactsData.results} />
      <Stack spacing={2}>
        <Pagination
          sx={{ paddingLeft: '10px' }}
          count={contactsData.totalPages}
          onChange={(_, value) => {
            setCurrentPage(value)
          }}
          page={currentPage}
        />
      </Stack>
      <br />
    </ContainerHome>
  )
}

export default connect(null, { getListOfContactsStart })(Home)
