import React, { useState } from "react";

function Increment() {

    const [add, setadd] = useState(100);
    const [state, setstate] = useState("saravanan");
    const [color, setcolor] = useState("bg-red-600");  // FIXED

    return (
        <div>





            <button onClick={() => setadd(add + 1)}>Increment</button>
            <h1>{add}</h1>
            <button onClick={() => setstate("abi")}>change</button>
            <p>{state}</p>

            <div className={`${color} p-4 text-white`}>
                <p>{color}</p>
            </div>

            <button onClick={() => setcolor("bg-pink-600")}>color</button>

        </div>
    );
}

export default Increment;
