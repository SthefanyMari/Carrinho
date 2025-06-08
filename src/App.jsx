import { BrowserRouter } from "react-router";
import Routers from "./componentes/Routers/index.jsx";
import AuthProvider from "./componentes/context/auth.jsx";
import DataProvider from "./componentes/context/data.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <Routers />
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;