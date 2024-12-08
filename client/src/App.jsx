import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState([])


  useEffect(()=>{

    fetch('http://localhost:3000/users',{
      method:'POST',
      body: JSON.stringify()
      

    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  },[])

  return (
    <>
     
<h4>hello brother</h4>
<h3>test api {count.length}</h3>



     

</>
  )
}

export default App
