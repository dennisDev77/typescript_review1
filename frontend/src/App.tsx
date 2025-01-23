import React from 'react'
import api from './service/api'
import './App.css'

function App() {
const [dados, setDados]=React.useState([])
    
    const getUsers = async()=>{
    try{
      const response=await api.get('/user')   
      setDados(response.data.users)
      console.log(dados)
      }catch(err){
      console.log(`Erro ${err}`)
    }
  }

  return (
    <>
      <div>  
      <h1>Testando o nosso front</h1>

       <button onClick={getUsers} className=''>
        Visualizar
        </button>

      </div>

      {/* {
        dados.map((user)=>(
          <div key={user.firstName}></div>
        ))
      } */}
    </>
  )
}

export default App
