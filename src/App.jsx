import Home from './pages/Home'
import CleaningServices from './pages/CleaningServices'
import CleaningTeam from './pages/CleaningTeam'
import ContactForm from './pages/ContactForm'
import './index.css'

function App() {
  return (
    <>
      <Home></Home>
      <div class='mx-32 max-sm:mx-10'>
        <CleaningServices></CleaningServices>
        <CleaningTeam />
        <ContactForm />
      </div>
    </>
  )
}

export default App
