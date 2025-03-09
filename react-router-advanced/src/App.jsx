import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import profile from './components/Profile';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<ProtectedRoute><profile/></ProtectedRoute> }/>
        <Route path="/Blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;