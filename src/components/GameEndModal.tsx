interface GameEndModalProps{
    handleSubmit:(e:any)=>void;
    inputRef:React.Ref<HTMLInputElement>;
}
export const GameEndModal = ({handleSubmit,inputRef}:GameEndModalProps)=>{
    
    return(
        <div className="text-red-500 flex absolute text-xl z-[999] font-semibold justify-center items-center rounded-md flex-col bg-gray-200 text-black top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] w-[450px] h-[400px]  text-center gap-6 font-serif">
            <form onSubmit={handleSubmit} className="flex flex-col w-64 gap-4">
                <div>
                     <div>Your Time:</div>
                     <div>00:00</div>
                </div>
           
            
            <input ref={inputRef} className="p-2 text-sm font-thin text-center bg-white focus:placeholder:text-transparent" placeholder="Enter your name"></input>
            
            <button className="pt-2 pb-2 pl-6 pr-6 font-bold text-black bg-blue-300 rounded-md hover:bg-blue-500" type="submit">Submit</button>
          </form>
        </div>
    )
}