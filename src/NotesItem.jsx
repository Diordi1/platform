import { useState } from "react";
function NotesItem(props) {
    let [tempe,setTempe]=useState(false);
   
  
    let click=()=>{
        setTempe(!tempe);

    }
    return ( 
        <li className="text-lg flex flex-col ">
                    <div className="flex justify-between items-center cursor-pointer bg-gray-600 p-2 rounded-lg" onClick={click} >

                    <p>{props.data.heading}</p>
                    <div className="flex space-x-2 items-center">

                    <p>{props.data.ld.substring(0,10)}</p>
                    <p onClick={click} className="cursor-pointer"><svg class="w-6 h-6 text-gray-800 dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
</svg>
</p>
                    </div>
                    </div>
                    <div className=" text-white text-lg p-2 bg-gray-800 border-3 border-black py-2" hidden={tempe}>
                        <p className="">{props.data.content}</p>
                    </div>
                </li>
     );
}

export default NotesItem;