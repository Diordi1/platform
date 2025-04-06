function PendingQuestion() {
    return ( <div className="w-[100%] rounded-lg  text-white mt-6 border border-gray-400">
        <div className="flex flex-col items-center space-y-3 p-2 ">
            <p className="p-4 border-b-2 w-full text-center">Pending Questions</p>
            {/* <hr className="bg-gray-400"></hr> */}
            <div className="flex  items-center justify-between w-full">
                <p className="text-xl">1. </p>
                <p className="text-xl">Find the N</p>
                <button className="bg-cyan-500   p-2 rounded-2xl flex text-xl items-center">Solve
                <svg class="w-6 h-6 font-bold text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/>
</svg>
                </button>
            </div>
        </div>
    </div>);
}

export default PendingQuestion;