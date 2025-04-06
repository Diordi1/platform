import { use, useEffect, useState,CSSProperties } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import BounceLoader from "react-spinners/BounceLoader";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
function AddQuestion() {
    let navigate=useNavigate();
    let [val,setVal]=useState({
       questionName:"Find the N",
        questionExplanation:"This is question Explanation",
        solved:false,
        marked:false,
        doubt:false,
        answer:"This is the answer to the question of the questipon",
        explanation:"This is the explanation",
        difficulty:"medium"
    })
    const override = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "0 auto",
        borderColor: "#38D6B7",
      };
    let[temp,setTemp]=useState({});
    let [loading,setLoading]=useState(false);
    let changet=(event)=>{
        setVal({...val,[event.target.name]:event.target.type === "checkbox" ? !val[event.target.name] : event.target.value});
        console.log(val);
        // console.log(event.target.type)

    }
    let clicke1=()=>{
        setLoading(true);
        axios.post("http://localhost:8080/coding/questions/add",val).then((res)=>{
            console.log(res.data);
            setTemp(res.data);
            setLoading(false);
            
            toast.success("Question Added Successfully", {
                duration: 4000,
                position: 'top-right',
                style: {
                    background: '#363636',
                    color: '#fff',
                },
            });
            setTimeout(() => {
                // Place delayed action here, like resetting the form or navigating away
                // Navigate("/questionCatalog");
                navigate("/questionCatalog");
                
                setLoading(false);
            }, 1000);
            
            
        }).catch((err)=>{
            console.log(err);
            setLoading(false);
            toast.error("Error in Adding Question",{
                duration:4000,
                position:'top-left',
                style:{
                    background:'#363636',
                    color:'#fff',
                }
            })
        })
    }
    return ( <div className="flex items-center justify-center w-[80%] h-[100%] ">
        {/* <Toaster />
        {
            temp.width>0 ? <ClipLoader
            color={"#ffffff"}
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />:<></>
        } */}
        {loading? <div className="backdrop-blur-lg w-[100%] h-[100%] absolute">

<div className="absolute  left-[45%] top-[40%] ">

<BounceLoader
color={"#06B6D4 "}
loading={loading}
cssOverride={override}
size={100}
aria-label="Loading Spinner"
data-testid="loader"
/>
</div>
</div>:<></>}
       
        <div className="flex flex-col items-center space-y-8 p-4 bg-gray-600 w-[50%] rounded-xl">
            <div className="relative w-full text-center  ">
                <p className="text-lg text-green-600 text-start absolute left-0" onClick={()=>{
                    navigate("/")
                }}>
                <svg class="w-6 h-6 text-green-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
</svg>

                </p>
                <p>Add Question</p>
            </div>
            {/* <p className="text-xl font-bold flex justify-between"><p className="text-green-400">Home</p> <p><Add Question</p> */}
            <div className="space-y-5">
            <Toaster />
                <div>
                <label className="text-white"  >Question Name : </label>
                <input type="text" placeholder="Name..." name="questionName" className="p-2 rounded-2xl w-[100%] bg-gray-700 text-white" onChange={changet}></input>
                </div>
                <div>
                <label className="text-white">Question Description : </label>
                <input type="text" placeholder="Description..." className="p-2 rounded-2xl w-[100%] bg-gray-700 text-white" name="questionExplanation" onChange={changet}></input>
                </div>
                <div>
                <label className="text-white">Solution : </label>
                <textarea rows="4" cols="50" placeholder="Solution..." className="p-2 rounded-2xl w-[100%] bg-gray-700 text-white" name="explanation" onChange={changet}></textarea>
                {/* <input type="textArea" placeholder="Solution..." className="p-2 rounded-2xl w-[100%] bg-gray-700 text-white" name="explanation" onChange={changet}></input> */}
                </div>
                <div className="flex">
                <label className="text-white">Solved / Marked / Doubt: </label>
                <div className="flex space-x-4 w-[40%] items-center">

                <input type="checkbox" placeholder="Name..." className="p-2 rounded-2xl w-[100%] bg-gray-700 text-white" name="solved" onChange={changet}></input>
                {/* <label className="text-white">Solved : </label> */}
                <input type="checkbox" placeholder="Name..." className="p-2 rounded-2xl w-[100%] bg-gray-700 text-white" name="marked" onChange={changet}></input>
                {/* <label className="text-white">Solved : </label> */}
                <input type="checkbox" placeholder="Name..." className="p-2 rounded-2xl w-[100%] bg-gray-700 text-white" name="doubt" onChange={changet}></input>
                </div>
                
                </div>
                <div>

                    <label className="text-white">Difficulty</label>
                    <select className="p-2 rounded-2xl w-[100%] bg-gray-700 text-white" name="difficulty" onChange={changet}>
                        <option value="select">Select</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                        </select>
                </div>
                <div className="flex ">
                    <label className="text-white me-10">Pending : </label>
                    <input type="checkbox" placeholder="Name..." className="p-2 rounded-2xl w-[10%] bg-gray-700 text-white"></input>
                </div>
                <div>
                <label className="text-white">Doubt to be asked: </label>
                <input type="text" placeholder="Doubt..." className="p-2 rounded-2xl w-[100%] bg-gray-700 text-white"></input>
                </div>
                <div>

                <button className="text-white bg-sky-400 p-2 w-full rounded-2xl" onClick={clicke1}>Submit</button>
                </div>
            </div>

        </div>
    </div> );
}

export default AddQuestion;