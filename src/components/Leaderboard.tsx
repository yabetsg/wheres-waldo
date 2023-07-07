import { Nav } from "./Nav"

export const Leaderboard = ()=>{
    return(<>
    <nav className="sticky top-0 flex items-center content-center h-20 pl-3 pr-3 bg-white">
      <div className="flex items-center justify-center gap-3">
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

      </div>

    
      
    </nav>
    <div className="w-48 bg-red-500">leaderboard</div> </>
    )
}