import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import React from 'react'
import { EditIcon, TrashIcon } from './ContactsList.styles'
import { useNavigate } from 'react-router-dom'

interface ContactsListProps {
  contacts: Array<any>
}

const ContactsList: React.FC<ContactsListProps> = ({ contacts }) => {
  const navigate = useNavigate()
  return (
    <List
      sx={{
        width: '100%',
        overflowY:"auto",
        maxWidth: 360,
        bgcolor: 'background.paper',
        paddingLeft: '10px'
      }}
    >
      {contacts.map((contact: any) => (
        <ListItem key={contact.id}>
          <ListItemText
            primary={`${contact.firstName} ${contact.lastName}`}
            secondary={contact.email}
            about={contact.phone}
          />
          <EditIcon
            onClick={() => {
              navigate(`/contacts/${contact.id}/update`)
            }}
          />
          <TrashIcon
            onClick={() => {
              navigate(`/contacts/${contact.id}/delete`)
            }}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default ContactsList
