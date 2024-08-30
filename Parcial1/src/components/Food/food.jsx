//import { useState } from 'react'
import './../Hotels/Hotels.css'
//import planDeViajes from '../../data/data'

function Food({name, price, img}) {
  
  //const [count, setCount] = useState(0)

  return (
    <>
     <button>
      <h2>{name}</h2>
      <p>{price}</p>
      <img src={img} alt="" />
     </button>
    </>
  )
}

export default Food
