import { createContext, useContext, useEffect, useState } from "react";
import { Modal } from "./Modal";
import { getDatabase, ref, child, get,set } from "firebase/database";
import { Nav } from "./Nav";
export const Game =()=>{
    interface Position{
        posX: Array<number>,
        posY: Array<number>
    }

    
    const [displayModal,setDisplayModal] = useState<boolean>(false);
    const [modalPosX,setModalPosX] = useState<number>(0);
    const [modalPosY,setModalPosY] = useState<number>(0);
    const [characterPosX,setCharacterPosX] = useState<number>(0);
    const [characterPosY,setCharacterPosY] = useState<number>(0);
    const [displayValidationText,setDisplayFoundCharacter] = useState<boolean>(false);
    const [foundCharacterText,setFoundCharacterText] = useState<string>('');
    const [displayWaldoOnNav, setDisplayWaldoOnNav] = useState<boolean>(true);
    const [displayOdlawOnNav, setDisplayOdlawOnNav] = useState<boolean>(true);
    const [displayWizardoOnNav, setDisplayWizardOnNav] = useState<boolean>(true);
    const [minute,setMinute] = useState<string>('00');
    const [second, setSecond] = useState<string>('50');
    
    //  const Context = createContext('');
    
    

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
            console.log(second);
            
                switch(clickedCharacter){
                    case 'Waldo': setDisplayWaldoOnNav(false);
                    break;
                    case 'Odlaw': setDisplayOdlawOnNav(false);
                    break;
                    case 'Wizard': setDisplayWizardOnNav(false);
                }
               if(clickedCharacter=='Waldo'){
                setDisplayWaldoOnNav(false);
               }
               setFoundCharacterText(`You have found ${clickedCharacter}!`);  
            setTimeout(()=>{
                setFoundCharacterText('');
            },1000);
            console.log('found');
           }else{
            setFoundCharacterText(`Thats not ${clickedCharacter}, try again!`); 
            setTimeout(()=>{
                
                setFoundCharacterText('');
            },1000); 
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
    // const stopwatch = ()=>{
    //     setInterval(()=>{
    //         setSecond((parseInt(second)+1).toPrecision(2))
    //     },1000)
    // }
    useEffect(()=>{
        
    //     const stopwatch = setInterval(()=>{
            
    //         setSecond(prev=>(parseInt(prev)+1).toString().padStart(2,'0'));
    //         console.log(second);
            
    //     },1000)
    //    return ()=>clearInterval(stopwatch);
    },[])
    const incrementMinute = (()=>{
        if(second>='60'){
        setMinute(prev=>((parseInt(prev)+1).toString().padStart(2,'0')))
        setSecond('00');
    }
    })();
    
    return(
        <>
       
        <Nav waldoDisplay={displayWaldoOnNav} odlawDisplay={displayOdlawOnNav} wizardDisplay={displayWizardoOnNav} minute={minute} second={second}/>
        <div>
            {<div  style={{ left: modalPosX, top: modalPosY }} className="absolute items-center justify-center text-xl font-extrabold text-center text-blue-500 bg-gray-100 rounded-md top-6">{foundCharacterText}</div>}
            <img  className="hover:animate-[shake]" onClick={handleClick} src="./src/assets/game-img.jpg"></img>
            {displayModal&&<Modal handleModalClick={handleModalClick} posX={modalPosX} posY={modalPosY}/>}
            
        </div> 
         </>
       
    )
}