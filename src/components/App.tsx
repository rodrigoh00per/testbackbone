import Theme from '../styles/Themes/Theme.styles'
import GlobalStyles from '../styles/global.styles'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import history from '../history'
import Routes from '../routes/Routes'
import { ContainerApp } from './App.styles'
import Header from './Header/Header'

const App = () => {
  return (
    <Theme>
      <GlobalStyles />
      <HistoryRouter history={history}>
        <ContainerApp>
          <Header />
          <Routes />
        </ContainerApp>
      </HistoryRouter>
    </Theme>
  )
}

export default App
