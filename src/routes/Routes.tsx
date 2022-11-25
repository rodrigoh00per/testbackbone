import { Routes as Switch, Route, Navigate } from 'react-router-dom'
import CreateUpdateContact from '../pages/CreateContact/CreateContact'
import DeleteContact from '../pages/DeleteContact/DeleteContact'
import Home from '../pages/Home/Home'

const Routes = () => (
  <Switch>
    <Route path='/contacts' element={<Home />} />
    <Route path='/contacts/:id/delete' element={<DeleteContact />} />
    <Route path='/contacts/create' element={<CreateUpdateContact />} />
    <Route path='/contacts/:id/update' element={<CreateUpdateContact />} />
    <Route path='*' element={<Navigate replace to='/contacts' />} />
  </Switch>
)

export default Routes
