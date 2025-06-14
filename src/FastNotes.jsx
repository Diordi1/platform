import {onChange,useState} from "react";
import { ocean } from "react-syntax-highlighter/dist/esm/styles/hljs";
function FastNotes() {
    // ]
    let[change,setChange]=useState("");
    let temoer=(event)=>{
        setChange(event.target.value);
        console.log(event.target.value)
    }
    return ( <div className="border-2 border-white flex flex-col w-[25%]">
        <input type="text " className="bg-gray-600" placeholder="enter here"></input>
        
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

<div>
    <input type="date" className="bg-gray-600"  onChange={temoer}></input>
</div>

        {/* <input type="textarea" aria-rowcount={6} aria-colcount={10}></input> */}
    </div> );
}
export function Temp(){
    return (
        <p> hello</p>
    )
}
export default FastNotes;