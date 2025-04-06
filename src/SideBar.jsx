import { useNavigate } from "react-router-dom";

function SideBar() {
    
    let navigate=useNavigate();

    return ( <div className="w-[100%] rounded-2xl bg-gray-700 text-white ">
        <div className="flex flex-col items-center space-y-3 p-4 ">
            <p className="p-2 border-b-2 w-full text-center">Question Change</p>
            <hr className="bg-gray-400"></hr>
            <div className="flex justify-evenly items-center w-full space-x-4">

            <button className="bg-sky-400 text-md font-semibold  p-2  w-fit rounded-lg hover:bg-sky-500 " onClick={
                ()=>navigate("/addQuestion")
            }>Add</button>
            <button className="bg-sky-400 text-md font-semibold  p-2 rounded-lg w-fit hover:bg-sky-500">Remove </button>
            <button className="bg-sky-400 text-md font-semibold  p-2 rounded-lg w-fit hover:bg-sky-500">Update</button>
            </div>
        </div>
    </div>);
}

export default SideBar;