import { useState } from "react";
import Routers from './componentes/Routers';


function App() {
  const [count, setCount] = useState(0);

  return (

    <Routers />

  );
}

export default App;