import { Route , Routes } from "react-router";
import { Home } from "./pages/Home";
import { Section } from "./pages/Sections";

function App() {
  return (
    <Routes>
      <Route index element = {<Home/>} />
      <Route path="/:pageId" element={<Section/>} />
      <Route path="/complete" element = {<>Completed Successfully !!</>} />
    </Routes>
  )
}

export default App;