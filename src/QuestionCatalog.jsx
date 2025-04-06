import PendingQuestion from "./PendingQuestion";
import Popup from "./Popup";
import Question from "./Question";
import Questioneer from "./Questioneer";
import QuestionLiner from "./QuestionLiner";
import QuestionPara from "./QuestionPara";
import SideBar from "./SideBar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Traget from "./Target";
import QuestionsSolved from "./QuestionsSolved";
let LazyQuestion=React.lazy(()=>import("./Questioneer"))
function QuestionCatalog() {
    let [questions,setQuestions]=useState([]);
useEffect(()=>{

    axios.get("https://platform-qu8a.onrender.com/coding/questions/allQuestions")
    .then((res)=>{console.log(res.data)
        setQuestions(res.data)
    })
    .catch(err=>console.log(err));
},[1]);



    return (<>
    <div className="flex justify-between ">
        {/* <Popup/> */}
    <div className="w-[70%] pt-4  h-screen">

        <div className="flex justify-between space-x-8 p-6 ">
            <QuestionPara/>
            <QuestionPara/>
            <QuestionPara/>
        </div>
        <div className="p-6 pt-0 h-full ">
            <div className=" top-0 z-10  bg-gray-800 p-2">

            <QuestionLiner></QuestionLiner>
            </div>
            <hr></hr>
            
            <div className=" ">
            <React.Suspense fallback={<div className="bg-red-600">Loading...</div>}>
            <LazyQuestion questions={questions}></LazyQuestion>
            </React.Suspense>
            </div>
        </div>
    </div>
    <div className="flex flex-col space-y-8 w-[30%] p-2 pr-8 pl-6 pt-5 h-full overflow-y-scroll">

    <QuestionsSolved/>
    <Traget/>
    <PendingQuestion/>
    <SideBar/>
    </div>
    </div>
    </>  );
}

export default QuestionCatalog;