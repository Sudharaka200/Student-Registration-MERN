import { BrowserRouter, Route, Routes } from 'react-router-dom'
import User from './User'
import './App.css'
import UserForm from './UserForm'

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route index element={<User />} />
          <Route path='/userform' element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
