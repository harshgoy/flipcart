
import Header from "./Components/header/Header"
import Home from "./Components/home/Home"
import {Box} from "@mui/material"
import DataProvider from "./context/DataProvider";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import DetailView from "./Components/details/DetailView";
import Cart from "./Components/cart/Cart";
import Sucess from "./Components/cart/Sucess";
import Cancel from "./Components/cart/Cancel";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header/>
      <Box fontStyle={{marginTop:54}}>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='product/:id' element={<DetailView/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/success' element={<Sucess/>}/>
        <Route path='/cancel' element={<Cancel/>}/>
        </Routes>
      </Box>
      </BrowserRouter>
      
    </DataProvider>
  );
}

export default App;
