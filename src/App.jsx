import React from 'react';

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import QuestionCatalog from './QuestionCatalog'
import AddQuestion from './AddQuestion'
// import AddQuestion from './AddQuestion'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header';
import Notes from './Notes';

let LazyQuestion=React.lazy(()=>import("./QuestionCatalog"))
let LazyAddQuestion=React.lazy(()=>import("./AddQuestion"))
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='w-[100vw] h-[100vh] background-neutral-900' 
      style={{
        backgroundImage:"radial-gradient(circle at 0.5px 0.5px,rgba(9,182,212,0.2) 0.6px, transparent 0)",
        backgroundSize:"7px 7px",
        backgroundRepeat:"repeat",
      }}
    >
      <Header/>
      <BrowserRouter>
        <Routes>  
          <Route path="/" element={<QuestionCatalog/>} />
          <Route path="/notes" element={

            <Notes/>
            
            
            }/>
          <Route path="/addQuestion" element={
            <React.Suspense fallback={
              console.log("loading...")
            }>

            <AddQuestion/>
            </React.Suspense>
            
            } />
          <Route path="/questionCatalog" element={
            <React.Suspense fallback={<div className='bg-red-600'>Loading...</div>}>

            <LazyQuestion/>
            </React.Suspense>
            
            } />
          </Routes>
      {/* </BrowserRouter> */}
        </BrowserRouter>
      {/* <QuestionCatalog/> */}
      {/* <AddQuestion/> */}
    </div>
  )
}

export default App
