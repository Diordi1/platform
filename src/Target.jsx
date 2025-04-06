import { useEffect } from 'react';
import {useState} from 'react';

function Traget() {
    let [target,setTarget]=useState([]);
    let [space1,setSpace1]=useState("");
    useEffect(()=>{
        setTarget(JSON.parse(localStorage.getItem("target"))||[]);
        
    },[1])
    let clicker=()=>{
        if(space1.length!=0){
            setTarget([...target,space1]);
            localStorage.setItem("target",JSON.stringify([target]))
            setSpace1("");

        }else{
            console.log("Entered Nothing")
        }
    }
    return ( <div className=" border-2 rounded-lg border-gray-500 p-2 ">
        
        <div className="flex">
            <input type="text" className="bg-gray-600 text-white p-2 rounded-lg w-[100%] " placeholder="Enter Target" value={space1} onChange={(event)=>{
                setSpace1(event.target.value);

            }}></input>
            <button className="bg-sky-400 text-white text-lg p-1 rounded-md ms-4" onClick={clicker} >Enter</button>
        </div>
        <div className=" h-[90%]">

        <div className="flex flex-col space-y-4 mt-4   overflow-y-scroll scroll-smooth h-60">
            {

                target.map((item,idx)=>{
                    return(
                        <div className="flex border-2 rounded-lg px-2 border-white" key={idx}>

            <p className="w-[100%]  text-white text-lg p-2 ps-0">{item}</p>
            <button className="text-red-500 " idx={idx} onClick={(event)=>{
                let temp=[...target];
                temp.splice(event.target.getAttribute('idx'),1);
                setTarget(temp);
                localStorage.setItem("target",JSON.stringify(temp));


            }}>Delete</button>
            </div>
                    )       
                })
            }
            
            
        </div>
        </div>
    </div> );
}

export default Traget;