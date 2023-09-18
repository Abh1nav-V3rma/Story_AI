import { Routes, Route, BrowserRouter} from "react-router-dom"
import Home from "./Pages/home";
function App() {
  return(
   
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route> 
        </Routes>
      </BrowserRouter>
  );
}
;
export default App;
