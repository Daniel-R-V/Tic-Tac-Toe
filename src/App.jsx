import { Board } from "./components/Board";

function App() {
    return (
        <div className="App bg-gray-800 w-full h-screen ">
            <h2 className="text-center font py-5 uppercase text-4xl font-extrabold tracking-wider text-slate-200">Tic tac toe</h2>
            <Board />
        </div>
    );
}

export default App;
