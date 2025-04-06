import Popup from "./Popup";
import { useState } from "react";
function Question(props) {
    let [activate,setActivate]=useState(false);

    return (
        <>
            <Popup activate={activate} setActivate={setActivate} code1={props.description} note={props.note}></Popup>
        <div className="p-2 flex space-x-2  text-white  w-[100%] items-center">
        <p className="w-[8%]  p-2">{props.index}</p>
        <p className="w-[50%]  p-2">{props.questionName}</p>
        <p className="flex text-amber-300 w-[10%]  p-2" style={{color:props.difficulty=='hard'?'#FF375F':props.difficulty=='easy'?'#07B8A3':'#FFC01E'}}>{props.difficulty}</p>
        <div className=" space-x-2 w-[30%] flex justify-between p-2">

        <input type="checkbox" className="w-6 h-6 " checked={props.solved}></input>
        <input type="checkbox" className="w-6 h-6" checked={props.marked}></input>
        <input type="checkbox" className="w-6 h-6" checked={props.doubt}></input>
        </div>
        <div className=" p-2  w-[20%]">

        <button className="flex items-center" onClick={()=>{
            setActivate(true);
        }}>Solution <svg class="w-6 h-6 font-bold text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>
</button>
        </div>
    </div>
            </>
    
);
}

export default Question;