import Header from './pages/Home/Header'
import FrontPage from './pages/Home/FrontPage'
import CleaningServices from './pages/CleaningServices'
import CleaningTeam from './pages/CleaningTeam'
import ContactForm from './pages/ContactForm'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <FrontPage />
      <div class='mx-32 max-sm:mx-10'>
        <CleaningServices></CleaningServices>
        <CleaningTeam />
        <ContactForm />
      </div>
    </>
  )
}

export default App
