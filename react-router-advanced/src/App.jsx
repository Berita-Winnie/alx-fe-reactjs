import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Blog/:postId" element={<BlogPost />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;