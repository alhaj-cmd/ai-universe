
import './App.css'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import Header from './components/Header/Header'

function App() {

  return (
    <div className="App">
    <Header></Header>
    <Button>Sort By Date</Button>
    <Card/>
    </div>
  )
}

export default App
