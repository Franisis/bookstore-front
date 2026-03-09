import { Routes, Route } from "react-router-dom";
import Authors from "./Pages/App/Authors/page";
import Create from "./Pages/App/Create/page";
import MainLayout from "./Layouts/MainLayout";
import EditAuthor from "./Pages/App/Edit/page";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/authors" element={<Authors />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<EditAuthor/>}/>
        
      </Routes>
    </MainLayout>
  );
}

export default App;