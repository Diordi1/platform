import Question from "./Question";
function Questioneer(props) {
    return ( 
        <div>
            {/* <Question></Question> */}
            {/* <hr className="bg-white w-full"></hr> */}
            {
                props.questions.map((quest1,idx)=>{

                    return(
                        <div style={{backgroundColor:idx%2==0?"":"#2A2A2A"}}>
                     <Question index={idx+1} questionName={quest1.questionName} difficulty={quest1.difficulty} solved={quest1.solved} description={quest1.explanation} note={quest1.questionExplanation} marked={quest1.marked} doubt={quest1.doubt}></Question>
                            </div>

                    )
                })
            }
        </div>
     );
}

export default Questioneer;