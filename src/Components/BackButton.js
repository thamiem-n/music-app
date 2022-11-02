import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate();
  return (
    <div className='main-container'>
    <button class="back-btn" onClick={()=> navigate(-1)}>Back</button>
    </div>
  )
}

export default BackButton