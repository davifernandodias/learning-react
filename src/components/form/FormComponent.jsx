import { useState } from "react"

const Form = ({ username, useremail }) => {

  const [name, setName] = useState(username ? username : '');
  const [email, setEmail] = useState(useremail ? useremail : '');

  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando form")
    console.log(name)
    console.log(email)
    console.log(username)
    console.log(useremail)

  }
  
  const handleCleanInputs = () => {
    setEmail('')
    setName('')
  }



  return(
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <form onSubmit={handleSubmit}>
        <div style={{display: "flex", flexDirection: "column", width: "400px", gap: "40px"}}>
          <label htmlFor="name">Nome: </label>
          <input 
            type="text"
            name="name" 
            placeholder="write your name" 
            onChange={handleName}
            value={name}/>
          <label htmlFor="email">Email: </label>
          <input 
            type="text" 
            name="email" 
            placeholder="write your email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            />
          <input type="submit" value={"enviar"} />
          <button onClick={handleCleanInputs}>Limpar</button>

        </div>
      </form>
    </div>
    
  )
}
export default Form