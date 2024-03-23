import Home from "./pages/bloghome/BlogHome";
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import Single from './pages/single/Single'
import Write from "./pages/write/Write";

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" exact element={<Home></Home>}></Route> 
          <Route path="/post/:postId" element={<Single />} ></Route> 
          <Route path="/write" element={<Write />} ></Route>
        </Routes>
      </Router>
  );
}

export default App;