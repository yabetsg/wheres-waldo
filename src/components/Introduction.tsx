import waldo from "../assets/waldo.png";
import odlaw from "../assets/odlaw.png";
import wizard from "../assets/wizard.png";
import { IntroductionContext } from "./Game";
import { useContext } from "react";
export const Introdcution = () => {
  const introductionContext = useContext(IntroductionContext);
  const handleClick = () => {
    introductionContext.setIntroductionOpen?.(false);
  };
  return (
    <div className="flex absolute text-xl z-[999] font-semibold justify-center items-center rounded-md flex-col bg-gray-200 text-black top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[450px] h-[400px] p-7 text-center gap-6 font-serif blur-0">
      <div>Tag these characters as fast as you can!</div>
      <div>
        <div className="flex gap-6">
          <span>
            <img className="p-1 border border-black w-14 h-14" src="/src/assets/waldo.png" alt="" />
          </span>
          <span>
            {" "}
            <img className="p-1 border border-black w-14 h-14" src="/src/assets/odlaw.png" alt="" />
          </span>
          <span>
            {" "}
            <img className="p-1 border border-black w-14 h-14" src="/src/assets/wizard.png" alt="" />
          </span>
        </div>
      </div>
      <div>You will be timed so move fast!</div>
      <button className="pt-2 pb-2 pl-6 pr-6 font-bold bg-blue-300 rounded-md hover:bg-blue-500" onClick={handleClick}>Start</button>
    </div>
  );
};
