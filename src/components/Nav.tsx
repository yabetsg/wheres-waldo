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
          src="./src/assets/title-img.png"
          alt=""
        ></img>
        <nav className="font-[ui-sans-serif,DodgyUltraUltra] text-3xl">
          <span className="text-blue-500">Wheres</span>
          <span className="text-red-500">  Waldo?</span>
        </nav>
      </div>
      <div className="flex gap-6">

        <span style={{opacity:waldoDisplay?'':0.2}}><img className="w-14 h-14" src="/src/assets/waldo.png" alt="" /></span>
        <span style={{opacity:odlawDisplay?'':0.2}}> <img className="w-14 h-14" src="/src/assets/odlaw.png" alt="" /></span>
       <span style={{opacity:wizardDisplay?'':0.2}}> <img className="w-14 h-14" src="/src/assets/wizard.png" alt="" /></span>
      </div>
      <div className="text-black w-28">{minute}:{second}</div>
      
      <button className="font-bold bg-red-400 rounded-md h-14 w-36 hover:bg-red-500">
        Leaderboard
      </button>
    </nav>
  );
};
