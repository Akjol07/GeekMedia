import './core.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Footer from "./components/footer/Footer";
import ScrollTop from "./components/scrollTop/ScrollTop";
import AboutPage from "./pages/aboutPage/AboutPage";
import MultiMedia from "./components/multiMedia/MultiMedia";


function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route index element={<MainPage/>}/>
            <Route path="/about/:id" element={<AboutPage/>}/>
            <Route path='/multiMedia' element={<MultiMedia/>}/>
        </Routes>
        <ScrollTop/>
        <Footer/>
    </>
  );
}

export default App;