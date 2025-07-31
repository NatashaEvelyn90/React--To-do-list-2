import {useState} from 'react'
import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import ToDoList from './components/ToDoList/ToDoList'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
     <Header />
     <Body />
     <ToDoList />
    </div>
  )
}

export default App
