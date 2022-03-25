import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "../Header";
import Home from "../Home";
import Movie from "../Movie";
import Footer from "../Footer/Footer";

function App() {
    return (
        <main className="container">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:movieID" element={<Movie />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}
export default App;