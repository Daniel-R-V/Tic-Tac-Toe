import { useState } from 'react'

function App() {
  const [square, setSquare] = useState(Array(9).fill(null))
  return (
    <div className="App bg-gray-800 w-full h-screen ">
      <h2 className="text-center font py-5 uppercase text-4xl font-extrabold tracking-wider text-slate-200">
        Tic tac toe
      </h2>
      <div>
        <span className="block text-center p-3 text-xl font-extrabold tracking-wider text-slate-200">
          Next player is:{' '}
          <div className={`animate-bounce text-slate-200 font-extrabold`}>
            {' '}
            {'X'}{' '}
          </div>
        </span>
        <div className="grid grid-cols-3 mx-auto w-64 border-slate-200 border-solid border-2">
          {square.map((item) => {
            return (
              <div className="h-24 border-solid border-2 border-slate-200 text-center flex justify-center align-middle cursor-pointer">
                <span
                  className={`text-red-500 font-extrabold flex items-center justify-center text-3xl`}>
                  {item}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
