import { useState } from 'react'
import './App.css'
// import UserDetails from './components/UserDetails'
import Form from './components/form/FormComponent'
function App() {

  const data = {
    username: "davi",
    email: "davifernando@gmail.com"
  }

  return (
    <Form  useremail={data.email} username={data.username}/>
    // <div>
    //   <UserDetails peoples={peoples} />
    // </div>
  )
}

export default App
