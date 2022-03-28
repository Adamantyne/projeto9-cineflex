import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";

import Header from "../Header";
import Home from "../Home";
import Movie from "../Movie";
import Session from "../ Session";
import Success from "../Success/Index";

function App() {
    const [infoSuccess, setInfoSuccess]=useState({title:"",session:"",tickets:[],name:"",cpf:""});
    
    return (
        <main className="container">
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:movieID" element={<Movie />} />
                    <Route path="/session/:sessionID" element={<Session setInfoSuccess={setInfoSuccess}/>} />
                    <Route path="/success" element={<Success infoSuccess={infoSuccess}/>} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}
export default App;