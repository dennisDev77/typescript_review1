import React from "react"
import api from './service/api'

function App() {
const [data, setData]=React.useState([])

  React.useEffect(()=>{

    try{
      async function getProduct(){
        const response= await api.get('/product')
        setData(response.data)
        console.log(data)
      }

      getProduct()

    }catch(err){
      return console.log(`Falha com response ${err}`)
    }

  },[])
  return (
    <>
      <div>
        <h1>Testando o nosso front</h1>
      </div>
  
    </>
  )
}

export default App
