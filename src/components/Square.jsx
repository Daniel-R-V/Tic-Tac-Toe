export const Square = ({ item, updateValue, index }) => (
    <div onClick={() => !item && updateValue(index)} className="h-24 border-solid border-2 border-slate-200 text-center flex justify-center align-middle cursor-pointer">
        <span className={`text-red-500 font-extrabold flex items-center justify-center text-3xl`}>{item}</span>
    </div>
);
