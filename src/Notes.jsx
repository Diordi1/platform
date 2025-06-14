import { use, useState } from "react";
import NotesItem from "./NotesItem";
import FastNotes from "./FastNotes";
import axios from "axios";
function Notes() {
     const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState("");
    let [noteData,setNoteData]=useState({
        title:"",
        content:""
    })
    useState(() => {
        axios.get("https://platform-qu8a.onrender.com/notes/all").then((res)=>{
            setNotes(res.data);
        }).catch((err)=>{
            console.error("Error fetching notes:", err);
        });
    }, []);

    let noteSet=(e)=>{
        setNoteData({...noteData,[e.target.name]:e.target.value});
        console.log(noteData);
        setNewNote(e.target.value);
    }

    const addNote = () => {
        if (newNote.trim()) {
            setNotes([...notes, newNote]);
            setNewNote("");
        }
        axios.post("https://platform-qu8a.onrender.com/notes/add",{
            heading: noteData.title,
            content: noteData.content
        }).then((res) => {
            console.log("Note added successfully:", res.data);
        }).catch((err) => {
            console.error("Error adding note:", err);
        });
    };
    return (  
        <div className="flex mt-8 w-[100%] pr-4">

        <div className="  w-[70%] p-8 pt-0 pb-0">
            <div className="" >
            <ul className="space-y-2 flex-grow ">
                {
                    notes.map((note, index) => (
                        <NotesItem key={index} data={note} />
                    ))
                }
                
            </ul>

             {/* <div className="flex-grow overflow-y-scroll scroll-smooth h-[90vh]">
                {notes.map((note, index) => (
                    <div key={index} className="bg-gray-700 p-3 m-2 rounded-md text-white">
                        {note}
                    </div>
                ))}
            </div> */}

            </div>
        </div>
         <div className=" w-[30%]  sticky top-[150px] p-3 border-t h-fit rounded-lg border-gray-600 bg-gray-800 flex-shrink-0">
                <div className="w-full flex gap-2 justify-center h-full py-20 ">
                    <div className=" w-full flex flex-col gap-4">

                    <input 
                        type="text"
                        value={noteData.title}
                        onChange={noteSet}
                        className="max-w-full bg-gray-700 text-white p-2 rounded-lg border border-gray-600"
                        placeholder="Type a note..."
                        name="title"
                        
                    />
                    <textarea
                    value={noteData.content}
                    className="bg-gray-700 text-white p-2 rounded-lg border border-gray-600  "
                    rows={6}
                    placeholder="Write Your Note here "
                    name="content"
                    onChange={noteSet}
                    ></textarea>
                    <button 
                        onClick={addNote}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                        Add
                    </button>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Notes;