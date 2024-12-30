import { useNavigate } from 'react-router-dom'
import './App.css'

function User() {
    const navigate = useNavigate();

  return (
    <div>
        <h1>Student Registration</h1>
        <button  className='btn-students' onClick={() => navigate('/userform')}>Students</button>

    </div>
  )
}

export default User
