import { createContext, useContext, useEffect, useState } from "react";
import { Modal } from "./Modal";
import { getDatabase, ref, child, get,set } from "firebase/database";
export const Game =()=>{
    const [displayModal,setDisplayModal] = useState<boolean>(false);
    const [modalPosX,setModalPosX] = useState<number>(0);
    const [modalPosY,setModalPosY] = useState<number>(0);
    const [characterPosX,setCharacterPosX] = useState<number>(0);
    const [characterPosY,setCharacterPosY] = useState<number>(0);
    const [displayFoundCharacter,setDisplayFoundCharacter] = useState<boolean>(false);
    const [foundCharacter,setFoundCharacter] = useState<string>('');
    //  const Context = createContext('');
    interface Position{
        posX: Array<number>,
        posY: Array<number>
    }
    

    const handleClick = (event:any)=>{
        setDisplayModal(true);
        const clickedElement = event.target;
       const imgWidth = clickedElement.offsetWidth;
       const imgHeight = clickedElement.offsetHeight;
       const x = Math.floor(((event.clientX - clickedElement.offsetLeft) / imgWidth)*100);
       const y = Math.floor(((event.clientY - clickedElement.offsetTop+ window.scrollY) / imgHeight)*100);
       setModalPosX(event.pageX+10);
       setModalPosY(event.pageY);     
        setCharacterPosX(x);
        setCharacterPosY(y);
    }
    const handleModalClick = (e:any)=>{
        let clickedCharacter:string;
        if(e.target instanceof HTMLImageElement){
            clickedCharacter = e.target.alt;
        }else{
            clickedCharacter = e.target.innerText;
        }

        
        const validPositions:Promise<Position> = getValidPositions(clickedCharacter);
        validPositions.then((positions)=>{
         
            console.log([characterPosX,characterPosY]);
           if(positions.posX.includes(characterPosX) && positions.posY.includes(characterPosY)){
            
               setFoundCharacter(`You have found ${clickedCharacter}!`);  
            setTimeout(()=>{
                setFoundCharacter('');
            },1000);
            console.log('found');
           }else{
            setFoundCharacter(`Thats not ${clickedCharacter}, try again!`); 
            // setTimeout(()=>{
                
            //     setFoundCharacter('');
            // },1000); 
            console.log('not found');
           }  
        })        
        setDisplayModal(false);
    }
   
//   const db = getDatabase();
    // set(ref(db,'Waldo/positions'),{
    //     posX:[26,27,28,29],
    //     posY:[31,32,33,34,35]
    // });
    // set(ref(db,'Odlaw/positions'),{
    //     posX:[58,59,60],
    //     posY:[62,63,64,65,66,67]
    // });
    // set(ref(db,'Wizard/positions'),{
    //     posX:[60,61],
    //     posY:[77,78,79,80,81,82]
    // });
    const getValidPositions = async (character:string)=>{
         let validPos: Position = {posX:[],posY:[]};
       await get(child(ref(getDatabase()),`${character}/positions`)).then((snapshot)=>{
            if(snapshot.exists()){
                validPos = snapshot.val();
            }
            
        }).catch(error=>console.log(error));
        
        return validPos;
    }
    return(
        <div>
            
            {<div  style={{ left: modalPosX, top: modalPosY }} className="absolute items-center justify-center text-xl font-extrabold text-center text-blue-500 bg-gray-100 rounded-md top-6">{foundCharacter}</div>}
            <img  className="hover:animate-[shake]" onClick={handleClick} src="./src/assets/game-img.jpg"></img>
            {displayModal&&<Modal handleModalClick={handleModalClick} posX={modalPosX} posY={modalPosY}/>}
            
        </div> 
       
    )
}