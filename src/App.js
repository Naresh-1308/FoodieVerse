
import './App.scss';
//importing react router dom
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

//importing pages

import {HomePage, ErrorPage, MealDetailsPage, CategoryPage} from "./pages/index"
//importing compponents
import Header from "./components/Header/Header"
import Sidebar from "./components/Sidebar/Sidebar"


function App() {
  return (
    <BrowserRouter>
    <Header />
    <Sidebar />
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="*" element={<ErrorPage/>} />
      <Route path="/meal/cateory/:name" element={<CategoryPage/>} />
      <Route path="/meal/:id" element={<MealDetailsPage/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
