
import React,{useState} from 'react'


function App() {
  const [prodComprados, setProdComprados] = useState(0)

  const prodComprar =()=>{
    setProdComprados(prodComprados +1)
  }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
