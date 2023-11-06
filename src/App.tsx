import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from './pages/Layout';
import AddNote from './pages/AddNote';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="add-note/:id" element={<AddNote />} />
        <Route path="add-note" element={<AddNote />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
