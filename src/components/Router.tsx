import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Leaderboard } from "./Leaderboard";
import { Game } from "./Game";

export const  Router = ()=>{
    return(
        <>
            <Routes>
                
                <Route path="/leaderboard" element={<Leaderboard/>}></Route>
                <Route path="/" element={<Game/>}></Route>
            </Routes>
        </>
    );
}