import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import Recipies from './components/Recipies/Recipies'


function App() {

  return (
    <>
      <div className='font-lato'>
        <Header />
        <Banner />
        <Recipies />
      </div>
    </>
  )
}

export default App
