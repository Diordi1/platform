function QuestionLiner() {
    return ( 
        <div className="p-2 flex space-x-2   w-[100%] items-center text-white">
        <p className="w-[8%] ">Q.No</p>
        <p className="w-[50%] ">Question Name</p>
        <p className="flex w-[10%] ">Difficulty</p>
        <div className=" space-x-4 w-[30%] flex justify-between">
        <p className="w-fit">Solved</p>
        <p className="w-fit">Doubt</p>
        <p className="w- fit">Marked</p>
        {/* <input type="checkbox" className="w-4 h-3 "></input>
        <input type="checkbox" className="w-3 h-3"></input>
        <input type="checkbox" className="w-3 h-3"></input> */}
        </div>
        <div className="p-2 bg-dark rounded-2xl w-[20%]">

        <button className="text-white  "> Solution</button>
        </div>
    </div>
        // <div className="flex space-x-2 p-2  bg-white w-[60%]">
        //     <p>Q.No</p>
        //     <p>Question Name</p>
        //     <p>Difficulty</p>
        //     <p>Solved</p>
        //     <p>Doubt</p>
        //     <p>Marked</p>;
        //     <p>Solution</p>

        // </div>
     );
}

export default QuestionLiner;