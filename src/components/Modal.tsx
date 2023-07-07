import waldo from '../assets/waldo.png';
import odlaw from '../assets/odlaw.png';
import wizard from '../assets/wizard.png';
import { IntroductionContext } from './Game';
import { useContext } from 'react';
interface ModalProps {
  posX: number | undefined;
  posY: number | undefined;
  handleModalClick:(e:any)=>void;
}

export const Modal = ({ posX, posY,handleModalClick }: ModalProps) => {
  // let introductionContext = useContext(IntroductionContext);
  return (
    <>

    <div
      className="absolute flex flex-col w-56 text-xl bg-white"
      style={{ left: posX, top: posY }}
    >
      <button onClick={handleModalClick} className="flex flex-row items-center gap-3 p-2 text-sm font-semibold text-black border-b border-gray-400 hover:bg-gray-100"><img className="w-10 h-10" src={waldo} alt="Waldo"></img>Waldo</button>
      <button onClick={handleModalClick} className="flex flex-row items-center gap-3 p-2 text-sm font-semibold text-black border-b border-gray-400 hover:bg-gray-100"><img className="w-10 h-10 " src={odlaw} alt="Odlaw"></img>Odlaw</button>
      <button onClick={handleModalClick} className="flex flex-row items-center gap-3 p-2 text-sm font-semibold text-black hover:bg-gray-100"><img className="w-10 h-10 " src={wizard} alt="Wizard" />Wizard</button>
    </div>
   </>
  );
};
