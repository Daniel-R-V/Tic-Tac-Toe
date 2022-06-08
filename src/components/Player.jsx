export const Player = ({ isPlayerX }) => {
    return (
        <span className="block text-center p-3 text-xl font-extrabold tracking-wider text-slate-200">
            Next player is: <div className={`animate-bounce text-slate-200 font-extrabold`}> {isPlayerX ? "X" : "O"} </div>
        </span>
    );
};
