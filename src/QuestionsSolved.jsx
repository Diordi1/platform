import React, { useState } from 'react';

function QuestionsSolved() {
    let [buttons,setButtons]=useState({
        leetcode:0,
        codeforces:0    
    })
    let temper=(event)=>{
        if(event.target.textContent=='-'){
            if(buttons[event.target.name]!=0) 
            setButtons({...buttons,[event.target.name]:buttons[event.target.name]-1});

        }else{
            setButtons({...buttons,[event.target.name]:buttons[event.target.name]+1});

        }


    }
    setInterval(()=>{
        let now1=new Date();
        if(now1.getHours()==4&&now1.getMinutes()==30){
            setButtons({leetcode:0,codeforces:0});

        }
    },6000);

    return (
        <div className="border-2 border-gray-500 p-2 rounded-xl">
            <div className="text-xl text-white place-self-center bg-sky-400 w-full text-center">To Be solved</div>
        <div className="text-white   rounded-lg w-[100%]  h-[30%] mt-7 flex flex-col space-y-4">
            <div className="flex justify-between border bg-gray-600 p-4 rounded-lg">
                <p>LeetCode</p>
                <div className="flex space-x-2  items-center">

                <button className="text-sky-400 border-2 h-fit w-fit px-2" name="leetcode" onClick={temper}>-</button>
                <p className="bg-gray-800 px-2">{buttons.leetcode}</p>
                <button className="text-white bg-sky-400 px-2 border-2 border-sky-400" name="leetcode" onClick={temper}>+</button>
                </div>

            </div>
            <div className="flex justify-between border bg-gray-600 p-4 rounded-lg">
                <p>Codeforces</p>
                <div className="flex space-x-2  items-center">

                <button className="text-sky-400 border-2 h-fit w-fit px-2" name="codeforces" onClick={temper}>-</button>
                <p className="bg-gray-800 px-2">{buttons.codeforces}</p>
                <button className="text-white bg-sky-400 px-2 border-2 border-sky-400" name='codeforces' onClick={temper}>+</button>
                </div>

            </div>
            
        </div>
            </div> 
     );
}

export default QuestionsSolved;