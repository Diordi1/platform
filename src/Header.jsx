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
            <p className="hover:text-gray-400">Targets</p>
            <p className="hover:text-gray-400">Pending</p>
            <p className="hover:text-gray-400">Shortcuts</p>
            <p className="hover:text-gray-400">Ache Questions</p>
        </div>
        <div>
            <button className="text-md  rounded-xl p-3 text-sky-400 hover:text-sky-500">Database Health</button>
            <button className="text-md rounded-4xl p-3 text-white bg-sky-400 hover:bg-sky-500 shadow-sky-400 shadow-2xl">Health Status</button>
        </div>
        </header>
    </div>);
}

export default Header;