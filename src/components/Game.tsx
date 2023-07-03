import { createContext, useContext, useEffect, useState } from "react";
import { Modal } from "./Modal";
import { getDatabase, ref, child, get,set } from "firebase/database";
export const Context = createContext('d');
export const Game =()=>{
    const [display,setDisplay] = useState<boolean>(false);
    const [modalPosX,setModalPosX] = useState<number>(0);
    const [modalPosY,setModalPosY] = useState<number>(0);
    const [characterPosX,setCharacterPosX] = useState<number>(0);
    const [characterPosY,setCharacterPosY] = useState<number>(0);
    //  const Context = createContext('');
    interface Position{
        posX: Array<number>,
        posY: Array<number>
    }
    

    const handleClick = (event:any)=>{
        setDisplay(true);
        const clickedElement = event.target;
       const imgWidth = clickedElement.offsetWidth;
       const imgHeight = clickedElement.offsetHeight;
       const x = Math.floor(((event.clientX - clickedElement.offsetLeft) / imgWidth)*100);
       const y = Math.floor(((event.clientY - clickedElement.offsetTop) / imgHeight)*100);
       setModalPosX(event.pageX+10);
       setModalPosY(event.pageY);
    //    console.log([x,y]);
        // console.log([x,y]);
        
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
        // console.log(clickedCharacter);
        
        const validPositions:Promise<Position> = getValidPositions(clickedCharacter);
        validPositions.then((positions)=>{
         
           if(positions.posX.includes(characterPosX) && positions.posY.includes(characterPosY)){
            console.log('found');
           }else{
            console.log('not found');
           }  
        })        
        setDisplay(false);
    }

  const db = getDatabase();
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
    // useEffect(()=>{
    //     getValidPoints();
    // },[])
    return(
        <Context.Provider value={'display'}>
       
        <div >
            
            <img onClick={handleClick} src="./src/assets/game-img.jpg"></img>
            {display&&<Modal handleModalClick={handleModalClick} posX={modalPosX} posY={modalPosY}/>}
          
            
        </div> 
        </Context.Provider>
    )
}