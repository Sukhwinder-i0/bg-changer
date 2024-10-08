import { useState } from "react"


function App() {
  const [color, setColor] = useState("#36454F")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
    <div className="flex flex-col-reverse justify-center items-center h-screen font-bold text-4xl ">
    <h1>Sukhwinder Singh</h1>
    <img src="assets/back-side-2.jpg" alt="User" className="w-28 rounded-full overflow-hidden " />
    </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">

          <button 
          // onClick={setColor} : by this we cant enter parametrs
          // onClick={setColor()} : by this we are passing the returned value not the function but we need to pass function

          onClick={() => setColor("red")}  // callback
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
           onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button 
           onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>

          <button 
           onClick={() => setColor("violet")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "violet"}}
          >Violet</button>

          <button
           onClick={() => setColor("indigo")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "indigo"}}
          >Indigo</button>

          <button 
           onClick={() => setColor("lavender")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "lavender"}}
          >Lavender</button>

          <button 
           onClick={() => setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>

          <button 
           onClick={() => setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >Purple</button>

          <button 
           onClick={() => setColor("aqua")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "aqua"}}
          >Aqua</button>

        </div>
      </div>
    </div>
  )
}

export default App
