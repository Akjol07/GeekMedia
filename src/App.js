import './core.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import Footer from "./components/footer/Footer";
import ScrollTop from "./components/scrollTop/ScrollTop";
import AboutPage from "./pages/aboutPage/AboutPage";
import MultiMedia from "./components/multiMedia/MultiMedia";
import CategoryPage from "./pages/categoryPage/CategoryPage";
import ArticlesPage from "./pages/articlesPage/ArticlesPage";
import AboutProject from "./pages/aboutProject/AboutProject";

function App() {
  return (
    <>
        <Header/>
        <Routes>
            <Route index element={<MainPage/>}/>
            <Route path="/about/:id" element={<AboutPage/>}/>
            <Route path='/multiMedia' element={<MultiMedia/>}/>
            <Route path='/articles' element={<ArticlesPage/>}/>
            <Route path='/articles/category/:category' element={<CategoryPage/>}/>
            <Route path='/aboutProject' element={<AboutProject/>}/>
        </Routes>
        <ScrollTop/>
        <Footer/>
    </>
  );
}

export default App;