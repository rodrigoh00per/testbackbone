import { render, screen } from '@testing-library/react'
import { Provider as ReduxProvider } from 'react-redux'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import store from '../redux/store'
import history from '../history'
import Theme from '../styles/Themes/Theme.styles'
import ContactsList from '../components/ContactsList/ContactsList'

const ReduxWrapper = ({ children }: any) => (
  <ReduxProvider store={store}>
    <Theme>
      <HistoryRouter history={history}>{children}</HistoryRouter>
    </Theme>
  </ReduxProvider>
)
const reduxRender = (ui: any, options: any = {}) =>
  render(ui, { wrapper: ReduxWrapper, ...options })

describe('ContactsList component', () => {
  it('should render', () => {
    const contactsFake = [
      {
        firstName: 'Rodrigo',
        lastName: 'Guerrero',
        email: '33@tu.cm',
        phone: '5551593322',
        id: 1234
      }
    ]
    reduxRender(<ContactsList contacts={contactsFake} />)
    const paragraphElement = screen.getByText(/Rodrigo/i)
    expect(paragraphElement).toBeInTheDocument()
  })
})
