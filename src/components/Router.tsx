import { Routes, Route } from "react-router-dom";
import { Leaderboard } from "./Leaderboard";
import { Game } from "./Game";

export const Router = () => {
  return (
    <>
      <Routes>
       <Route path="/" element={<Game />}></Route>
        <Route path="/wheres-waldo/" element={<Game />}></Route>
        <Route path="/wheres-waldo" element={<Game />}></Route>
        <Route path="/leaderboard" element={<Leaderboard />}></Route>
        <Route path="/leaderboard/" element={<Leaderboard />}></Route>
        
      </Routes>
    </>
  );
};
