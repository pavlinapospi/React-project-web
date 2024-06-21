//Pavlína Pospíšilová
//Kersi33@seznam.cz
//pavlinap


import {BrowserRouter,Routes,Route} from "react-router-dom"
import QrGeneration from "./pages/QrGeneration"
import Home from "./pages/Home"
import Error from "./pages/Error"
import SharedLayout from "./pages/SharedLayout"



const App = () => {

return <BrowserRouter>
            <Routes>
                <Route element={<SharedLayout />}>
                <Route path="/" element={<Home/>}/>
                <Route path="/QrGeneration" element={<QrGeneration/>}/>
                <Route path="*" element={<Error/>} />
                </Route>
            </Routes>
</BrowserRouter>
}

export default App
