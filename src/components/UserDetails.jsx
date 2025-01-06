const UserDetails = ({ peoples }) => {
  return(
    <div>
      {peoples.map((people) => (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
          {people.age >= 18 ? (
            <div >
              <h1>pode tirar cnh:</h1>
              <p>
                {people.name}
              </p>
              <p>
                {people.age}
              </p>              
              <p>
                {people.profession}
              </p>            
            </div>
          ): (
            <div>
              <h1>não pode tirar cnh:</h1>
              <p>
                {people.name}
              </p>
              <p>
                {people.age}
              </p>              
              <p>
                {people.profession}
              </p>  
            </div>          
          )}
        </div>

      ))}
    </div>
  )
}

export default UserDetails;