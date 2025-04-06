import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
function Popup(props) {
    return ( 
        props.activate ?
        <div>
            <div className="absolute top-0 left-0 bg-gray-900 text-white w-[100%] h-screen z-20 p-10 overflow-y-scroll scroll-smooth">
                    <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={()=>{
                        props.setActivate(false);
                    }}>X</button>
                <p>
                    <p className="text-3xl font-bold text-center"> Solution</p>
                    <div className="flex justify-center flex-col">

                    <p className="w-[90%]">
                        <p className="text-xl font-bold mb-4">Note :</p>
                        {props.note}
                        </p>
                    <p>
                        <p className="text-xl font-bold mb-4">Code :</p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam alias blanditiis reiciendis rerum mollitia iusto eaque, accusamus dolores nesciunt eum nam autem. Qui pariatur cum quia eius accusamus eum, doloribus, necessitatibus, praesentium neque quam a tempora illo vitae eos dolore!
                    </p>
                    <pre className='bg-gray-800 p-4 rounded-xl mt-8'>{props.code1}</pre>
                    {/* <SyntaxHighlighter language="java" style={dark}>
      {props.code1}
    </SyntaxHighlighter> */}
                    </div>
                </p>
            </div>
        </div>:<></>
     );
}

export default Popup;