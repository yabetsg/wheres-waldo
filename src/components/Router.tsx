import { BrowserRouter, Routes, Route } from "react-router-dom";

export const  Router = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/leaderboard"></Route>
                <Route path="/"></Route>
            </Routes>
        </BrowserRouter>
    );
}