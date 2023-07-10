import { Link } from "react-router-dom";
import waldo from '../assets/waldo.png'
import odlaw from '../assets/odlaw.png'
import wizard from '../assets/wizard.png'
import title_img from '../assets/nav.png'
interface NavProps{
  waldoDisplay:boolean,
  odlawDisplay:boolean,
  wizardDisplay:boolean,
  minute: string,
  second:string
  
}
export const Nav = ({waldoDisplay,odlawDisplay,wizardDisplay,minute,second}:NavProps) => {
  return (
    <nav className="sticky top-0 flex items-center justify-between h-20 pl-3 pr-3 bg-white">
      <div className="flex items-center gap-3">
        <img
          className="w-16 h-16"
          src={title_img}
          alt="title image"
        ></img>
        <nav className="font-[ui-sans-serif,DodgyUltraUltra] text-3xl">
          <span className="text-blue-500">Wheres</span>
          <span className="text-red-500">  Waldo?</span>
        </nav>
      </div>
      <div className="flex gap-6">

        <span style={{opacity:waldoDisplay?'':0.2}}><img className="w-14 h-14" src={waldo} alt="waldo" /></span>
        <span style={{opacity:odlawDisplay?'':0.2}}> <img className="w-14 h-14" src={odlaw} alt="odlaw" /></span>
       <span style={{opacity:wizardDisplay?'':0.2}}> <img className="w-14 h-14" src={wizard} alt="wizard" /></span>
      </div>
      <div className="text-black w-28 font-['digital-clock-font',ui-serif,Georgia]  text-4xl">{minute}:{second}</div>
      <Link to={"/leaderboard"}><button className="font-bold bg-red-400 rounded-md h-14 w-36 hover:bg-red-500">
        Leaderboard
      </button></Link>
      
    </nav>
  );
};
