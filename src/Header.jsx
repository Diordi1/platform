import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Notes from "./Notes";

function Header() {
    window.addEventListener("scroll",()=>{
        const header = document.querySelector('header');
        const header1 = document.querySelector('.temp1');
        const header2 = document.querySelector('.temp2');
        // Check if the scroll position is greater than a certain value
        if (window.scrollY > 50) {
          // Add the shrink class to the header
          header.classList.add('header-shrink');
          header1.classList.add('header1');
          header2.classList.remove('header1');
          
        } else {
            header2.classList.add ('header1');
            // Remove the shrink class from the header
            header1.classList.remove('header1');

          header.classList.remove('header-shrink');
        }
    })
    return (  <div className="sticky px-6  z-10 top-4   ">
        <header className="bg-transparent w-full  p-3 sticky z-20 backdrop-blur-lg  border-white rounded-full flex justify-between items-center">
        <div className="flex text-white space-x-2 items-center justify-between">
            <img src="logo.png " className="h-7 w-7"></img>
            <h1 className="temp1">Code Platform</h1>
            <h1 className="temp2">Platform</h1>
        </div>
        <div className="flex space-x-4 text-gray-300 items-center justify-center p-2">
            <BrowserRouter>
            {/* <Routes>
                <Route path="/notes" element={<Notes/>} />
            </Routes> */}
            <p className="hover:text-gray-400">Targets</p>
            <p className="hover:text-gray-400">Pending</p>
            <p className="hover:text-gray-400"><Link to="/notes" onClick={(e)=>{
                e.preventDefault();
                window.location.href = "/notes"; // Redirect to the Notes page
            }}>Notes</Link></p>
            <p className="hover:text-gray-400">Ache Questions</p>
            </BrowserRouter>
        </div>
        <div>
            <button className="text-md  rounded-xl p-3 text-sky-400 hover:text-sky-500"><a href="https://phpmyadmin.co/">Database Health</a></button>
            <button className="text-md rounded-4xl p-3 text-white bg-sky-400 hover:bg-sky-500 shadow-sky-400 shadow-2xl"><a href="https://platform-49vq.onrender.com/actuator">Health Status</a></button>
        </div>
        </header>
    </div>);
}

export default Header;