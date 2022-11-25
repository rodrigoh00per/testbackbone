import { render, screen } from '@testing-library/react'
import { Provider as ReduxProvider } from 'react-redux'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import Header from '../components/Header/Header'
import store from '../redux/store'
import history from '../history'
import Theme from '../styles/Themes/Theme.styles'

const ReduxWrapper = ({ children }: any) => (
  <ReduxProvider store={store}>
    <Theme>
      <HistoryRouter history={history}>{children}</HistoryRouter>
    </Theme>
  </ReduxProvider>
)
const reduxRender = (ui: any, options: any = {}) =>
  render(ui, { wrapper: ReduxWrapper, ...options })

describe('Header component', () => {
  it('should render', () => {
    reduxRender(<Header />)
    const paragraphElement = screen.getByText(/BackBone Test/i)
    expect(paragraphElement).toBeInTheDocument()
  })
})
