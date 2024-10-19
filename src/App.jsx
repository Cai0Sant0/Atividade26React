import './App.css'
import MudaEstilo from './components/MudaEstilo'

function App() {


  return (
    <>
    <h1>Mudando estilo com o estado da prop</h1>
    <MudaEstilo isHighlighted = {true}/>
    <MudaEstilo isHighlighted = {false}/>
    <MudaEstilo isHighlighted = {true}/>
    <MudaEstilo isHighlighted = {false}/>
    </>
  )
}

export default App
